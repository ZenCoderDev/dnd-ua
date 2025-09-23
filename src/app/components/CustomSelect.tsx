// components/CustomSelect.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Option = { id: string; name: string };

interface Props {
    options: Option[];
    value?: string;
    onChange: (v?: string) => void;
    placeholder?: string;
    className?: string;
}

export default function CustomSelect({ options, value, onChange, placeholder = "Вибрати", className = "" }: Props) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        window.addEventListener("click", onDocClick);
        return () => window.removeEventListener("click", onDocClick);
    }, []);

    const selected = options.find((o) => o.id === value);

    const listVariants = {
        hidden: { opacity: 0, y: -8, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { staggerChildren: 0.03 } },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: -6 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
    };

    return (
        <div ref={ref} className={`relative inline-block ${className}`}>
            <motion.button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
                className="flex items-center justify-between gap-3 px-4 py-2 rounded-xl border border-[var(--border)] bg-[var(--card-background)] shadow-sm min-w-[220px]"
            >
                <span className="text-sm text-[var(--text)]">{selected ? selected.name : placeholder}</span>
                <motion.svg
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={listVariants}
                        className="absolute z-50 mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--card-background)] shadow-lg overflow-hidden"
                        role="listbox"
                    >
                        {options.map((opt) => (
                            <motion.li
                                key={opt.id}
                                variants={itemVariants}
                                onClick={() => {
                                    onChange(opt.id);
                                    setOpen(false);
                                }}
                                className="px-4 py-2 cursor-pointer hover:bg-[var(--accent)] hover:text-white transition-colors"
                                role="option"
                                aria-selected={value === opt.id}
                            >
                                {opt.name}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
