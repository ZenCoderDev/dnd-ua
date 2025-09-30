import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const rarity = searchParams.get("rarity");
  const type = searchParams.get("type");
  const search = searchParams.get("search");

  try {
    const items = await prisma.magicItem.findMany({
      where: {
        ...(rarity ? { rarity } : {}),
        ...(type ? { type } : {}),
        ...(search
          ? {
              OR: [
                {
                  nameUa: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
                {
                  nameEn: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
              ],
            }
          : {}),
      },
      orderBy: { id: "asc" },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch magic items" },
      { status: 500 }
    );
  }
}
