"use client";

import { motion } from "framer-motion";
import { act, useEffect, useRef, useState } from "react";

export default function HomePage() {
    const backgrounds = ["/images/bg4.webp", "/images/bg5.webp", "/images/bg3.webp"];
    const [active, setActive] = useState(0);
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const sections = sectionRefs.current.filter(Boolean);
        if (!sections.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                const vis = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (vis) setActive(Number((vis.target as HTMLElement).dataset.idx));
            },
            { threshold: [0.5] }
        );

        sections.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <main className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* Фоны */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                {backgrounds.map((src, i) => (
                    <motion.div
                        key={src}
                        className="absolute inset-0 bg-cover bg-center will-change-[opacity,transform]"
                        style={{ backgroundImage: `url(${src})` }}
                        initial={{ opacity: i === 0 ? 1 : 0.4, translateX: 0 }}
                        animate={{
                            opacity: active === i ? 1 : 0,
                            scale: active === i ? 1 : 1.6,
                            translateX: active === i ? 0 : 1600
                        }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            {/* Секции */}
            {backgrounds.map((_, i) => (
                <section
                    key={i}
                    ref={(el) => {
                        if (el) sectionRefs.current[i] = el;
                    }}
                    data-idx={i}
                    className="snap-start h-screen flex items-center justify-center text-white text-5xl"
                >
                    Section {i + 1}
                </section>
            ))}
        </main>
    );
}
