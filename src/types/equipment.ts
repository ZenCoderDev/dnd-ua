export interface Weapon {
  id: number;
  name: string;
  type: string; // simple_weapon | martial_weapon
  cost: string; // "10 зм"
  damage: string; // "1d8"
  damageType: string; // "різаний"
  weight: number;
  properties?: Property[]; // список властивостей
}

// 🔑 Властивість (універсальна для спорядження)
export interface Property {
  id: string; // наприклад: "light"
  name: string; // "Легка"
  description: string; // опис
}

// 🛡️ Броня
export interface Armor {
  id: number;
  name: string;
  type: string; // light_armor | medium_armor | heavy_armor | shield
  cost: string;
  ac: number;
  dexBonus?: boolean;
  dexBonusMax?: number;
  strengthReq?: number;
  stealthDisadvantage: boolean;
  weight: number;
}

// 🏹 Амуниція
export interface Ammunition {
  id: number;
  name: string;
  type: string; // ammunition_arrow | ammunition_bolt | ...
  cost: string;
  weight: number;
  quantity: number;
}

// 🛠️ Інструменти
export interface Tool {
  id: number;
  name: string;
  type: string; // artisan_tools | musical_instruments | ...
  cost: string;
  weight: number;
  contents: string[]; // наприклад ["молоток", "пилка"]
}

// 🎒 Пригодницьке спорядження
export interface Gear {
  id: number;
  name: string;
  type: string;
  cost: string;
  weight: number;
  description?: string;
}

// 🐴 В’ючні тварини та транспорт
export interface MountOrVehicle {
  id: number;
  name: string;
  type: string; // mount | vehicle_land | vehicle_water
  cost: string;
  speed: number;
  carryingCapacity: number;
  description?: string;
}

// 📦 Торгові товари
export interface TradeGood {
  id: number;
  name: string;
  type: string;
  cost: string;
  description?: string;
}

// 🐎 Упряж та спорядження для транспорту
export interface Tack {
  id: number;
  name: string;
  type: string; // tack_saddle_riding, tack_harness, vehicle_cart
  cost: string;
  weight: number;
  description?: string;
}

export interface BaseEquipment {
  id: number;
  name: string;
  type: string;          
  cost: string;
  weight?: number;
  description?: string;
  properties?: Record<string, string>;
}
