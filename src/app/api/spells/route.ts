import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const level = searchParams.get("level");
  const school = searchParams.get("school");
  const search = searchParams.get("search");
  const classKey = searchParams.get("classKey");

  try {
    const spells = await prisma.spell.findMany({
      where: {
        ...(level ? { level: Number(level) } : {}),
        ...(school ? { school } : {}),
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
        ...(classKey
          ? {
              classes: {
                some: {
                  id: classKey,
                },
              },
            }
          : {}),
      },
      orderBy: { level: "asc" },
      include: { classes: true },
    });

    return NextResponse.json(spells);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch spells" },
      { status: 500 }
    );
  }
}
