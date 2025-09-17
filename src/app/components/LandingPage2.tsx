"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  const images = [
    "/images/bg4.webp",
    "/images/bg5.webp",
    "/images/bg3.webp",
  ];

  return (
    <main className="relative h-screen overflow-y-scroll snap-y">
      {images.map((src, i) => (
        <section
          key={i}
          className="snap-start h-screen relative flex items-center justify-center text-white text-5xl"
        >
          {/* Картинка, которая занимает весь экран */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
            initial={{ opacity: 0.2}}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1, once: false }}
            transition={{ duration: 0.6 }}
          >
            {/* затемнение сверху */}
          </motion.div>

          {/* Текст на секции */}
          <div className="relative z-10">Section {i + 1}</div>
        </section>
      ))}
    </main>
  );
}
