"use client";

import Link from "next/link";
import { equipmentCategories } from "./categories";

export default function EquipmentIndexPage() {
    return (
       <div className="md:max-w-[90%] mt-12 md:mt-0 relative grid gap-6 px-2 py-4 md:p-6
                grid-cols-[repeat(auto-fit,minmax(340px,1fr))] mx-auto overflow-y-hidden">
            {equipmentCategories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                    <Link
                        key={cat.href}
                        href={cat.href}
                        className="hover:scale-105 animate-fade-up animate-duration-1000 relative group bg-[var(--card-background)] rounded-2xl shadow-md overflow-hidden border border-[var(--border)] hover:shadow-lg transition p-4 flex flex-col gap-3"
                        style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <div className="absolute bottom-1/2 right-1/2 w-[200%] h-[100%]
                                bg-gradient-to-tl from-white/40 to-transparent
                                opacity-0 group-hover:opacity-70
                                transform translate-x-1/3 translate-y-1/3 rotate-45
                                group-hover:translate-x-0 group-hover:translate-y-0
                                transition-all duration-700 ease-out
                                blur-xl"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon className="w-8 h-8 text-(--accent)" />
                            <h2 className="text-xl uppercase font-bold text-(--text)">{cat.name}</h2>
                        </div>
                        <p className="text-sm text-(--text-second)">{cat.description}</p>
                    </Link>
                );
            })}
        </div>
    );
}
