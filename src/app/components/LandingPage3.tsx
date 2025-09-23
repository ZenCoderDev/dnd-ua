"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import BardSilhouette from "./silhouettes/BardSilhouette";
import SorcSilhouette from "./silhouettes/SorcSilhouette";
import PalSilhouette from "./silhouettes/PalSilhouette";
import BarbSilhouette from "./silhouettes/BarbSilhouette";
import PriestSilhouette from "./silhouettes/PriestSilhouette";
import DruidSilhouette from "./silhouettes/DruidSilhouette";
import ClassSlider from "./ClassSlider";
import DiceRoller from "./DiceRoller";
import { prisma } from "../../lib/prisma";

export default function HomePage() {
    const { scrollYProgress } = useScroll();

    const background = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [
            "linear-gradient(to bottom, #0F0A1F, #7C3AED)",
            "linear-gradient(to bottom, #7C3AED, #0F0A1F)",
            "linear-gradient(to bottom, #0F0A1F, #7C3AED)"
        ]
    );

    // async function update() {
    //     await prisma.spell.updateMany({
    //         where: { id: { gt: 285 } },
    //         data: { level: 9 },
    //     });
    //     console.log("✅ Updated spells");
    // }

    // update();

    return (
        <motion.main
            style={{ background }}
            className="relative min-h-[300vh] overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0.6, }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3, once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                    transformOrigin: "center",
                    backgroundImage: "url('/backgrounds/town.svg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="relative flex items-center justify-center text-white text-5xl h-screen ">

                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute flex-1/2 left-12 -bottom-10  z-6 ">
                    <BardSilhouette />
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute flex-1/2 right-12 -bottom-10 z-6">
                    <SorcSilhouette />
                </motion.div>
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute w-full z-6 mx-0 flex flex-col justify-center text-center top-40 max-w-[60%] gap-8">
                    <h1 className="animate-fade-up animate-duration-1000 animate-delay-100 self-center uppercase">Підземелля та Дракони</h1>
                    <h1 className="animate-fade-up animate-duration-1000 animate-delay-100 self-center uppercase">твій портал у світ пригод</h1>
                    <h3 className="animate-fade-down text-2xl animate-duration-1000 animate-delay-300 self-center">Створи власну історію, кинь кубик долі та занурся у безмежний світ фантазії.</h3>
                    <DiceRoller />
                </motion.div>

            </motion.div>
            <div className="h-8">

            </div>
            <motion.div
                initial={{ opacity: 0.6, }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3, once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                    transformOrigin: "center",
                    backgroundImage: "url('/backgrounds/blob.svg')",
                    backgroundSize: "cover",   // или "contain"
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="relative  h-screen flex items-center justify-end text-white text-5xl">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute flex-1/2 left-12 top-10 z-6"
                >
                    <PriestSilhouette />
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="z-6 text-center gap-8">
                    <ClassSlider />
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute z-6 w-full mx-0 flex flex-col justify-center text-center top-30 gap-8">
                    <h1 className="self-center uppercase">Для граців</h1>
                </motion.div>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute w-full z-6 mx-0 flex flex-col justify-center bottom-30 max-w-[40%] gap-8 left-40">
                    <h3 className="self-center text-3xl">Розпочни свій шлях героя: обери расу, клас та здібності. Тут ти знайдеш усе необхідне для створення персонажа та участі в кампанії.</h3>
                </motion.div>
            </motion.div>
            <div className="h-8">

            </div>
            <motion.div
                initial={{ opacity: 0.6, }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.5, once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                    transformOrigin: "center",
                    backgroundImage: "url('/backgrounds/peaks.svg')",
                    backgroundSize: "cover",   // или "contain"
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="relative flex items-center justify-center text-white text-5xl h-screen">
                <motion.div
                    initial={{ x: 400, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute flex-1/2 left-12  bottom-0 z-6 ">
                    <BarbSilhouette />
                </motion.div>
                <motion.div
                    initial={{ x: -400, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute flex-1/2 right-12 top-10 z-6 ">
                    <PalSilhouette />
                </motion.div>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute w-full z-6 mx-0 flex flex-col justify-center text-center top-40 max-w-[60%] gap-8 left-0">
                    <h1 className="self-center uppercase">Для майстрів</h1>
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute w-full z-6 mx-0 flex flex-col justify-center text-right bottom-30 max-w-[40%] gap-8 right-40">
                    <h3 className="self-center text-3xl">Провідник історії, світобудівник, хранитель таємниць. Якщо ти майстер гри — тут на тебе чекають інструменти, сюжети й поради для проведення незабутніх пригод.</h3>
                </motion.div>
            </motion.div>
        </motion.main>
    );
}
