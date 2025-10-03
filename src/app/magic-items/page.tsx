"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomSelect from "../components/CustomSelect";
import { MagicItem } from "@/types/MagicItem";
import { useGetAllMagicItemsQuery } from "@/store/api/apiMagicItems";

// Отрисовка имени предмета
function renderName(item: MagicItem) {
    return `${item.nameUa} (${item.nameEn})`;
}

const getNormalizeEffectName = (name: string): string => {
    switch (name) {
        case "action":
            return "Використання";
        case "healing":
            return "Лікування";
        case "bonus":
            return "Бонус";
        case "speed":
            return "Швидкість";
        case "duration":
            return "Тривалість";
        case "note":
            return "Примітка";
        case "casting":
            return "Накладання закляття";
        case "special":
            return "Особливість";
        case "attack_bonus":
            return "Бонус до Кидків Атаки";
        case "damage_bonus":
            return "Бонус до Кидків Шкоди";
        case "ac_bonus":
            return "Бонус Броні";
        case "charges":
            return "Заряди";
        case "ignore":
            return "Знехтувати";
        case "resistance":
            return "Опір";
        case "regrowth":
            return "Відновлення";
        case "duration":
            return "Тривалість";
        case "risk":
            return "Ризики";
        case "alignment_restriction":
            return "Обмежене використання";
        case "cursed":
            return "Прокляте";
        case "spell":
            return "Закляття";
        case "sentient":
            return "Має особистіть";
    }
    return name;
}

const getNormalizeValueName = (name: string): string => {
    switch (name) {
        case "true":
            return "Так";
        case "false":
            return "Ні";
        case "null":
            return "Відсутнє";
    }
    return name;
}

const rarityOrder = [
    "Звичайний",
    "Незвичайний",
    "Рідкісний",
    "Дуже рідкісний",
    "Легендарний",
    "Артефакт",
];

const rarityColors: Record<string, string> = {
    Звичайний: "#ffffff",
    Незвичайний: "#22c55e",
    Рідкісний: "#3b82f6",
    "Дуже рідкісний": "#a855f7",
    Легендарний: "#f59e0b",
    Артефакт: "#ef4444",
};

