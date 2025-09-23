interface SpellObj {
  id: number;
  nameUa: string;
  nameEn: string;
  school: string;
  level: number;
  casting_time: string;
  range: string;
  components: string;
  duration: string;
  classes: ClassShort[];
  description: string;
  damage: SpellDmg;
  effects: string[];
}

type Name = {
  ua: string;
  en: string;
};

interface SpellDmg {
  base: string;
  scaling: SpellScaleInter;
  type: string;
  scales_at_levels: string[];
}

interface SpellScaleInter {
  [key: string]: string;
}
