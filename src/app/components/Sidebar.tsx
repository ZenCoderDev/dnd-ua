"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, User, Scroll, Backpack, Sparkles, Gem, Scale, Award, Route, HandCoins } from "lucide-react";
import Link from "next/link";

const menuItems = [
    { icon: <BookOpen className="w-5 h-5" />, label: "Класи", href: "/classes" },
    { icon: <User size={24} className="w-5 h-5" />, label: "Раси", href: "/races" },
    { icon: <Scroll size={24} className="w-5 h-5" />, label: "Походження", href: "/backgrounds" },
    { icon: <Backpack size={24} className="w-5 h-5" />, label: "Інвентар", href: "/equipment" },
    { icon: <Sparkles size={24} className="w-5 h-5" />, label: "Закляття", href: "/spells" },
    { icon: <Gem size={24} className="w-5 h-5" />, label: "Маг. предмети", href: "/magic-items" },
    { icon: <Award size={24} className="w-5 h-5" />, label: "Риси", href: "/feats" },
    { icon: <Scale size={24} className="w-5 h-5" />, label: "Правила", href: "/rules" },
    { icon: <Route size={24} className="w-5 h-5" />, label: "Наш шлях", href: "/roadmap" },
];


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.aside
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            animate={{ width: !isOpen ? 70 : 220 }}
            className="hidden md:flex fixed h-screen bg-(--background) text-(--foreground) flex-col shadow-lg left-0 top-0 bottom-0 z-16 border-r border-(--border)"
            transition={{ duration: 0.3 }}
        >
            <div className="relative flex items-center justify-center h-16 border-b border-(--border)">
                <Link
                    href={'/'}
                    className="relative w-full text-center flex items-center bg-(--accent)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260" width="600" height="64" fill="none">
                        <defs>
                            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#DCAD5B" />
                                <stop offset="100%" stop-color="#EBEDC1" />
                            </linearGradient>
                        </defs>

                        <path d="M160 60 L180 60 L180 190 L160 190 Z" fill="url(#goldGradient)" />
                        <path d="M160 190 L170 220 L180 190 Z" fill="url(#goldGradient)" />
                        <line x1="170" y1="65" x2="170" y2="185" stroke="#fff" stroke-opacity="0.4" stroke-width="2" />
                        <rect x="145" y="60" width="50" height="12" rx="3" fill="url(#goldGradient)" />
                        <rect x="165" y="30" width="10" height="30" rx="2" fill="url(#goldGradient)" />
                        <circle cx="170" cy="20" r="7" fill="url(#goldGradient)" />

                        <text x="205" y="165" font-family="Montserrat, Arial, sans-serif"
                            font-size="120" font-weight="600" text-anchor="start"
                            fill="url(#goldGradient)">
                            B
                        </text>

                        <path d="M320 60 C430 60 430 190 320 190"
                            stroke="url(#goldGradient)" stroke-width="18" fill="none" stroke-linecap="round" />
                        <path d="M340 70 C410 80 410 170 340 180"
                            stroke="url(#goldGradient)" stroke-width="10" fill="none" stroke-linecap="round" />

                        <line x1="325" y1="125" x2="400" y2="125" stroke="url(#goldGradient)" stroke-width="10" stroke-linecap="round" />

                        <line x1="335" y1="75" x2="335" y2="175" stroke="#fff" stroke-opacity="0.7" stroke-width="3" />
                        <line x1="350" y1="78" x2="350" y2="172" stroke="#fff" stroke-opacity="0.6" stroke-width="3" />
                        <line x1="365" y1="82" x2="365" y2="168" stroke="#fff" stroke-opacity="0.5" stroke-width="3" />
                    </svg>



                </Link>

            </div>
            <div className="flex h-full flex-col justify-between">
                <nav className="flex-1 mt-4 flex flex-col gap-4 px-4">
                    {menuItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}>
                            <motion.div
                                className="flex items-center transition duration-300 p-2 gap-3 cursor-pointer hover:bg-(--accent-hover) hover:text-(--text-accent) rounded-md">
                                <div className="w-6 h-6 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                {isOpen && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isOpen ? 1 : 0 }}
                                        transition={{ duration: 0.3, delay: isOpen ? 0.3 : 0 }}
                                        className="text-base whitespace-nowrap"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </motion.div>
                        </Link>

                    ))}
                </nav>
                <Link
                    href={"https://send.monobank.ua/jar/AHEjY15aq8"}>
                    <motion.div
                        className="mx-4 flex items-center transition duration-300 p-2 gap-3 cursor-pointer hover:bg-(--accent-hover) hover:text-(--text-accent) rounded-md">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <HandCoins size={24} className="w-5 h-5" />
                        </div>
                        {isOpen && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isOpen ? 1 : 0 }}
                                transition={{ duration: 0.3, delay: isOpen ? 0.3 : 0 }}
                                className="text-base whitespace-nowrap"
                            >
                                Підтримати
                            </motion.span>
                        )}
                    </motion.div>
                </Link>
            </div>

        </motion.aside>
    );
}