export default function ItemsPage() {
    const [filters, setFilters] = useState<{
        rarity?: string;
        type?: string;
        search?: string;
    }>({
        rarity: undefined,
        type: undefined,
        search: "",
    });

    const [selected, setSelected] = useState<MagicItem | null>(null);

    const { data: items, isLoading, isError } = useGetAllMagicItemsQuery(filters);

    const allTypes = useMemo(() => {
        if (!items) return [];
        const map = new Map<string, string>();
        map.set("", "Усі типи");
        items.forEach((item) => {
            map.set(item.type, item.type);
        });
        return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
    }, [items]);

    const allRarities = useMemo(() => {
        if (!items) return [];
        const map = new Map<string, string>();
        map.set("", "Усі рідкості");
        items.forEach((item) => {
            map.set(item.rarity, item.rarity);
        });
        return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
    }, [items]);

    const itemsByRarity = useMemo(() => {
        if (!items) return new Map<string, MagicItem[]>();

        const map = new Map<string, MagicItem[]>();

        // группируем
        items.forEach((item) => {
            if (!map.has(item.rarity)) map.set(item.rarity, []);
            map.get(item.rarity)!.push(item);
        });

        // сортируем ключи по кастомному порядку
        const sortedMap = new Map<string, MagicItem[]>();
        rarityOrder.forEach((rarity) => {
            if (map.has(rarity)) {
                // если нужно ещё сортировать внутри группы (например, по id или name)
                const group = map.get(rarity)!.sort((a, b) => a.id - b.id);
                sortedMap.set(rarity, group);
            }
        });

        return sortedMap;
    }, [items]);

    const entries = Array.from(itemsByRarity.entries()).sort(([a], [b]) =>
        a.localeCompare(b)
    );

    if (isLoading)return <div className="relative text-center w-full h-full flex items-center justify-center"><p className="mx-auto my-0 w-full h-full">Loading...</p></div>;
    if (isError)return <div className="relative text-center w-full h-full flex items-center justify-center"><p className="mx-auto my-0 w-full h-full">Помилка завантаження</p></div>;

    return (
        <div className="mt-12 md:mt-0 relative w-full mx-auto flex flex-col gap-4 ">
            {/* Фільтри */}
            <div className="hidden md:absolute default-background h-full z-8 right-0 w-[5%]">

            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-6 p-6 w-full mx-auto items-start md:max-w-[90%] ">
                <input
                    type="text"
                    placeholder="Пошук..."
                    value={filters.search ?? ""}
                    onChange={(e) =>
                        setFilters((prev) => ({ ...prev, search: e.target.value }))
                    }
                    className="flex items-center text-sm text-[var(--text)] justify-between gap-3 px-4 py-2 rounded-xl border border-[var(--border)] bg-[var(--card-background)] shadow-sm min-w-[220px]"
                />

                <CustomSelect
                    options={allTypes}
                    value={filters.type}
                    onChange={(v) => setFilters((prev) => ({ ...prev, type: v }))}
                    placeholder="Усі типи"
                />

                <CustomSelect
                    options={allRarities}
                    value={filters.rarity}
                    onChange={(v) => setFilters((prev) => ({ ...prev, rarity: v }))}
                    placeholder="Усі рідкості"
                />
            </div>

            {/* Список предметів */}
            {Array.from(itemsByRarity.entries()).map(([rarity, list]) => {
                const color = rarityColors[rarity] ?? "#fff";
                return (
                    <div key={rarity} className="bg-(--card-background) md:p-4 rounded-lg w-full mx-auto md:max-w-[90%] ">
                        <h2
                            className="top-20 z-10
                         bg-gradient-to-r from-(--card-background) to-(--border)
                         text-(--accent)
                         font-extrabold text-xl 
                         px-4 py-2 mb-4 
                         rounded-xl shadow-md border-b border-(--border)"
                            style={{
                                backgroundImage: `linear-gradient(to right, var(--card-background), ${color})`
                            }}>
                            Рідкість предметів: {rarity}
                        </h2>
                        <div className="flex flex-row">
                            <ul className={`relative md:grid flex-1 p-6 flex flex-col
                md:grid-cols-[repeat(auto-fit,minmax(360px,1fr))] items-start gap-6 transition-all w-full duration-300 ${selected ? "md:w-2/3" : "w-full"}`}>
                                {list.map((item, index) => {
                                    const isSelected = selected?.id === item.id;

                                    return (
                                        <div
                                            key={item.id}
                                            className="group relative overflow-hidden rounded-2xl shadow-xl border border-(--border) transition-transform duration-300"
                                            style={{
                                                animationDelay: `${index * 50}ms`,
                                            }}
                                        >
                                            <div className={`absolute w-5 z-6 h-full`}
                                                style={{
                                                    backgroundImage: `linear-gradient(to left, var(--card-background), ${color})`
                                                }}>

                                            </div>
                                            <h2
                                                className="relative text-lg z-6 font-bold cursor-pointer hover:bg-(--accent-hover) hover:text-(--text-accent) p-4 transition duration-300"
                                                onClick={() => setSelected(isSelected ? null : item)}
                                            >
                                                {renderName(item)}
                                            </h2>
                                        </div>
                                    );
                                })}
                            </ul>
                            <AnimatePresence>
                                {selected && selected.rarity == rarity && (
                                    <motion.div
                                        key="details"
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: 100, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="md:sticky z-8 h-full fixed w-full flex-1 top-12 md:top-6 overflow-y-auto md:w-1/3 rounded-2xl shadow-xl border border-(--border) bg-(--card-background) p-6"
                                    >
                                        <button
                                            onClick={() => setSelected(null)}
                                            className="hover:bg-(--accent-hover) text-lg hover:text-(--text-accent) cursor-pointer mb-4 px-3 py-1 rounded-md bg-transparent transition border border-(--border)"
                                        >
                                            Закрити
                                        </button>
                                        <h2 className="text-2xl font-bold mb-3">{renderName(selected)}</h2>
                                        <div className="mt-3 text-sm space-y-1">
                                            <p>
                                                <strong>Тип:</strong> {selected.type}
                                            </p>
                                            <p>
                                                <strong>Рідкість:</strong> {selected.rarity}
                                            </p>
                                            {selected.attunement && (
                                                <p>
                                                    <strong>Необхідна прив’язка:</strong>{" "}
                                                    {selected.attunement ? "Так" : "Ні"}
                                                </p>
                                            )}

                                            {selected.effects && (
                                                <div className="mt-2 p-2 rounded-lg bg-(--accent) text-(--text-accent) border border-(--border)">
                                                    <p className="font-bold mb-1">Властивості:</p>
                                                    <ul className="list-disc ml-5 space-y-1">
                                                        {Object.entries(selected.effects).map(([key, value]) => (
                                                            <li key={key}>
                                                                <strong>{getNormalizeEffectName(key)}:</strong> {getNormalizeValueName(String(value))}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            <p className="mt-2">{selected.description}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div >
                )
            })
            }
        </div >
    );
}
