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

export default function ItemsPage() {
    const [expanded, setExpanded] = useState<string | null>(null);


    const [filters, setFilters] = useState<{
        rarity?: string;
        type?: string;
        search?: string;
    }>({
        rarity: undefined,
        type: undefined,
        search: "",
    });

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
        items.forEach((item) => {
            if (!map.has(item.rarity)) map.set(item.rarity, []);
            map.get(item.rarity)!.push(item);
        });
        return map;
    }, [items]);

    const entries = Array.from(itemsByRarity.entries()).sort(([a], [b]) =>
        a.localeCompare(b)
    );

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Помилка завантаження</p>;

    return (
        <div className="max-w-[90%] relative mx-auto grid grid-cols-2 gap-6 p-6">
            {/* Фільтри */}
            <div className="col-span-2 flex gap-4 mb-6">
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
            {entries.map(([rarity, list]) => (
                <div key={rarity} className="bg-(--card-background) p-4 rounded-lg  gap-4">
                    <h2
                        className="sticky top-20 z-10
        bg-gradient-to-r from-(--card-background) to-(--border)
        text-(--accent)
        font-extrabold text-xl 
        px-4 py-2 mb-4 
        rounded-xl shadow-md border-b border-(--border)"
                    >
                        Рідкість предметів: {rarity}
                    </h2>

                    <ul className="space-y-4">
                        {list.map((item, index) => {
                            const isOpen = expanded === `${rarity}-${index}`;
                            return (
                                <div
                                    key={item.id}
                                    className="group relative overflow-hidden rounded-2xl shadow-xl border border-(--border) transition-transform duration-300 bg-(--card-background)"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <h2
                                        className="text-lg font-bold cursor-pointer hover:bg-(--accent-hover) hover:text-(--text-accent) p-4 transition duration-300"
                                        onClick={() =>
                                            setExpanded(isOpen ? null : `${rarity}-${index}`)
                                        }
                                    >
                                        {renderName(item)}
                                    </h2>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden px-4 pb-4"
                                            >
                                                <div className="mt-3 text-sm space-y-1">
                                                    <p>
                                                        <strong>Тип:</strong> {item.type}
                                                    </p>
                                                    <p>
                                                        <strong>Рідкість:</strong> {item.rarity}
                                                    </p>
                                                    {item.requires_attunement && (
                                                        <p>
                                                            <strong>Необхідна прив’язка:</strong>{" "}
                                                            {item.requires_attunement}
                                                        </p>
                                                    )}

                                                    {item.effects && (
                                                        <div className="mt-2 p-2 rounded-lg bg-(--accent) text-(--text-accent) border border-(--border)">
                                                            <p className="font-bold mb-1">Властивості:</p>
                                                            <ul className="list-disc ml-5 space-y-1">
                                                                {Object.entries(item.effects).map(([key, value]) => (
                                                                    <li key={key}>
                                                                        <strong>{key}:</strong> {String(value)}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    <p className="mt-2">{item.description}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
}
