interface SpellObj {
    name: Name;
    school: string;
    level: string;
    casting_time: string;
    range: string;
    components: string;
    duration: string;
    classes: string[];
    description: string;
    damage: SpellDmg;
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