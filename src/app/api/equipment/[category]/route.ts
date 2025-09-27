import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  context: { params: Promise<{ category: string }> }
) {
  const { category } = await context.params;

  try {
    switch (category) {
      case "weapons": {
        const weapons = await prisma.weapon.findMany({
          include: { properties: { include: { property: true } } },
        });
        return NextResponse.json(
          weapons.map((w) => ({
            id: w.id,
            name: w.name,
            type: w.type,
            cost: w.cost,
            weight: w.weight,
            properties: {
              damage: w.damage,
              damageType: w.damageType,
              properties: w.properties.map((p) => p.property.name),
            },
          }))
        );
      }

      case "armor": {
        const armors = await prisma.armor.findMany();
        return NextResponse.json(
          armors.map((a) => ({
            id: a.id,
            name: a.name,
            type: a.type,
            cost: a.cost,
            weight: a.weight,
            properties: {
              ac: a.ac,
              dexBonus: a.dexBonus,
              dexBonusMax: a.dexBonusMax,
              strengthReq: a.strengthReq,
              stealthDisadvantage: a.stealthDisadvantage,
            },
          }))
        );
      }

      case "ammunition": {
        const ammo = await prisma.ammunition.findMany();
        return NextResponse.json(
          ammo.map((am) => ({
            id: am.id,
            name: am.name,
            type: am.type,
            cost: am.cost,
            weight: am.weight,
            properties: {
              quantity: am.quantity,
            },
          }))
        );
      }

      case "tools": {
        const tools = await prisma.tool.findMany();
        return NextResponse.json(
          tools.map((t) => ({
            id: t.id,
            name: t.name,
            type: t.type,
            cost: t.cost,
            weight: t.weight,
            properties: {
              contents: t.contents,
            },
          }))
        );
      }

      case "gear": {
        const gear = await prisma.gear.findMany();
        return NextResponse.json(
          gear.map((g) => ({
            id: g.id,
            name: g.name,
            type: g.type,
            cost: g.cost,
            weight: g.weight,
            description: g.description ?? undefined,
          }))
        );
      }

      case "mounts": {
        const mounts = await prisma.mountOrVehicle.findMany();
        return NextResponse.json(
          mounts.map((m) => ({
            id: m.id,
            name: m.name,
            type: m.type,
            cost: m.cost,
            weight: undefined, // не у всех есть вес
            description: m.description ?? undefined,
            properties: {
              speed: m.speed,
              carryingCapacity: m.carryingCapacity,
            },
          }))
        );
      }

      case "trade-goods": {
        const goods = await prisma.tradeGood.findMany();
        return NextResponse.json(
          goods.map((tg) => ({
            id: tg.id,
            name: tg.name,
            type: tg.type,
            cost: tg.cost,
            description: tg.description ?? undefined,
          }))
        );
      }

      case "tack": {
        const tack = await prisma.tack.findMany();
        return NextResponse.json(
          tack.map((tk) => ({
            id: tk.id,
            name: tk.name,
            type: tk.type,
            cost: tk.cost,
            weight: tk.weight,
            description: tk.description ?? undefined,
          }))
        );
      }

      default:
        return NextResponse.json({ error: "Unknown category" }, { status: 400 });
    }
  } catch (error) {
    console.error("Equipment API error:", error);
    return NextResponse.json(
      { error: "Failed to load equipment" },
      { status: 500 }
    );
  }
}
