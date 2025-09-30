"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sword } from "lucide-react";
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
        <div className="relative mx-auto w-full md:w-[600px] flex h-full flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold mb-6" style={{ textShadow: "0px 2px 4px var(--background)" }}>Хто ти сьогодні?</h2>

            <div className="relative flex w-full h-full items-center justify-center">
                <motion.div
                    className="absolute left-0 w-[200px] h-[300px] opacity-60 scale-75"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.6, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={classes[getIndex(-1)].image}
                        alt={classes[getIndex(-1)].name}
                        onClick={prev}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </motion.div>

                <motion.div
                    key={classes[index].id}
                    className="relative w-[200px] h-[300px] md:w-[300px] md:h-[420px] z-8 bg-(--accent) border border-(--border) rounded-2xl shadow-xl overflow-hidden"
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
                        <h3 className="text-xl font-semibold mb-1 text-(--text-accent)">{classes[index].name}</h3>
                        <p className="text-sm opacity-80 text-(--text-accent)">{classes[index].description}</p>
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
                        onClick={next}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </motion.div>
            </div>

            <div className="flex gap-6 mt-6">
                <button
                    onClick={prev}
                    className="px-4 py-2 bg-(--active) text-(--text-accent) hover:bg-(--accent-hover) transition duration-300 rounded-lg shadow-md flex items-center justify-center"
                >
                    <Sword className="w-10 h-10 rotate-315" />
                </button>

                <button
                    onClick={next}
                    className="px-4 py-2 bg-(--active) text-(--text-accent) hover:bg-(--accent-hover) transition duration-300 rounded-lg shadow-md flex items-center justify-center"
                >
                    <Sword className="w-10 h-10 rotate-135" />
                </button>
            </div>
        </div>
    );
}
