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
  source: string;
  subSpells: SubSpellLevel[];
  progression: LevelProgressionShort[];
  features: SuclassFeature[];
}

interface SubSpellGroup {
  title?: string;
  spells: ItemInter[]; 
}

interface SubSpellLevel {
  level: number;
  groups: SubSpellGroup[]; 
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
  knownRunes: number;
  giantMightUses: number;
  giantMightDice: string;
  psiDice: string;
  sporeAuraDie: string;
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
