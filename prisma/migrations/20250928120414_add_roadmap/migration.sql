-- CreateTable
CREATE TABLE "public"."RoadMap" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "RoadMap_pkey" PRIMARY KEY ("id")
);
