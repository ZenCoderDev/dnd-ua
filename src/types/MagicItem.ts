export type Rarity = "Звичайний" | "Незвичайний" | "Рідкісний" | "Дуже рідкісний" | "Легендарний" | "Артефакт";

export interface Effects {
  [key: string]: string | number | boolean;
}

export interface MagicItem {
  id: number;
  nameUa: string;
  nameEn: string;
  rarity: Rarity;
  type: string;
  attunement: boolean;
  description: string;
  effects: Effects;
}
