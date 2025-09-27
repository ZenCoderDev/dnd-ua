-- CreateTable
CREATE TABLE "public"."armor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "ac" INTEGER NOT NULL,
    "dexBonus" BOOLEAN,
    "dexBonusMax" INTEGER,
    "strengthReq" INTEGER,
    "stealthDisadvantage" BOOLEAN NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "armor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "armor_name_key" ON "public"."armor"("name");
