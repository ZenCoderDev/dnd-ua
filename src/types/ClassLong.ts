interface ClassLong {
  id: string;
  name: string;
  nameUa: string;
  nameEn: string;
  source: string;
  hitDice: string;
  image: string;
  primaryAbility: string[];
  savingThrows: string[];
  skillsChoose: number;
  skillsFrom: string[];
  skills: ClassSkills;
  armor: ItemInter[];
  weapons: ItemInter[];
  tools: ItemInter[];
  equipment: EquipmentItem[][];
  description: string;
  progression: LevelProgressionShort[];
  features: LevelProgressionLong[];
}

interface EquipmentItem {
  id: number;
  type: string;
  text: string;
} 

interface ClassSkills {
  choose: number;
  from: string[];
}

interface ItemInter {
  [key: string]: string;
}

interface LevelProgressionShort {
  level: number;
  spellsKnown: SpellKnown;
  proficiencyBonus: string;
  features: string[];
  sneakyDie: string;
  spellSlots: ItemInter;
  infusionsKnown: number;
  infusionsActive: number;
}

interface SpellKnown {
  cantrips: number;
  spells: number;
  slot: number;
  level: number;
  kiPoints: number;
  unarmoredMovement: number;
  martialArtsDie: string;
  invocation: number;
}

interface LevelProgressionLong {
  level: number;
  name: string;
  description: string;
}
