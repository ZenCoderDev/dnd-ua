export interface EntityViewModel {
  id: string;
  name: string; 
  type: "weapon" | "item" | "spell" | "ammunition" | "tool" | "armor";
  description?: string; 
  subtitle?: string;
  fields?: Record<string, string>; 
  image?: string; 
}