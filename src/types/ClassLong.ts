interface ClassLong {
  id: string;
  name: string;
  source: string;
  hitDice: string;
  image: string;
  primaryAbility: string[];
  savingThrows: string[];
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
  proficiencyBonus: string;
  features: string[];
}

interface LevelProgressionLong {
  level: number;
  name: string;
  description: string;
}
