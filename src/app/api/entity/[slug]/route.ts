import {
  adaptItem,
  adaptSpell,
  adaptWeapon,
  adaptArmor,
  adaptAmmunition,
  adaptTool,
} from "@/adaptets/entityAdapter";
import { prisma } from "@/lib/prisma";


export async function GET(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const [type, id] = slug.split(":");
  let data = null;

  switch (type) {
    case "weapon":
      data = await prisma.weapon.findUnique({ where: { id: Number(id) } });
      if (!data)
        return Response.json({ error: "Weapon not found" }, { status: 404 });
      return Response.json({ data: adaptWeapon(data) });

    case "item":
      data = await prisma.gear.findUnique({ where: { id: Number(id) } });
      if (!data)
        return Response.json({ error: "Item not found" }, { status: 404 });
      return Response.json({ data: adaptItem(data) });

    case "spell":
      data = await prisma.spell.findUnique({ where: { id: Number(id) } });
      if (!data)
        return Response.json({ error: "Spell not found" }, { status: 404 });
      return Response.json({ data: adaptSpell(data) });

    case "armor":
      data = await prisma.armor.findUnique({ where: { id: Number(id) } });
      if (!data)
        return Response.json({ error: "Armor not found" }, { status: 404 });
      return Response.json({ data: adaptArmor(data) });

    case "ammunition":
      data = await prisma.ammunition.findUnique({ where: { id: Number(id) } });
      if (!data)
        return Response.json(
          { error: "Ammunition not found" },
          { status: 404 }
        );
      return Response.json({ data: adaptAmmunition(data) });

    case "tool":
      data = await prisma.tool.findUnique({ where: { id: Number(id) } });
      if (!data)
        return Response.json({ error: "Tool not found" }, { status: 404 });
      return Response.json({ data: adaptTool(data) });

    default:
      return Response.json({ error: "Unknown type" }, { status: 400 });
  }
}
