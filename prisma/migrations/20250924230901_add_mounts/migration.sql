-- CreateTable
CREATE TABLE "public"."mounts_vehicles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "carryingCapacity" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "mounts_vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mounts_vehicles_name_key" ON "public"."mounts_vehicles"("name");
