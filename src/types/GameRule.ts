export interface GameRule {
  id: number;
  ruleId: string; // action_attack
  category: string; // Core | Combat | Exploration | Magic | Economy | Social
  subCategory?: string;
  name: string;
  description: string;
  source?: string; // "PHB p.192"
}
