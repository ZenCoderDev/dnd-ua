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

interface SubRacesLong {
  id: string;
  name: string;
  image: string;
  ability_bonuses: string;
  traits: TraitsLong[];
}
