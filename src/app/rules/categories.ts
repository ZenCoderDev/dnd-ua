import { Scroll, Swords, Compass, Sparkles, Coins, Users } from "lucide-react";

export const rulesCategories = [
  {
    name: "Основні правила",
    description: "Базові принципи гри, кидки кубиків, перевірки характеристик.",
    icon: Scroll,
    href: "/rules/core",
  },
  {
    name: "Бій",
    description: "Дії у бою, ініціатива, атаки, переваги та невигідності.",
    icon: Swords,
    href: "/rules/combat",
  },
  {
    name: "Дослідження",
    description: "Подорожі, орієнтування, виживання у світі.",
    icon: Compass,
    href: "/rules/exploration",
  },
  {
    name: "Магія",
    description: "Закляття, концентрація, обмеження та правила чарів.",
    icon: Sparkles,
    href: "/rules/magic",
  },
  {
    name: "Економіка",
    description: "Монети, торгові операції, витрати та доходи.",
    icon: Coins,
    href: "/rules/economy",
  },
  {
    name: "Соціальна взаємодія",
    description: "Переконання, обман, залякування та інші соціальні дії.",
    icon: Users,
    href: "/rules/social",
  },
];
