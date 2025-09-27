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
    const [expanded, setExpanded] = useState<string | null>(null);

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
        <div className="max-w-[90%] relative mx-auto grid grid-cols-2 gap-6 p-6">
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
                <div key={level} className="bg-(--card-background) p-4 rounded-lg">
                    <h2
                        className="sticky top-20 z-10
                         bg-gradient-to-r from-(--card-background) to-(--border)
                         text-(--accent)
                         font-extrabold text-xl 
                         px-4 py-2 mb-4 
                         rounded-xl shadow-md border-b border-(--border)"
                    >
                        Рівень заклять: {level === 0 ? "Заговори" : level}
                    </h2>

                    <ul className="space-y-4">
                        {list.map((spell, index) => {
                            const isOpen = expanded === `${level}-${index}`;
                            return (
                                <div
                                    key={spell.id}

                                    className={` group relative overflow-hidden rounded-2xl shadow-xl border border-(--border) transition-transform duration-300 bg-(--card-background)`}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >

                                    <h2 className="text-lg font-bold cursor-pointer hover:bg-(--accent-hover) hover:text-(--text-accent) p-4 transition duration-300" onClick={() =>
                                        setExpanded(isOpen ? null : `${level}-${index}`)
                                    }>{renderName(spell)}</h2>

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
                                                        <strong>Рівень:</strong>{" "}
                                                        {spell.level === 0 ? "Заговори" : spell.level}
                                                    </p>
                                                    <p>
                                                        <strong>Школа:</strong> {spell.school}
                                                    </p>
                                                    <p>
                                                        <strong>Час накладання:</strong>{" "}
                                                        {spell.casting_time}
                                                    </p>
                                                    <p>
                                                        <strong>Дистанція:</strong> {spell.range}
                                                    </p>
                                                    <p>
                                                        <strong>Компоненти:</strong>{" "}
                                                        {spell.components}
                                                    </p>
                                                    <p>
                                                        <strong>Тривалість:</strong> {spell.duration}
                                                    </p>
                                                    <p>
                                                        <strong>Класи:</strong>{" "}
                                                        {spell.classes.map((cls) => cls.name).join(", ")}
                                                    </p>

                                                    {spell.damage && (
                                                        <div className="mt-2 p-2 rounded-lg bg-(--accent) text-(--text-accent) border border-(--border)">
                                                            <p>
                                                                <strong>Базовий:</strong>{" "}
                                                                {spell.damage.base}
                                                            </p>
                                                            {spell.damage.scales_at_levels && (
                                                                <div>
                                                                    <strong>Скейлінг:</strong>
                                                                    <ul className="list-disc ml-5">
                                                                        {Object.entries(
                                                                            spell.damage.scales_at_levels
                                                                        ).map(([lvl, dmg]) => (
                                                                            <li key={lvl}>
                                                                                {lvl} рівень: {dmg}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                            {spell.damage.scaling && (
                                                                <div>
                                                                    <strong>Скейлінг:</strong>
                                                                    <ul className="list-disc ml-5">
                                                                        {Object.entries(
                                                                            spell.damage.scaling
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
                                                                {spell.damage.type}
                                                            </p>
                                                        </div>
                                                    )}


                                                    <p className="mt-2">{spell.description}</p>
                                                    {spell.effects && (
                                                        <div className="mt-2 p-2 rounded-lg bg-(--accent) border border-(--border)">
                                                            {spell.effects.map((effect, index) => (
                                                                <p key={index}>
                                                                    <strong>{spell.effects}</strong>{" "}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    )}
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
