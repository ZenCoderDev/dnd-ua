-- CreateTable
CREATE TABLE "public"."trade_goods" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "trade_goods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trade_goods_name_key" ON "public"."trade_goods"("name");
