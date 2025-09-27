import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const properties = await prisma.property.findMany();
    return NextResponse.json(properties);
  } catch (error) {
    console.error("Properties API error:", error);
    return NextResponse.json({ error: "Failed to load properties" }, { status: 500 });
  }
}
