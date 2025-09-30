"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react"; // ⬅️ добавляем хуки
import { useGetClassesQuery, useGetClassByIdQuery, useGetSubclassesQuery, useGetClassFeaturesQuery } from "@/store/api/apiClasses";
import { AnimatePresence, motion } from "framer-motion";

interface MergedFeature {
    level: number;
    name: string;
    description: string;
    source: "class" | "subclass";
    subclassId?: string;
}

const getNormalizeFeatureName = (name: string): string => {
    switch (name) {
        case "invocation":
            return "Інвокація";
        case "maneuver":
            return "Маневр";
        case "metamagic":
            return "Мета-магiя";
    }
    return name;
}

export default function RaceDetails() {
    const { id } = useParams<{ id: string }>();
    const { data: classes } = useGetClassesQuery();
    const { data: selectedClass, isLoading, error } = useGetClassByIdQuery(id);
    const { data: subclasses } = useGetSubclassesQuery(id);
    const { data: features } = useGetClassFeaturesQuery(id);


    const [expanded, setExpanded] = useState<boolean | null>(null);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const [selectedSubclassId, setSelectedSubclassId] = useState<string | null>(null);

    const selectedSubclass = useMemo(() => {
        if (!subclasses || !selectedSubclassId) return null;
        return subclasses.find(sc => sc.id === selectedSubclassId) || null;
    }, [subclasses, selectedSubclassId]);

    const mergedFeatures = useMemo(() => {
        if (!selectedClass) return [];

        const classFeatures: MergedFeature[] = selectedClass.features?.map(f => ({
            level: f.level,
            name: f.name,
            description: f.description,
            source: "class"
        })) || [];

        const subclassFeatures: MergedFeature[] =
            selectedSubclass?.features?.map(f => ({
                level: f.level,
                name: f.name,
                description: `${f.description}\n${f.details}`,
                source: "subclass",
                subclassId: selectedSubclass.id
            })) || [];

        return [...classFeatures, ...subclassFeatures].sort((a, b) => a.level - b.level);
    }, [selectedClass, selectedSubclass]);

    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка завантаження</p>;
    if (!selectedClass) return <p>Раса не знайдена</p>;

    return (
        <div className="relative md:max-w-[90%] mt-14 md:mt-6 w-full mx-auto md:p-6">
            {/* твой код — список классов */}
            <div className="hidden md:flex flex-row gap-4 mb-8 mx-auto w-fit">
                {classes?.map((dndClass, index) => (
                    <Link key={index} href={`/classes/${dndClass.id}`}
                        className={`w-fit cursor-pointer group p-4 relative overflow-hidden rounded-2xl shadow-xl transition duration-300 hover:bg-(--accent-hover) hover:text-(--text-accent) hover:scale-105
                    ${dndClass.id === id ? 'bg-(--active) text-(--foreground)' : 'bg-(--accent) text-(--text-accent)'} `}>
                        <p className="">{dndClass.name}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-2 justify-between">
                {subclasses && (
                    <div className="relative h-fit">
                        {/* --- Desktop Sidebar --- */}
                        <div className="hidden md:flex bg-(--card-background) rounded-xl border-(--border) border flex-col gap-4 max-h-[80%] fixed w-[16%] hide-scrollbar overflow-y-auto pr-2">
                            <h2 className="text-2xl font-semibold sticky top-0 bg-(--card-background) p-4 z-10">
                                Підкласи
                            </h2>
                            {subclasses.map((subclass, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        setSelectedSubclassId(prev =>
                                            prev === subclass.id ? null : subclass.id
                                        )
                                    }
                                    className={`rounded-md flex m-2 flex-col border transition duration-300 text-center hover:bg-(--accent-hover) hover:text-(--text-accent) items-center cursor-pointer p-4
        ${selectedSubclassId === subclass.id ? "bg-(--active) text-(--foreground)" : "bg-(--accent) text-(--text-accent)"}`}
                                >
                                    <div className="flex flex-col">
                                        <h3 className="font-medium">{subclass.nameUk}</h3>
                                        <p className="text-sm opacity-80">{subclass.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* --- Mobile Dropdown --- */}
                        <div className="fixed block md:hidden w-full bg-(--card-background) mb-4 p-4 z-8">
                            <label className="block text-2xl font-bold mb-2">Підкласи</label>
                            <select
                                value={selectedSubclassId ?? ""}
                                onChange={(e) => setSelectedSubclassId(e.target.value || null)}
                                className="w-full rounded-md border p-2 bg-(--card-background)"
                            >
                                <option value="">Оберіть підклас</option>
                                {subclasses.map((subclass) => (
                                    <option key={subclass.id} value={subclass.id}>
                                        {subclass.nameUk}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}

                <div className="flex flex-col mt-32 md:mt-0 gap-4 md:w-[80%] p-4 md:p-0">

                    {/* твой старый блок */}
                    <div className="flex flex-col-reverse md:flex-row gap-4">
                        <div className="flex-2 gap-4 flex flex-col">
                            <h1 className="text-2xl font-bold">Кістки здоров`&apos;я</h1>
                            <div
                                className="grid gap-4"
                                style={{
                                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                }}
                            >
                                <div className="bg-(--card-background) text-(--accent) flex flex-col p-4 gap-1 relative overflow-hidden rounded-md shadow">
                                    <h2 className="text-base">Стандарт : {selectedClass.hitDice}</h2>
                                </div>
                                <div className="bg-(--card-background) text-(--accent) flex flex-col p-4 gap-1 relative overflow-hidden rounded-md shadow">
                                    <h2 className="text-base">На початку та нових рівнях : {selectedClass.hitDice} + Статура</h2>
                                </div>
                            </div>

                            <h1 className="text-2xl font-bold">Ряткидки</h1>
                            <div className="grid grid-cols-2 gap-6">
                                {selectedClass.savingThrows.map((ability, index) => (
                                    <div key={index} className="bg-(--card-background) text-(--accent) flex flex-col p-4 gap-1 relative overflow-hidden rounded-md shadow">
                                        <h2 className="text-base">{ability}</h2>
                                    </div>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold">Оберіть вміння: {selectedClass.skillsChoose} серед</h3>
                            <div
                                className="grid gap-4"
                                style={{
                                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                }}
                            >
                                {selectedClass.skillsFrom.map((skill, index) => (
                                    <div key={index} className="p-4 text-center rounded-md bg-(--card-background) text-(--accent) shadow">
                                        <p>{skill}</p>
                                    </div>
                                ))}
                            </div>
                            {selectedClass.armor && selectedClass.armor.length > 0 &&
                                <div>
                                    <h3 className="text-2xl font-bold">Ви маєте навички володіння наступними видами броні</h3>
                                    <div
                                        className="grid gap-4"
                                        style={{
                                            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                        }}>
                                        {selectedClass.armor.map((armor, index) => {
                                            const value = Object.values(armor)[0];
                                            return (
                                                <div
                                                    key={index}
                                                    className="p-4 text-center rounded-md bg-(--card-background) text-(--accent) shadow"
                                                >
                                                    <p>{value}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            }
                            {selectedClass.armor && selectedClass.armor.length > 0 &&
                                <div>
                                    <h3 className="text-2xl font-bold">Ви маєте навички володіння наступними видами зброї</h3>
                                    <div
                                        className="grid gap-4"
                                        style={{
                                            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                        }}>
                                        {selectedClass.weapons.map((weapon, index) => {
                                            const value = Object.values(weapon)[0];
                                            return (
                                                <div
                                                    key={index}
                                                    className="p-4 my-auto text-center rounded-md bg-(--card-background) text-(--accent) shadow"
                                                >
                                                    <p>{value}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            }


                            {selectedClass.tools && selectedClass.tools.length > 0 &&
                                <div>
                                    <h3 className="text-2xl font-bold">Ви маєте навички володіння наступними видами інструментів</h3>
                                    <div
                                        className="grid gap-4"
                                        style={{
                                            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                        }}>
                                        {selectedClass.tools.map((tools, index) => {
                                            const value = Object.values(tools)[0];
                                            return (
                                                <div
                                                    key={index}
                                                    className="p-4 my-auto text-center rounded-md bg-(--card-background) text-(--accent) shadow"
                                                >
                                                    <p>{value}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            }

                            <h3 className="text-2xl font-bold">Ви отримуєте наступне початкове спорядження: </h3>
                            {selectedClass.equipment && (
                                <div className="flex flex-col gap-4 mt-2">
                                    {selectedClass.equipment.map((equipment, index) => (
                                        <div key={index} className="p-4 my-auto text-center rounded-md bg-(--card-background) text-(--accent) shadow">
                                            <p>{equipment}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {features && features.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold">Особливості класу</h3>
                                    <div className="rounded-lg bg-(--card-background)">
                                        <div
                                            className="rounded-lg text-lg font-bold cursor-pointer hover:bg-(--accent-hover) hover:text-(--text-accent) p-4 transition duration-300"
                                            onClick={() => handleToggle()} // toggle по уровню или другому id
                                        >
                                            {getNormalizeFeatureName(features[0].type)}
                                        </div>

                                        <AnimatePresence initial={false}>
                                            {expanded && (
                                                <motion.div
                                                    key="content"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden px-4 pb-4"
                                                >
                                                    <ul className="mt-2 space-y-2">
                                                        {features.map((f, i) => (
                                                            <li
                                                                key={i}
                                                                className="p-2 rounded-lg border border-(--border) bg-(--card-background)"
                                                            >
                                                                <p className="font-semibold">{f.name_uk} ({f.name_en})</p>
                                                                {f.requirements && (
                                                                    <div>
                                                                        {f.requirements.map((req, index) => (
                                                                            <p key={index} className="text-sm text-(--text-secondary)">
                                                                                Необхідно: {req}
                                                                            </p>
                                                                        ))}
                                                                    </div>
                                                                )}

                                                                <p className="text-sm text-(--text-secondary)">
                                                                    {f.description_uk}
                                                                </p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Image
                            src={selectedClass.image}
                            alt={selectedClass.name}
                            width={400}
                            height={400}
                            className="w-full max-h-120 object-top object-cover rounded-lg border-(--border) border flex-1"
                        />
                    </div>

                    {selectedClass.progression && (
                        <div className="overflow-y-auto "> {/* здесь задаешь нужную высоту */}
                            <table className="min-w-full border border-(--border) text-sm">
                                <thead className="bg-(--background)">
                                    <tr>
                                        <th className="border px-2 py-1 text-left">Рівень</th>
                                        <th className="border px-2 py-1 text-left">Можливості</th>
                                        <th className="border px-2 py-1 text-left">Бонус майстерності</th>
                                        {selectedClass.progression.some((row) => row.spellsKnown?.cantrips !== undefined) && (
                                            <th className="border px-2 py-1 text-left">Заговорів відомо</th>
                                        )}
                                        {selectedClass.progression.some((row) => row.spellsKnown?.spells !== undefined) && (
                                            <th className="border px-2 py-1 text-left">Заклинань відомо</th>
                                        )}
                                        {selectedClass.progression.some((row) => row.spellsKnown?.slot !== undefined) && (
                                            <th className="border px-2 py-1 text-left">Кіл-ть заклять</th>
                                        )}
                                        {selectedClass.progression.some((row) => row.spellsKnown?.level !== undefined) && (
                                            <th className="border px-2 py-1 text-left">Рівень заклять</th>
                                        )}
                                        {selectedClass.progression.some((row) => row.spellsKnown?.invocation !== undefined) && (
                                            <th className="border px-2 py-1 text-left">Відомі Інвокації</th>
                                        )}
                                        {[...Array(9)].map((_, i) => {
                                            const slotLevel = (i + 1).toString();
                                            return selectedClass.progression.some((row) => row.spellSlots?.[slotLevel] !== undefined) ? (
                                                <th key={slotLevel} className="border px-2 py-1 text-left">
                                                    {slotLevel}-рів. слоти
                                                </th>
                                            ) : null;
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedClass.progression.map((row) => (
                                        <tr key={row.level} className="bg-(--card-background)">
                                            <td className="border border-(--border) px-2 py-1">{row.level}</td>
                                            <td className="border border-(--border) px-2 py-1">
                                                {row.features.filter((f) => f !== "—").length > 0 ? row.features.join(", ") : "—"}
                                            </td>
                                            <td className="border border-(--border) px-2 py-1">{row.proficiencyBonus}</td>

                                            {row.spellsKnown?.cantrips !== undefined && (
                                                <td className="border border-(--border) px-2 py-1">{row.spellsKnown.cantrips}</td>
                                            )}

                                            {row.spellsKnown?.spells !== undefined && (
                                                <td className="border border-(--border) px-2 py-1">{row.spellsKnown.spells}</td>
                                            )}

                                            {row.spellsKnown?.slot !== undefined && (
                                                <td className="border border-(--border) px-2 py-1">{row.spellsKnown.slot}</td>
                                            )}

                                            {row.spellsKnown?.slot !== undefined && (
                                                <td className="border border-(--border) px-2 py-1">{row.spellsKnown.level}</td>
                                            )}

                                            {row.spellsKnown?.slot !== undefined && (
                                                <td className="border border-(--border) px-2 py-1">{row.spellsKnown.invocation}</td>
                                            )}

                                            {[...Array(9)].map((_, i) => {
                                                const slotLevel = (i + 1).toString();
                                                return selectedClass.progression.some((r) => r.spellSlots?.[slotLevel] !== undefined) ? (
                                                    <td key={slotLevel} className="border border-(--border) px-2 py-1">
                                                        {row.spellSlots?.[slotLevel] ?? "—"}
                                                    </td>
                                                ) : null;
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {mergedFeatures.length > 0 && (
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold">Уміння</h2>
                            <div className="flex flex-col gap-4 mt-2">
                                {mergedFeatures.map((feature, index) => (
                                    <div key={index}
                                        className={`rounded-md flex flex-row gap-6 p-3 text-left 
                                        ${feature.source === "subclass" ? "bg-(--active)" : "bg-(--card-background)"}`}
                                    >
                                        <h3 className="font-medium my-auto w-10 whitespace-nowrap">{feature.level} lvl</h3>
                                        <div>
                                            <p className="font-semibold">{feature.name}</p>
                                            <p className="text-sm whitespace-pre-line">{feature.description}</p>
                                            {feature.source === "subclass" && (
                                                <p className="text-xs italic text-(--text-second)">
                                                    (з підкласу {selectedSubclass?.nameUk})
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
