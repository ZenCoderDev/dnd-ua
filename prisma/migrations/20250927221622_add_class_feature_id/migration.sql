/*
  Warnings:

  - The primary key for the `ClassFeature` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "public"."ClassFeature" DROP CONSTRAINT "ClassFeature_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ClassFeature_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ClassFeature_id_seq";
