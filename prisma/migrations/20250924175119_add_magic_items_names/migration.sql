/*
  Warnings:

  - You are about to drop the column `name` on the `MagicItem` table. All the data in the column will be lost.
  - Added the required column `nameEn` to the `MagicItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameUa` to the `MagicItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."MagicItem" DROP COLUMN "name",
ADD COLUMN     "nameEn" TEXT NOT NULL,
ADD COLUMN     "nameUa" TEXT NOT NULL;
