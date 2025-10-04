interface SubclassesObj {
  id: string;
  name: MultiName;
  description: string;
  subclasses: SubclassType[];
}

interface MultiName {
  en: string;
  uk: string;
}

interface SubclassType {
  id: string;
  nameEn: string;
  nameUk: string;
  description: string;
  progression: LevelProgressionShort[];
  features: SuclassFeature[];
}

interface SuclassFeature {
  level: number;
  name: string;
  description: string;
  details: string;
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
  kiPoints: number;
  unarmoredMovement: number;
  martialArtsDie: string;
  invocation: number;
}
