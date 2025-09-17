import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
   const backgrounds = await prisma.background.findMany({
    include: {
      features: true,
    },
  });

  console.log(backgrounds)
  return NextResponse.json(backgrounds);
}