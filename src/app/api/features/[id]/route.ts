import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const data = await prisma.classFeature.findMany({
    where: { class: decodeURIComponent(id) },
  });

  if (!data) {
    return NextResponse.json({ error: "Features not found" }, { status: 404 });
  }

  console.log(data);

  return NextResponse.json(data);
}
