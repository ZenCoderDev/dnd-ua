import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const {id} = await context.params;

  const data = await prisma.subclass.findMany({
    where: { classId: decodeURIComponent(id) },
    // include: { ... } // добавь связи при необходимости
  });

  if (!data) {
    return NextResponse.json({ error: "Subclass not found" }, { status: 404 });
  }

  console.log(data);

  return NextResponse.json(data);
}
