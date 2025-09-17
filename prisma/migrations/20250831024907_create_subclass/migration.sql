-- CreateTable
CREATE TABLE "public"."Background" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "skills" TEXT[],
    "languages" INTEGER NOT NULL,
    "equipment" TEXT[],

    CONSTRAINT "Background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BackgroundFeature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "backgroundId" INTEGER,

    CONSTRAINT "BackgroundFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Class" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ClassLong" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "hitDice" TEXT NOT NULL,
    "image" TEXT,
    "primaryAbility" TEXT[],
    "savingThrows" TEXT[],
    "skillsChoose" INTEGER NOT NULL,
    "skillsFrom" TEXT[],
    "description" TEXT NOT NULL,
    "progression" JSONB NOT NULL,
    "features" JSONB NOT NULL,

    CONSTRAINT "ClassLong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Race" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "source" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "speed" TEXT[],
    "abilityBonuses" TEXT[],
    "languages" TEXT[],
    "darkvision" TEXT,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Trait" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "raceId" TEXT,

    CONSTRAINT "Trait_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SubRace" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "abilityBonuses" TEXT,
    "traits" JSONB NOT NULL,
    "raceId" TEXT,

    CONSTRAINT "SubRace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Spell" (
    "id" SERIAL NOT NULL,
    "nameUa" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "castingTime" TEXT NOT NULL,
    "range" TEXT NOT NULL,
    "components" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "damage" JSONB,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Subclass" (
    "id" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameUk" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" JSONB NOT NULL,
    "classId" TEXT NOT NULL,

    CONSTRAINT "Subclass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MagicItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "attunement" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "effects" JSONB NOT NULL,

    CONSTRAINT "MagicItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_ClassSpells" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ClassSpells_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ClassSpells_B_index" ON "public"."_ClassSpells"("B");

-- AddForeignKey
ALTER TABLE "public"."BackgroundFeature" ADD CONSTRAINT "BackgroundFeature_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "public"."Background"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClassLong" ADD CONSTRAINT "ClassLong_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Trait" ADD CONSTRAINT "Trait_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "public"."Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SubRace" ADD CONSTRAINT "SubRace_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "public"."Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Subclass" ADD CONSTRAINT "Subclass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ClassSpells" ADD CONSTRAINT "_ClassSpells_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ClassSpells" ADD CONSTRAINT "_ClassSpells_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;
