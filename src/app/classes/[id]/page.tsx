"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useGetClassesQuery, useGetClassByIdQuery, useGetSubclassesQuery } from "@/store/api/apiClasses";


export default function RaceDetails() {
    const { id } = useParams<{ id: string }>();
    const { data: classes } = useGetClassesQuery();
    const { data: selectedClass, isLoading, error } = useGetClassByIdQuery(id);
    const { data: subclasses } = useGetSubclassesQuery(id);
    console.log(subclasses)
    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка завантаження</p>;
    if (!selectedClass) return <p>Раса не знайдена</p>;

    return (
        <div className="relative max-w-[80%] top-16 mx-auto p-6">
            <div className="flex flex-row gap-4 mb-8 mx-auto w-fit">
                {classes?.map((dndClass, index) => (
                    <Link key={index} href={`/classes/${dndClass.id}`}
                        className={`w-fit cursor-pointer group p-4 relative overflow-hidden bg-(--card-background) rounded-2xl shadow-xl transition duration-300 hover:bg-(--accent-hover) hover:scale-105
                    ${dndClass.id === id ? 'bg-(--text-second) text-(--card-background)' : 'bg-(--card-background)'} `}>
                        <p className="">{dndClass.name}</p>
                    </Link>
                ))}
            </div>
            <div className="flex flex-row gap-4">
                <div className="flex-2 gap-4 flex flex-col">
                    <Link href={`/`} className="text-3xl font-bold mt-4 cursor-pointer">← Назад</Link>
                    <h1 className="text-3xl font-bold mt-4">{selectedClass.name}</h1>
                    {/* {selectedClass.skills.from.map((skill, index) => (
                        <p key={index} className="mt-2">{skill}</p>
                    ))} */}
                    <h1 className="text-2xl font-bold">Здібності</h1>
                    <div className="grid grid-cols-2 gap-6">
                        {selectedClass.primaryAbility.map((ability, index) => (
                            <div key={index} className="bg-(--accent) flex flex-col p-4 gap-1 relative overflow-hidden border border-(--border) rounded-2xl shadow-xl">
                                <h2 className="text-xl font-bold">{ability}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <Image
                    src={selectedClass.image}
                    alt={selectedClass.name}
                    width={400}
                    height={400}
                    className="w-full max-h-120 object-top object-cover rounded-lg border-(--border) border flex-1"
                />
            </div>

            {subclasses && (
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">progression</h2>
                    <div className="flex flex-col gap-4 mt-2">
                        {subclasses.map((subclass, index) => (
                            <div key={index} className="rounded-md flex flex-col border text-center items-center bg-(--card-background) border-(--border)">

                                <div className="flex flex-row gap-4">
                                    <h3 className="font-medium mt-2">{subclass.nameUk}</h3>
                                    <h3 className="font-medium mt-2">{subclass.description}</h3>
                                </div>
                                {subclass.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex flex-row text-start w-full">
                                        <p className="bg-(--accent) flex-1/5 p-2 border-t border-b border-t-(--border) border-b-(--border) border-l-(--border)">{feature.name}</p>
                                        <p className="bg-(--accent) flex-2/5 p-2 border-t border-b border-l border-t-(--border) border-b-(--border) border-l-(--border)">{feature.description}</p>
                                        <p className="bg-(--accent) flex-2/5 p-2 border-t border-b border-l border-t-(--border) border-b-(--border) border-l-(--border)">{feature.details}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedClass.progression && (
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">progression</h2>
                    <div className="flex flex-col gap-4 mt-2">
                        {selectedClass.progression.map((progression, index) => (
                            <div key={index} className="rounded-md flex bg-(--card-background) border-(--border) flex-row border gap-6 p-3 text-center items-center">
                                <h3 className="font-medium mt-2">{progression.level}</h3>
                                <h3 className="font-medium mt-2">{progression.proficiencyBonus}</h3>
                                {progression.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="text-center items-center">
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedClass.features && (
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">progression</h2>
                    <div className="flex flex-col gap-4 mt-2">
                        {selectedClass.features.map((progression, index) => (
                            <div key={index} className="rounded-md flex bg-(--card-background) flex-row border-(--border) border gap-6 p-3">
                                <h3 className="font-medium mt-2">{progression.level}</h3>
                                <h3 className="font-medium mt-2">{progression.name}</h3>
                                <h3 className="font-medium mt-2">{progression.description}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}