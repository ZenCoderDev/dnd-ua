"use client";

import { useGetRacesQuery } from "@/store/api/apiSlice";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const { data: races, isLoading, error } = useGetRacesQuery();

    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка завантаження</p>;

    return (
        <div className="grid grid-cols-4 gap-6 p-6">
            {races?.map((race) => (
                <Link
                    key={race.id}
                    href={`/races/${race.id}`}
                    className="cursor-pointer group p-4 relative overflow-hidden bg-(--card-background) rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"                >
                    <Image
                        src={race.image}
                        alt={race.name}
                        width={400}
                        height={400}
                        className="w-full max-h-80 object-top object-cover rounded-lg border-(--foreground) border"
                    />
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute bottom-1/2 right-1/2 w-[200%] h-[200%]
                                bg-gradient-to-tl from-white/40 to-transparent
                                opacity-0 group-hover:opacity-70
                                transform translate-x-1/3 translate-y-1/3 rotate-45
                                group-hover:translate-x-0 group-hover:translate-y-0
                                transition-all duration-700 ease-out
                                blur-xl"
                        />
                    </div>
                    <h2 className="text-xl font-bold mt-2">{race.name}</h2>
                    <p className="text-sm text-(--text-second) opacity-80">{race.description}</p>
                </Link>
            ))}
        </div>
    );
}
