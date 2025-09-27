import { Sword, Shield, Target, Wrench, Backpack, Ship, Gem } from "lucide-react";

export const equipmentCategories = [
  {
    name: "Зброя",
    description: "Ближня та дальня зброя, її характеристики та властивості.",
    icon: Sword,
    href: "/equipment/weapons",
  },
  {
    name: "Броня",
    description: "Легка, середня, важка броня та щити.",
    icon: Shield,
    href: "/equipment/armor",
  },
  {
    name: "Амуниція",
    description: "Стріли, болти, кулі для пращі та інші снаряди.",
    icon: Target,
    href: "/equipment/ammunition",
  },
  {
    name: "Інструменти",
    description: "Ремісничі набори, музичні інструменти та інші корисні предмети.",
    icon: Wrench,
    href: "/equipment/tools",
  },
  {
    name: "Спорядження",
    description: "Усе інше: рюкзаки, мотузки, факели, книги тощо.",
    icon: Backpack,
    href: "/equipment/gear",
  },
  {
    name: "В’ючні тварини та транспорт",
    description: "Коні, вози, кораблі та інші засоби пересування.",
    icon: Ship,
    href: "/equipment/mounts",
  },
  {
    name: "Торгові товари",
    description: "Сировина, припаси та товари для обміну.",
    icon: Gem,
    href: "/equipment/trade-goods",
  },
  {
    name: "Упряж та спорядження для тварин",
    description: "Сідла, віжки, вози та інше допоміжне спорядження.",
    icon: Ship, // можно другую иконку, если найдём лучше
    href: "/equipment/tack",
  },
];
