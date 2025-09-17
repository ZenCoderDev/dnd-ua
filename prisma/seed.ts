import path from "path";
import { PrismaClient } from "@prisma/client";
import { readdirSync, readFileSync } from "fs";

const prisma = new PrismaClient();

interface TraitSeed {
  name: string;
  description: string;
}

interface SubRaceSeed {
  id: string;
  name: string;
  image?: string;
  abilityBonuses?: string;
  traits: any; // Json
}

interface RaceJson {
  id: string;
  name: string;
  image?: string;
  source: string;
  version: string;
  size: string;
  speed: Record<string, number>; // например { walk: 30 }
  ability_bonuses: Record<string, number>; // например { strength: 2, charisma: 1 }
  languages: string[];
  darkvision?: string | null;
  traits: TraitSeed[];
  subraces?: SubRaceSeed[];
}

async function main() {
  const racesDir = path.join(process.cwd(), "public", "data", "races");

  // все файлы кроме short.json
  const files = readdirSync(racesDir).filter(
    (file) => file.endsWith(".json") && file !== "short.json"
  );

  for (const file of files) {
    const filePath = path.join(racesDir, file);
    const raw: RaceJson = JSON.parse(readFileSync(filePath, "utf-8"));

    // преобразуем speed в string[]
    const speedEntries = Object.entries(raw.speed);
    const speedArr =
      speedEntries.length === 1 && speedEntries[0][0] === "walk"
        ? [`${speedEntries[0][1]}`]
        : speedEntries.map(([type, value]) => `${type}: ${value}`);

    // преобразуем ability_bonuses в string[]
    const abilityBonusesArr = Object.entries(raw.ability_bonuses).map(
      ([ability, bonus]) => `${ability} +${bonus}`
    );

    const existing = await prisma.race.findFirst({
      where: { name: raw.name },
    });

    if (existing) {
      console.log(`Race "${raw.name}" уже существует, пропускаю...`);
    } else {
      await prisma.race.create({
        data: {
          id: raw.id,
          name: raw.name,
          image: raw.image,
          source: raw.source,
          version: raw.version,
          size: raw.size,
          speed: speedArr,
          abilityBonuses: abilityBonusesArr,
          languages: raw.languages,
          darkvision: raw.darkvision || null,
          traits: {
            create: raw.traits.map((t) => ({
              name: t.name,
              description: t.description,
            })),
          },
          subraces: raw.subraces
            ? {
                create: raw.subraces.map((s) => ({
                  id: s.id,
                  name: s.name,
                  image: s.image,
                  abilityBonuses: s.abilityBonuses || null,
                  traits: s.traits,
                })),
              }
            : undefined,
        },
      });

      console.log(`Race "${raw.name}" добавлена!`);
    }
  }

  console.log("✅ Все расы загружены!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
