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
  features: SuclassFeature[];
}

interface SuclassFeature {
  level: number;
  name: string;
  description: string;
  details: string;
}
