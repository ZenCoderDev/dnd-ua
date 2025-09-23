"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetRaceByIdQuery, useGetRacesQuery } from "@/store/api/apiSlice";
import Link from "next/link";


export default function RaceDetails() {
    const { id } = useParams<{ id: string }>();
    const { data: races } = useGetRacesQuery();
    const { data: race, isLoading, error } = useGetRaceByIdQuery(id);

    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка завантаження</p>;
    if (!race) return <p>Раса не знайдена</p>;

    return (
        <div className="relative top-16 max-w-[90%] mx-auto p-6">
            <div className="flex flex-row gap-4 mb-8 mx-auto w-fit">
                {races?.map((race, index) => (
                    <Link key={index} href={`/races/${race.id}`}
                        className={`w-fit cursor-pointer group p-4 relative overflow-hidden rounded-2xl shadow-xl transition duration-300 hover:bg-(--accent-hover) hover:text-(--foreground) hover:scale-105
                    ${race.id === id ? 'bg-(--active) text-(--foreground)' : 'bg-(--card-background) text-(--text-tips)'} `}>
                        <p className="">{race.name}</p>
                    </Link>
                ))}
            </div>
            <div className="flex flex-row gap-4">
                <div className="flex-2 gap-4 flex flex-col">
                    <Link href={`/`} className="text-3xl font-bold mt-4 cursor-pointer">← Назад</Link>
                    <h1 className="text-3xl font-bold mt-4">{race.name}</h1>
                    <p className="mt-2">{race.languages}</p>
                    <h1 className="text-2xl font-bold">Здібності</h1>
                    <div className="grid grid-cols-2 gap-6">
                        {race.traits.map((trait, index) => (
                            <div key={index} className="flex flex-col p-4 gap-1 relative overflow-hidden bg-(--card-background) rounded-2xl shadow-xl">
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


            {race.subraces && (
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">Підраси</h2>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        {race.subraces.map((sub) => (
                            <div key={sub.id} className="rounded-md border p-3">
                                <img
                                    src={sub.image}
                                    alt={sub.name}
                                    className="w-full h-32 object-cover rounded"
                                />
                                <h3 className="font-medium mt-2">{sub.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}