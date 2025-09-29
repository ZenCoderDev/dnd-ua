/*
  Warnings:

  - A unique constraint covering the columns `[name_en]` on the table `Feat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_uk]` on the table `Feat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Feat_name_en_key" ON "public"."Feat"("name_en");

-- CreateIndex
CREATE UNIQUE INDEX "Feat_name_uk_key" ON "public"."Feat"("name_uk");
