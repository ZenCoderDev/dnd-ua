"use client";

import { useGetClassesQuery } from "@/store/api/apiClasses";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const { data: classes, isLoading, error } = useGetClassesQuery();

    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка завантаження</p>;

    return (
       <div className="md:max-w-[90%] mt-12 md:mt-0 relative grid gap-6 px-2 py-4 md:p-6
                grid-cols-[repeat(auto-fit,minmax(340px,1fr))] mx-auto overflow-y-hidden">
            {classes?.map((classes, index) => (
                <Link
                    key={classes.id}
                    href={`/classes/${classes.id}`}
                    className={`cursor-pointer mx-0 animate-fade-up animate-duration-1000  group p-4 relative overflow-hidden bg-(--card-background) border border-(--border) rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105`}
                    style={{ animationDelay: `${index * 100}ms` }}>
                    <Image
                        src={classes.image}
                        alt={classes.name}
                        width={400}
                        height={400}
                        className="w-full max-h-80 object-top object-cover rounded-lg border-(--border) border"
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
                    <h2 className="text-xl font-bold mt-2">{classes.name}</h2>
                    <p className="text-sm text-(--text-second) opacity-80">{classes.description}</p>
                </Link>
            ))}
        </div>
    );
}
