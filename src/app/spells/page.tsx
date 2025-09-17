"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetAllSpellsQuery } from "@/store/api/apiSpells";

function renderName(name: Name) {
    return typeof name === "string" ? name : `${name.ua} (${name.en})`;
}

export default function Home() {
    const { data: spellsByLevelMap, isLoading, isError } = useGetAllSpellsQuery(
        undefined,
        {
            selectFromResult: ({ data, ...rest }) => {
                const map = new Map<number, SpellObj[]>();
                if (data) {
                    for (const [k, v] of Object.entries(data)) {
                        map.set(Number(k), Array.isArray(v) ? (v as SpellObj[]) : []);
                    }
                }
                return { ...rest, data: map };
            },
        }
    );

    const [expanded, setExpanded] = useState<string | null>(null);

    if (isLoading || isError || !spellsByLevelMap) return null;

    const entries = Array.from(spellsByLevelMap.entries()).sort(
        ([a], [b]) => a - b
    );

    return (
        <div className="max-w-[80%] relative top-20 mx-auto grid grid-cols-2 gap-6 p-6 ">
            {entries.map(([level, list]) => {
                const safeList = Array.isArray(list) ? list : [];
                return (
                    <div key={level} className="bg-(--card-background) p-4 rounded-lg">
                        <h2
                            className="sticky top-20 z-20
             bg-gradient-to-r from-(--card-background) to-(--border)
             text-(--accent)
             font-extrabold text-xl 
             px-4 py-2 mb-4 
             rounded-xl shadow-md border-b border-(--border)"
                        >
                            Рівень заклять: {level === 0 ? "Заговори" : level}
                        </h2>
                        <ul className="space-y-4">
                            {safeList.map((spell, index) => {
                                const isOpen = expanded === `${level}-${index}`;
                                return (
                                    <div
                                        key={index}
                                        onClick={() =>
                                            setExpanded(isOpen ? null : `${level}-${index}`)
                                        }
                                        className={`cursor-pointer group p-4 relative overflow-hidden rounded-2xl shadow-xl border border-(--border) transition-transform duration-300 bg-(--card-background)`}
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <h2 className="text-xl font-bold">
                                            {renderName(spell.name)}
                                        </h2>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    key="content"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="mt-3 text-sm space-y-1">
                                                        <p>
                                                            <strong>Рівень:</strong> {spell.level === "0" ? "Заговори" : level}
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
                                                            {Array.isArray(spell.components)
                                                                ? spell.components.join(", ")
                                                                : spell.components}
                                                        </p>
                                                        <p>
                                                            <strong>Тривалість:</strong> {spell.duration}
                                                        </p>
                                                        <p>
                                                            <strong>Класи:</strong>{" "}
                                                            {spell.classes.join(", ")}
                                                        </p>

                                                        {/* === УРОН === */}
                                                        {spell.damage && (
                                                            <div className="mt-2 p-2 rounded-lg bg-(--accent) border border-(--border)">
                                                                <p>
                                                                    <strong>Тип урону:</strong>{" "}
                                                                    {spell.damage.type}
                                                                </p>
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
                                                            </div>
                                                        )}

                                                        <p className="mt-2">{spell.description}</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
