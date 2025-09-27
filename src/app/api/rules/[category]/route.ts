import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/rules/combat
export async function GET(
  req: Request,
  { params }: { params: { category: string } }
) {
  const { category } = await params;

  try {
    const rules = await prisma.gameRule.findMany({
      where: { category: { equals: category, mode: "insensitive" } },
      orderBy: { id: "asc" },
    });

    return NextResponse.json(rules);
  } catch (error) {
    console.error("Помилка отримання правил:", error);
    return NextResponse.json({ error: "Не вдалося завантажити правила" }, { status: 500 });
  }
}
