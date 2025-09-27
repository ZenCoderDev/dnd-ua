-- CreateTable
CREATE TABLE "public"."tools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "contents" TEXT[],

    CONSTRAINT "tools_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tools_name_key" ON "public"."tools"("name");
