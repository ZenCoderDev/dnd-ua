"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, User, Scroll, Backpack, Sparkles } from "lucide-react";
import Link from "next/link";

const menuItems = [
    { icon: <BookOpen className="w-5 h-5" />, label: "Класи", href: "/classes" },
    { icon: <User size={24} className="w-5 h-5" />, label: "Раси", href: "/races" },
    { icon: <Scroll size={24} className="w-5 h-5" />, label: "Походження", href: "/backgrounds" },
    { icon: <Backpack size={24} className="w-5 h-5" />, label: "Інвентар", href: "/equipment" },
    { icon: <Sparkles size={24} className="w-5 h-5" />, label: "Закляття", href: "/spells" },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.aside
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            animate={{ width: isOpen ? 200 : 70 }}
            className="fixed h-screen bg-(--background) text-white flex flex-col shadow-lg left-0 top-0 bottom-0 z-10 border-r border-r-(--border)"
            transition={{ duration: 0.3 }}
        >
            <div className="relative flex items-center justify-center h-16 border-b border-(--border)">
                <Link
                    href={'/'}
                    className="relative w-full text-center flex items-center">
                    <motion.span
                        animate={{ opacity: isOpen ? 1 : 0 }}
                        className="relative text-lg font-bold text-center w-full cursor-pointer"
                    >
                        <div className="p-2 bg-blue-500 flex items-center justify-center rounded-md">
                            DnUA
                        </div>
                    </motion.span>
                    {!isOpen && (
                        <div className="absolute p-2 bg-blue-500 flex items-center justify-center rounded-md">
                            DnUA
                        </div>
                    )}
                </Link>

            </div>
            <nav className="flex-1 mt-4 flex flex-col gap-4 px-4">
                {menuItems.map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}>
                        <motion.div
                            className="flex items-center transition duration-300 p-2 gap-3 cursor-pointer hover:bg-(--accent-hover) rounded-md">
                            <div className="w-6 h-6 flex items-center justify-center">
                                {item.icon}
                            </div>
                            {isOpen && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isOpen ? 1 : 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-base"
                                >
                                    {item.label}
                                </motion.span>
                            )}
                        </motion.div>
                    </Link>

                ))}
            </nav>
        </motion.aside>
    );
}
