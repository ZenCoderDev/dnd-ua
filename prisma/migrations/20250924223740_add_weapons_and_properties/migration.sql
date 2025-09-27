-- CreateTable
CREATE TABLE "public"."weapons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "damage" TEXT NOT NULL,
    "damageType" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "weapons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."properties" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."weapons_on_properties" (
    "weaponId" INTEGER NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "weapons_on_properties_pkey" PRIMARY KEY ("weaponId","propertyId")
);

-- AddForeignKey
ALTER TABLE "public"."weapons_on_properties" ADD CONSTRAINT "weapons_on_properties_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "public"."weapons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."weapons_on_properties" ADD CONSTRAINT "weapons_on_properties_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
