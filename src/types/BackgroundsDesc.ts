interface BackgroundsDesc {
  name: string;
  description: string;
  skills: string[];
  languages: number;
  equipment: string[];
  features: BackgroundFeature[];
}

interface BackgroundFeature {
  name: string;
  description: string;
}
