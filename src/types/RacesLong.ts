interface RacesLong {
  id: string;
  name: string;
  image: string;
  source: string;
  version: string;
  size: string;
  speed: string[];
  ability_bonuses: string[];
  languages: string[];
  darkvision: string;
  traits: TraitsLong[];
  subraces: SubRacesLong[];
}

interface TraitsLong {
  name: string;
  description: string;
}

export type TraitObject = { [key: string]: string };

export type TraitsType = TraitObject | TraitObject[];

interface SubRacesLong {
  id: string;
  name: string;
  image: string;
  ability_bonuses: string;
  traits: TraitsType | null;
}
