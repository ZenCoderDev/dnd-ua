"use client";

import { useGetPlansQuery } from "@/store/api/apiRoadmap";
import { motion } from "framer-motion";
import { HandCoins } from "lucide-react";
import Link from "next/link";

export default function RoadmapPage() {

    const { data: roadmap, isLoading, error } = useGetPlansQuery();

    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка завантаження</p>;

    return (
        <div className="relative max-w-[90%] mx-auto p-6 flex flex-col gap-2">
            {roadmap && roadmap.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">Шлях сайту до поліпшення</h2>
                    <div className="flex flex-col gap-4 mt-2">
                        {roadmap.map((plan, index) => (
                            <div key={index}
                                className={`rounded-md flex flex-col gap-2 p-3 text-left bg-(--card-background)`}
                            >
                                <p className="font-semibold">{plan.name}</p>
                                <p className="text-sm whitespace-pre-line">Опис: {plan.description}</p>
                                <p className="text-sm whitespace-pre-line">Термін: {plan.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <h2 className="text-2xl font-semibold mt-12">Для тих кому подобається проект так хочется аби контект виходив швидве</h2>
            <h2 className="text-base">Ви можете підримати проект та давати нам більше мотивації і натхнення для роботи над ним за цим посиланням
                <Link
                    href={"https://send.monobank.ua/jar/AHEjY15aq8"} 
                    className="w-fit bg-(--card-background)">
                    <div
                        className="mx-4 bg-(--card-background) w-fit my-6 flex items-center transition duration-300 p-2 gap-3 cursor-pointer hover:bg-(--accent-hover) hover:text-(--text-accent) rounded-md">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <HandCoins size={24} className="w-5 h-5" />
                        </div>
                        <span

                            className="text-base"
                        >
                            Підтримати проект
                        </span>
                    </div>
                </Link>
                Дякуємо за увагу!
            </h2>
        </div>
    );
}
