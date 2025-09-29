interface RacesShort {
  id: string;
  name: string;
  description: string;
  image: string;
  source: string;
  version: string;
  tags: string[];
  subraces: SubRacesShort[];
}

interface SubRacesShort {
  id: string;
  name: string;
  image: string;
}

