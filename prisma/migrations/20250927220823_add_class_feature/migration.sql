-- CreateTable
CREATE TABLE "public"."ClassFeature" (
    "id" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_uk" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "description_uk" TEXT NOT NULL,
    "requirements" JSONB NOT NULL,

    CONSTRAINT "ClassFeature_pkey" PRIMARY KEY ("id")
);
