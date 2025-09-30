"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    BookOpen,
    User,
    Scroll,
    Backpack,
    Sparkles,
    Gem,
    Scale,
    Award,
    Route,
    HandCoins,
    Menu,
    X,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
    { icon: <BookOpen className="w-5 h-5" />, label: "Класи", href: "/classes" },
    { icon: <User className="w-5 h-5" />, label: "Раси", href: "/races" },
    { icon: <Scroll className="w-5 h-5" />, label: "Походження", href: "/backgrounds" },
    { icon: <Backpack className="w-5 h-5" />, label: "Інвентар", href: "/equipment" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Закляття", href: "/spells" },
    { icon: <Gem className="w-5 h-5" />, label: "Маг. предмети", href: "/magic-items" },
    { icon: <Award className="w-5 h-5" />, label: "Риси", href: "/feats" },
    { icon: <Scale className="w-5 h-5" />, label: "Правила", href: "/rules" },
    { icon: <Route className="w-5 h-5" />, label: "Наш шлях", href: "/roadmap" },
];

export default function HeaderWithMobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="fixed md:hidden top-0 left-0 right-0 h-14 bg-(--background) border-b border-(--border) flex items-center justify-between px-4 z-20">
                <Link href="/" className="text-xl font-bold text-(--accent)">
                    Table Dices
                </Link>
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-(--accent-hover)"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </header>

            <motion.aside
                initial={{ x: "200%" }}
                animate={{ x: isOpen ? 0 : "200%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 bottom-0 w-64 bg-(--background) border-r border-(--border) shadow-lg z-30 md:hidden flex flex-col"
            >
                <div className="flex items-center justify-between h-14 px-4 border-b border-(--border)">
                    <span className="text-lg font-semibold">Меню</span>
                    <button onClick={() => setIsOpen(false)}>
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <nav className="flex-1 flex flex-col gap-2 p-4">
                    {menuItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-md hover:bg-(--accent-hover) hover:text-(--text-accent)"
                        >
                            <div className="w-6 h-6 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <span className="text-base">{item.label}</span>
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-(--border)">
                    <Link
                        href="https://send.monobank.ua/jar/AHEjY15aq8"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-(--accent-hover) hover:text-(--text-accent)"
                    >
                        <HandCoins className="w-5 h-5" />
                        <span>Підтримати</span>
                    </Link>
                </div>
            </motion.aside>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
