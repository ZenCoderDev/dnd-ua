import { prisma } from "../lib/prisma";

async function main() {
  const result = await prisma.spell.updateMany({
    where: {
      id: {
        gt: 138,
      },
    },
    data: {
      level: 2,
    },
  });

  console.log(`✅ Updated ${result.count} spells`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
