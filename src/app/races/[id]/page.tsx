"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetRaceByIdQuery, useGetRacesQuery } from "@/store/api/apiSlice";
import Link from "next/link";

const getNormalizeTraitName = (name: string): string => {
    switch (name) {
        case "damageType":
            return "Тип стихії";
        case "breathWeapon":
            return "Форма драконячогу дихання";
        case "name":
            return "Назва";
        case "description":
            return "Опис";
    }
    return name;
}

const normalizeTraits = (traits: TraitsType | null): TraitObject[] => {
    if (!traits) return [];

    if (Array.isArray(traits)) {
        return traits;
    }

    return Object.entries(traits).map(([key, value]) => ({ [key]: value }));
};

export default function RaceDetails() {
    const { id } = useParams<{ id: string }>();
    const { data: races } = useGetRacesQuery();
    const { data: race, isLoading, error } = useGetRaceByIdQuery(id);

    if (isLoading)return <div className="relative text-center w-full h-full flex items-center justify-center"><p className="mx-auto my-0 w-full h-full">Завантаження...</p></div>;
    if (error)return <div className="relative text-center w-full h-full flex items-center justify-center"><p className="mx-auto my-0 w-full h-full">Помилка завантаження</p></div>;
    if (!race)return <div className="relative text-center w-full h-full flex items-center justify-center"><p className="mx-auto my-0 w-full h-full">Раса не знайдена</p></div>;

    return (
        <div className="relative md:max-w-[90%] mx-auto p-4 md:p-6 mt-16">
            <div className="hidden md:flex flex-row gap-4 mb-8 mx-auto w-fit">
                {races?.map((race, index) => (
                    <Link key={index} href={`/races/${race.id}`}
                        className={`w-fit cursor-pointer group p-4 relative overflow-hidden rounded-2xl shadow-xl transition duration-300 hover:bg-(--accent-hover) hover:text-(--text-accent) hover:scale-105
                    ${race.id === id ? 'bg-(--active) text-(--foreground)' : 'bg-(--accent) text-(--text-accent)'} `}>
                        <p className="">{race.name}</p>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-4">
                <div className="flex-2 gap-4 flex flex-col">
                    <h1 className="text-3xl font-bold mt-4">{race.name}</h1>
                    <h3 className="text-2xl font-bold">Ви володієте наступними мовами:</h3>
                    <div
                        className="grid gap-4"
                        style={{
                            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        }}
                    >
                        {race.languages.map((language, index) => (
                            <div key={index} className="p-4 text-center rounded-md bg-(--card-background) text-(--accent) shadow">
                                <p>{language}</p>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-2xl font-bold">Ваші видові здібності: </h1>
                    <div className="grid grid-cols-2 gap-6">
                        {race.traits.map((trait, index) => (
                            <div key={index} className="flex flex-col gap-4 p-4 text-left rounded-md bg-(--card-background) text-(--accent) shadow">
                                <h2 className="text-xl font-bold">{trait.name}</h2>
                                <p>{trait.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Image
                    src={race.image}
                    alt={race.name}
                    width={400}
                    height={400}
                    className="w-full max-h-120 object-top object-cover rounded-lg border-(--foreground) border flex-1"
                />

            </div>


            {race.subraces && race.subraces.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-2xl font-bold">Підраси</h2>
                    <div className="grid gap-4 mt-2"
                        style={{
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        }}>
                        {race.subraces.map((sub) => (
                            <div key={sub.id} className="rounded-md border p-3 bg-(--card-background)">
                                <img
                                    src={sub.image}
                                    alt={sub.name}
                                    className="w-full h-32 object-cover rounded"
                                />
                                <h3 className="font-medium mt-2">{sub.name}</h3>
                                <h3 className="font-medium mt-2">{sub.ability_bonuses}</h3>
                                {sub.traits && (
                                    <div className="bg-(--active) flex flex-col gap-4 rounded-md p-4">
                                        {normalizeTraits(sub.traits).map((trait, index) => (
                                            <div
                                                key={index}
                                                className=" text-left"
                                            >
                                                {Object.entries(trait).map(([key, value]) => (
                                                    <div key={key}>
                                                        <strong className="">{getNormalizeTraitName(key)}:</strong> {value}
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}