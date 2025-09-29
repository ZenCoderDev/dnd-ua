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
  equipment: string[];
  description: string;
  progression: LevelProgressionShort[];
  features: LevelProgressionLong[];
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
  spellSlots: ItemInter;
}

interface SpellKnown {
  cantrips: number;
  spells: number;
  slot: number;
  level: number;
  invocation: number;
}
interface LevelProgressionLong {
  level: number;
  name: string;
  description: string;
}
