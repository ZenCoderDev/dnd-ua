import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ ждём params

  const raceData = await prisma.race.findUnique({
    where: { id: decodeURIComponent(id) },
    include: {
        subraces: true,
        traits: true
    }
  });

  if (!raceData) {
    return NextResponse.json({ error: "Class not found" }, { status: 404 });
  }

  console.log(raceData)

  return NextResponse.json(raceData);
}
