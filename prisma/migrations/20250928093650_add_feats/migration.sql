-- CreateTable
CREATE TABLE "public"."Feat" (
    "id" SERIAL NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_uk" TEXT NOT NULL,
    "requirements" TEXT[],
    "description_en" TEXT NOT NULL,
    "description_uk" TEXT NOT NULL,

    CONSTRAINT "Feat_pkey" PRIMARY KEY ("id")
);
