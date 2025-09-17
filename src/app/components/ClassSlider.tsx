"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useGetClassesQuery } from "@/store/api/apiClasses";

export default function ClassSlider() {
    const { data: classes, isLoading, error } = useGetClassesQuery();
    const [index, setIndex] = useState(0);

    if (!classes) return <p>Завантаження...</p>;

    const next = () => setIndex((prev) => (prev + 1) % classes.length);
    const prev = () => setIndex((prev) => (prev - 1 + classes.length) % classes.length);

    const getIndex = (offset: number) => {
        return (index + offset + classes.length) % classes.length;
    };

    return (
        <div className="relative w-[600px] flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold mb-6">Хто ти сьогодні?</h2>

            <div className="relative flex w-full h-[420px] items-center justify-center">
                <motion.div
                    className="absolute left-0 w-[200px] h-[300px] opacity-60 scale-75"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.6, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={classes[getIndex(-1)].image}
                        alt={classes[getIndex(-1)].name}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </motion.div>

                <motion.div
                    key={classes[index].id}
                    className="relative w-[300px] h-[420px] z-8 bg-purple-800/40 border border-purple-500 rounded-2xl shadow-xl overflow-hidden"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src={classes[index].image}
                        alt={classes[index].name}
                        fill
                        className="object-cover object-top rounded-2xl"
                    />
                    <div className="absolute bottom-0 p-4 text-center bg-black/40">
                        <h3 className="text-xl font-semibold mb-1">{classes[index].name}</h3>
                        <p className="text-sm opacity-80">{classes[index].description}</p>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute right-0 w-[200px] h-[300px] opacity-60 scale-75"
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.6, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={classes[getIndex(1)].image}
                        alt={classes[getIndex(1)].name}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </motion.div>
            </div>

            <div className="flex gap-6 mt-6">
                <button
                    onClick={prev}
                    className="px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md"
                >
                    ◀
                </button>
                <button
                    onClick={next}
                    className="px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md"
                >
                    ▶
                </button>
            </div>
        </div>
    );
}
