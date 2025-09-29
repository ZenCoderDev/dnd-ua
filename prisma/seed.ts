import path from "path";
import fs from "fs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ClassFeature = {
  name_en: string;
  name_uk: string;
  description_en: string;
  description_uk: string;
  requirements?: string[];
};

async function loadFeaturesFromDir() {
  const dir = path.join(process.cwd(), "public", "data");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  for (const file of files) {
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    let parsed: ClassFeature[] = [];
    try {
      parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        console.warn(`У файлі ${file} очікувався масив — пропускаю`);
        continue;
      }
    } catch (e) {
      console.error(`Помилка парсингу ${file}:`, e);
      continue;
    }

    for (const r of parsed) {
      try {
        await prisma.feat.upsert({
          where: { name_en: r.name_en },
          create: {
            name_en: r.name_en,
            name_uk: r.name_uk,
            description_en: r.description_en,
            description_uk: r.description_uk,
            requirements: r.requirements ? r.requirements : [],
          },
          update: {
            name_en: r.name_en,
            name_uk: r.name_uk,
            description_en: r.description_en,
            description_uk: r.description_uk,
            requirements: r.requirements ?? [],
          },
        });
        console.log(`✅ Imported feature : ${r.name_uk}`);
      } catch (err) {
        console.error(`❌ Error importing rule ${r.name_uk}:`, err);
      }
    }
  }
}

async function main() {
  await loadFeaturesFromDir();
  console.log("🎉 Усі правила з папки import-овані.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
