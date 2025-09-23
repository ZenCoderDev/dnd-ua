-- AlterTable
ALTER TABLE "public"."ClassLong" ADD COLUMN     "armor" JSONB NOT NULL DEFAULT '[]',
ADD COLUMN     "equipment" JSONB NOT NULL DEFAULT '[]',
ADD COLUMN     "tools" JSONB NOT NULL DEFAULT '[]',
ADD COLUMN     "weapons" JSONB NOT NULL DEFAULT '[]';
