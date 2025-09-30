"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetAllSpellsQuery } from "@/store/api/apiSpells";
import CustomSelect from "../components/CustomSelect";

// Отрисовка имени спела
function renderName(spell: SpellObj) {
    return `${spell.nameUa} (${spell.nameEn})`;
}

export default function Home() {
    const [filters, setFilters] = useState<{
        level?: number;
        search?: string;
        classKey?: string;
        school?: string;
    }>({
        level: undefined,
        search: "",
        classKey: undefined,
        school: undefined,
    });

    const [selected, setSelected] = useState<SpellObj | null>(null);
    const { data: spells, isLoading, isError } = useGetAllSpellsQuery(filters);

    const spellsByLevel = useMemo(() => {
        if (!spells) return new Map<number, SpellObj[]>();
        const map = new Map<number, SpellObj[]>();
        spells.forEach((s) => {
            if (!map.has(s.level)) map.set(s.level, []);
            map.get(s.level)!.push(s);
        });
        return map;
    }, [spells]);

    const allClasses = useMemo(() => {
        if (!spells) return [];
        const map = new Map<string, string>();
        map.set("", "Усі класи")
        spells.forEach(spell => {
            spell.classes.forEach(cls => {
                map.set(cls.id, cls.name); // id для key, name для отображения
            });
        });
        return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
    }, [spells]);

    const allSchools = useMemo(() => {
        if (!spells) return [];
        const map = new Map<string, string>();
        map.set("", "Усі школи")
        spells.forEach(spell => {
            map.set(spell.school, spell.school);
        });
        return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
    }, [spells]);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Помилка завантаження</p>;

    const entries = Array.from(spellsByLevel.entries()).sort(([a], [b]) => a - b);

    return (
        <div className="top-12 md:top-0 relative w-full mx-auto flex flex-col gap-4 ">
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
                    options={[
                        { id: "", name: "Усі рівні" },
                        ...[...Array(10).keys()].map((lvl) => ({
                            id: String(lvl),
                            name: lvl === 0 ? "Заговори" : `${lvl}`,
                        })),
                    ]}
                    value={filters.level !== undefined ? String(filters.level) : ""}
                    onChange={(v) =>
                        setFilters((prev) => ({
                            ...prev,
                            level: v ? Number(v) : undefined,
                        }))
                    }
                    placeholder="Виберіть рівень"
                />

                <CustomSelect
                    options={allClasses}
                    value={filters.classKey}
                    onChange={(v) => setFilters((prev) => ({ ...prev, classKey: v }))}
                    placeholder="Усі класи"
                />


                <CustomSelect
                    options={allSchools}
                    value={filters.school}
                    onChange={(v) => setFilters((prev) => ({ ...prev, school: v }))}
                    placeholder="Усі школи"
                />


            </div>

            {entries.map(([level, list]) => (
                <div key={level} className="bg-(--card-background) md:p-4 rounded-lg w-full mx-auto md:max-w-[90%] ">
                    <h2
                        className="top-20 z-10
                         bg-gradient-to-r from-(--card-background) to-(--border)
                         text-(--accent)
                         font-extrabold text-xl 
                         px-4 py-2 mb-4 
                         rounded-xl shadow-md border-b border-(--border)"
                    >
                        Рівень заклять: {level === 0 ? "Заговори" : level}
                    </h2>
                    <div className="flex flex-row">
                        <motion.ul
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className={`relative md:grid flex-1 p-6 flex flex-col
                md:grid-cols-[repeat(auto-fit,minmax(360px,1fr))] items-start gap-6 transition-all w-full duration-300 ${selected ? "md:w-2/3" : "w-full"
                                }`}
                        >
                            {list.map((spell, index) => {
                                const isSelected = selected?.id === spell.id;
                                return (
                                    <div
                                        key={spell.id}
                                        onClick={() => setSelected(isSelected ? null : spell)}
                                        className={`flex-none self-start group relative overflow-hidden rounded-2xl shadow-xl border border-(--border) transition-transform duration-300 cursor-pointer bg-(--card-background)`}
                                    >
                                        <h2 className={`text-lg font-bold p-4 hover:bg-(--accent-hover) hover:text-(--text-accent) transition duration-300 ${spell.id == selected?.id ? "bg-(--accent-hover) text-(--text-accent)" : "bg-transparent"}`}>
                                            {level}: {renderName(spell)}
                                        </h2>
                                    </div>
                                );
                            })}
                        </motion.ul>
                        <AnimatePresence>
                            {selected && selected.level == level && (
                                <motion.div
                                    key="details"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 100, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="md:sticky h-full fixed w-full flex-1 top-12 md:top-6 md:h-[calc(100vh-3rem)] overflow-y-auto md:w-1/3 rounded-2xl shadow-xl border border-(--border) bg-(--card-background) p-6"
                                >
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="hover:bg-(--accent-hover) text-lg hover:text-(--text-accent) cursor-pointer mb-4 px-3 py-1 rounded-md bg-transparent transition border border-(--border)"
                                    >
                                        Закрити
                                    </button>
                                    <h2 className="text-2xl font-bold mb-3">{renderName(selected)}</h2>
                                    <div className="space-y-2 text-sm">
                                        <p>
                                            <strong>Рівень:</strong>{" "}
                                            {selected.level === 0 ? "Заговори" : selected.level}
                                        </p>
                                        <p>
                                            <strong>Школа:</strong> {selected.school}
                                        </p>
                                        <p>
                                            <strong>Час накладання:</strong> {selected.casting_time}
                                        </p>
                                        <p>
                                            <strong>Дистанція:</strong> {selected.range}
                                        </p>
                                        <p>
                                            <strong>Компоненти:</strong> {selected.components}
                                        </p>
                                        <p>
                                            <strong>Тривалість:</strong> {selected.duration}
                                        </p>
                                        <p>
                                            <strong>Класи:</strong>{" "}
                                            {selected.classes.map((cls) => cls.name).join(", ")}
                                        </p>
                                        {selected.damage && (
                                            <div className="mt-2 p-2 rounded-lg bg-(--accent) text-(--text-accent) border border-(--border)">
                                                <p>
                                                    <strong>Базовий:</strong> {selected.damage.base}
                                                </p>
                                                {selected.damage.scales_at_levels && (
                                                    <div>
                                                        <strong>Скейлінг:</strong>
                                                        <ul className="list-disc ml-5">
                                                            {Object.entries(
                                                                selected.damage.scales_at_levels
                                                            ).map(([lvl, dmg]) => (
                                                                <li key={lvl}>
                                                                    {lvl} рівень: {dmg}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                {selected.damage.scaling && (
                                                    <div>
                                                        <strong>Скейлінг:</strong>
                                                        <ul className="list-disc ml-5">
                                                            {Object.entries(
                                                                selected.damage.scaling
                                                            ).map(([lvl, dmg]) => (
                                                                <li key={lvl}>
                                                                    {lvl} рівень: {dmg}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                <p>
                                                    <strong>Тип урону:</strong>{" "}
                                                    {selected.damage.type}
                                                </p>
                                            </div>
                                        )}
                                        {selected.effects && (
                                            <div className="mt-2 p-2 rounded-lg bg-(--accent) text-(--text-accent) border border-(--border)">
                                                {selected.effects.map((effect, index) => (
                                                    <p key={index}>
                                                        <strong>{selected.effects}</strong>{" "}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                        <p className="mt-2">{selected.description}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Панель деталей */}
                </div>
            ))
            }
        </div >
    );
}
