"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react"; // ⬅️ добавляем хуки
import { useGetClassesQuery, useGetClassByIdQuery, useGetSubclassesQuery } from "@/store/api/apiClasses";
import { data } from "framer-motion/client";

interface MergedFeature {
    level: number;
    name: string;
    description: string;
    source: "class" | "subclass";
    subclassId?: string;
}

export default function RaceDetails() {
    const { id } = useParams<{ id: string }>();
    const { data: classes } = useGetClassesQuery();
    const { data: selectedClass, isLoading, error } = useGetClassByIdQuery(id);
    const { data: subclasses } = useGetSubclassesQuery(id);

    console.log(selectedClass?.armor)

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
        <div className="relative max-w-[90%] mx-auto p-6">
            {/* твой код — список классов */}
            <div className="flex flex-row gap-4 mb-8 mx-auto w-fit">
                {classes?.map((dndClass, index) => (
                    <Link key={index} href={`/classes/${dndClass.id}`}
                        className={`w-fit cursor-pointer group p-4 relative overflow-hidden rounded-2xl shadow-xl transition duration-300 hover:bg-(--accent-hover) hover:text-(--foreground) hover:scale-105
                    ${dndClass.id === id ? 'bg-(--active) text-(--foreground)' : 'bg-(--card-background) text-(--text-tips)'} `}>
                        <p className="">{dndClass.name}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-row gap-2 justify-between">
                {subclasses && (
                    <div className="relative h-fit">
                        <div className="flex bg-(--card-background) rounded-xl border-(--border) border flex-col gap-4 max-h-[80%] fixed w-[16%] hide-scrollbar overflow-y-auto pr-2">

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
                                    className={`rounded-md flex m-2 flex-col border transition duration-300 text-center hover:bg-(--accent-hover) items-center cursor-pointer p-4
        ${selectedSubclassId === subclass.id ? "bg-(--accent)" : "bg-(--card-background)"}`}
                                >
                                    <div className="flex flex-col">
                                        <h3 className="font-medium">{subclass.nameUk}</h3>
                                        <p className="text-sm opacity-80">{subclass.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-4 w-[80%]">

                    {/* твой старый блок */}
                    <div className="flex flex-row gap-4">
                        <div className="flex-2 gap-4 flex flex-col">
                            <h1 className="text-2xl font-bold">Здібності</h1>
                            <div className="grid grid-cols-2 gap-6">
                                {selectedClass.primaryAbility.map((ability, index) => (
                                    <div key={index} className="bg-(--accent) flex flex-col p-4 gap-1 relative overflow-hidden border border-(--border) rounded-2xl shadow-xl">
                                        <h2 className="text-xl font-bold">{ability}</h2>
                                    </div>
                                ))}
                            </div>
                            <h3 className="font-medium mt-2">Choose: {selectedClass.skillsChoose}</h3>
                            {selectedClass.skillsFrom.map((skill, index) => (
                                <div key={index}>
                                    <p>{skill}</p>
                                </div>
                            ))}
                            {selectedClass.armor.map((armor, index) => {
                                const value = Object.values(armor)[0]; // достаём "Проста зброя"
                                return (
                                    <div
                                        key={index}
                                        className="rounded-md flex bg-(--card-background) border-(--border) flex-row border gap-6 p-3 text-center items-center"
                                    >
                                        <h3 className="font-medium mt-2">{value}</h3>
                                    </div>
                                );
                            })}
                            {selectedClass.weapons.map((weapon, index) => {
                                const value = Object.values(weapon)[0]; // достаём "Проста зброя"
                                return (
                                    <div
                                        key={index}
                                        className="rounded-md flex bg-(--card-background) border-(--border) flex-row border gap-6 p-3 text-center items-center"
                                    >
                                        <h3 className="font-medium mt-2">{value}</h3>
                                    </div>
                                );
                            })}
                            {selectedClass.tools.map((tools, index) => {
                                const value = Object.values(tools)[0]; // достаём "Проста зброя"
                                return (
                                    <div
                                        key={index}
                                        className="rounded-md flex bg-(--card-background) border-(--border) flex-row border gap-6 p-3 text-center items-center"
                                    >
                                        <h3 className="font-medium mt-2">{value}</h3>
                                    </div>
                                );
                            })}
                            {selectedClass.equipment && (
                                <div className="mt-6">
                                    <h2 className="text-2xl font-semibold">progression</h2>
                                    <div className="flex flex-col gap-4 mt-2">
                                        {selectedClass.equipment.map((equipment, index) => (
                                            <div key={index} className="rounded-md flex bg-(--card-background) border-(--border) flex-row border gap-6 p-3 text-center items-center">
                                                <h3 className="font-medium mt-2">{equipment}</h3>
                                            </div>
                                        ))}
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

                    {/* 🔥 НОВЫЙ БЛОК: объединённые абилки */}
                    {mergedFeatures.length > 0 && (
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold">Уміння</h2>
                            <div className="flex flex-col gap-4 mt-2">
                                {mergedFeatures.map((feature, index) => (
                                    <div key={index}
                                        className={`rounded-md flex flex-row border gap-6 p-3 text-left 
                                        bg-(--card-background)`}
                                    >
                                        <h3 className="font-medium">{feature.level} lvl</h3>
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
