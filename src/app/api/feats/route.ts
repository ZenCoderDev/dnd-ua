import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const feats = await prisma.feat.findMany({});

  console.log(feats);
  return NextResponse.json(feats);
}
