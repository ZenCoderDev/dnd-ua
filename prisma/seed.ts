import path from "path";
import fs from "fs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type RuleJson = {
  id: string; // технічний ідентифікатор у файлах (стане ruleId)
  category: string;
  subCategory?: string | null;
  name: string;
  description: string;
  source?: string | null;
};

async function loadRulesFromDir(dir: string) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".json"));
  for (const file of files) {
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    let parsed: RuleJson[] = [];
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
      // Невелика валідація
      if (!r.id || !r.category || !r.name || !r.description) {
        console.warn(`Пропускаю запис у ${file} — не вистачає обов'язкових полів:`, r);
        continue;
      }

      try {
        await prisma.gameRule.upsert({
          where: { ruleId: r.id },
          update: {
            category: r.category,
            subCategory: r.subCategory ?? null,
            name: r.name,
            description: r.description,
            source: r.source ?? null,
          },
          create: {
            ruleId: r.id,
            category: r.category,
            subCategory: r.subCategory ?? null,
            name: r.name,
            description: r.description,
            source: r.source ?? null,
          },
        });
        console.log(`✅ Imported rule: ${r.id} (${r.name})`);
      } catch (err) {
        console.error(`❌ Error importing rule ${r.id}:`, err);
      }
    }
  }
}

async function main() {
  const dir = path.join(process.cwd(), "public", "data", "rules");
  if (!fs.existsSync(dir)) {
    console.error(`Папка з правилами не знайдена: ${dir}`);
    process.exit(1);
  }
  await loadRulesFromDir(dir);
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
