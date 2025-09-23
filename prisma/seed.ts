import path from "path";
import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";
import fs from "fs";

const prisma = new PrismaClient();

interface ClassJson {
  id: string;
  armor: Record<string, string>[];
  weapons: Record<string, string>[];
  tools: Record<string, string>[];
  equipment: string[];
}

async function main() {
  const classesDir = path.join(process.cwd(), "public", "data", "classes");
  const files = fs.readdirSync(classesDir);

  for (const file of files) {
    const filePath = path.join(classesDir, file);
    const raw: ClassJson = JSON.parse(readFileSync(filePath, "utf-8"));

    const existing = await prisma.classLong.findUnique({
      where: { id: raw.id },
    });

    if (!existing) {
      console.log(`⚠️ ${raw.id} не знайдено, пропускаю...`);
      continue;
    }

    await prisma.classLong.update({
      where: { id: raw.id },
      data: {
        armor: raw.armor,
        weapons: raw.weapons,
        tools: raw.tools,
        equipment: raw.equipment,
      },
    });

    console.log(`✅ Оновлено: ${raw.id}`);
  }

  console.log("🎉 Усі класи оновлені!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
