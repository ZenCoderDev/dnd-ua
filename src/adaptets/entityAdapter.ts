// adapters/entityAdapter.ts

import { EntityViewModel } from "@/types/Entity";
import { Ammunition, Armor, Gear, Spell, Tool, Weapon } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/binary";
import { NextResponse } from "next/server";

export function adaptWeapon(weapon: Weapon): EntityViewModel {
  return {
    id: `weapon:${weapon.id}`,
    name: weapon.name,
    type: "weapon",
    description: weapon.damageType,
    fields: {
      Шкода: weapon.damage,
      Вага: `${weapon.weight ?? 0} кг`,
      Ціна: weapon.cost ?? "-",
    },
  };
}

export function adaptItem(item: Gear): EntityViewModel {
  return {
    id: `item:${item.id}`,
    name: item.name,
    type: "item",
    description: item.description ? item.description : "",
    fields: {
      Вага: `${item.weight ?? 0} кг`,
      Ціна: item.cost ?? "-",
    },
  };
}

export function toSpellObj(spell: Spell): SpellObj {
  const parseJson = <T>(value: JsonValue): T | null => {
    try {
      if (typeof value === "string") return JSON.parse(value) as T;
      return value as T;
    } catch {
      return null;
    }
  };

  const damage = parseJson<SpellDmg>(spell.damage);
  const effects = parseJson<string[]>(spell.effects ?? []);

  return {
    id: spell.id,
    nameUa: spell.nameUa,
    nameEn: spell.nameEn,
    school: spell.school,
    level: spell.level,
    casting_time: spell.castingTime,
    range: spell.range,
    components: spell.components,
    duration: spell.duration,
    classes: [], 
    description: spell.description,
    damage: damage ?? {
      base: "",
      type: "",
      scales_at_levels: [],
      scaling: {},
    },
    effects: effects ?? [],
  };
}

export function adaptSpell(spell: Spell): EntityViewModel {
  const adaptSpell: SpellObj = toSpellObj(spell);

  const fields: Record<string, string> = {
    "Час створення": spell.castingTime,
    "Зона ураження": spell.range,
    Тривалість: spell.duration,
    Компоненти: spell.components,
  };

  if (spell.damage) {
    const spellDmg = `${adaptSpell.damage.base}${
      adaptSpell.damage.scales_at_levels
        ? " (" +
          Object.entries(adaptSpell.damage.scales_at_levels)
            .map(([lvl, dmg]) => `${lvl}: ${dmg}`)
            .join(", ") +
          ")"
        : ""
    }`;
    if (adaptSpell.damage.type == "зцілення") {
      fields["Лікування"] = spellDmg;
    } else {
      fields["Шкода"] = spellDmg;
    }
  }

  return {
    id: `spell:${spell.id}`,
    name: spell.nameUa ?? spell.nameEn,
    type: "spell",
    description: spell.description,
    subtitle: `${spell.school}, рівень ${spell.level}`,
    fields,
  };
}

export function adaptAmmunition(ammo: Ammunition): EntityViewModel {
  return {
    id: `ammunition:${ammo.id}`,
    name: ammo.name,
    type: "ammunition",
    description: ammo.type,
    fields: {
      Кількість: ammo.quantity.toString(),
      Вага: `${ammo.weight ?? 0} кг`,
      Ціна: ammo.cost ?? "-",
    },
  };
}

export function adaptTool(tool: Tool): EntityViewModel {
  return {
    id: `tool:${tool.id}`,
    name: tool.name,
    type: "tool",
    description: tool.type,
    fields: {
      Вага: `${tool.weight ?? 0} кг`,
      Ціна: tool.cost ?? "-",
      Вміст: tool.contents.join(", "),
    },
  };
}

export function adaptArmor(armor: Armor): EntityViewModel {
  return {
    id: `armor:${armor.id}`,
    name: armor.name,
    type: "armor",
    description: armor.type,
    fields: {
      РБ: armor.ac.toString(),
      Вага: `${armor.weight ?? 0} кг`,
      "Бонус спритності": armor.dexBonus
        ? armor.dexBonusMax
          ? `Так (макс ${armor.dexBonusMax})`
          : "Так"
        : "Ні",
      "Необхідна сила": armor.strengthReq ? armor.strengthReq.toString() : "-",
      "Завада на скрадання": armor.stealthDisadvantage ? "Так" : "Ні",
      Cost: armor.cost ?? "-",
    },
  };
}
