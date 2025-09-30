"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ClassSlider from "./ClassSlider";
import DiceRoller from "./DiceRoller";
import TownSVG from "./backgrounds/TownBackground";
import DragonSilhouette from "./silhouettes/Dragon";
import DragonTalonSilhouette from "./silhouettes/DragonClaw";
import MageHandSilhouette from "./silhouettes/HandSilhouette";
import BlacksmithSilhouette from "./silhouettes/BlacksmithSilhouette";
import LHandSilhoutte from "./silhouettes/LHandSilhouette";

export default function HomePage() {
    const { scrollYProgress } = useScroll();

    const background = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [
            "linear-gradient(to bottom, #FDF6E300, #A4714800)",
            "linear-gradient(to bottom, #FDF6E300, #A4714800)",
            "linear-gradient(to bottom, #FDF6E300, #A4714800)"
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
            className="relative min-h-[300vh] flex flex-col gap-0 overflow-hidden"
        >
            <DragonSilhouette />
            <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3, once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex items-center z-10 justify-center text-(--foreground) w-full text-5xl h-screen border">
                <div className="absolute -bottom-16 z-10 w-full max-w-[40%] md:max-w-[50%] max-h-[60%] md:right-20 right-10">
                    <DragonTalonSilhouette />
                </div>
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute w-full z-6 mx-0 flex flex-col justify-center text-center top-20 p-4 md:left-0 md:max-w-[60%] gap-2 md:gap-8">
                    <h1 className="animate-fade-up animate-duration-1000 animate-delay-100 self-center uppercase text-3xl md:text-6xl font-bold text-(--accent)" style={{ textShadow: "-2px 2px 4px var(--background)" }}>Table Dices</h1>
                    <h1 className="animate-fade-up animate-duration-1000 animate-delay-100 self-center uppercase text-2xl md:text-4xl;" style={{ textShadow: "-2px 2px 4px var(--background)" }}>твій портал у світ пригод</h1>
                    <h3 className="animate-fade-down animate-duration-1000 animate-delay-300 self-center text-[18px] md:text-xl mt-2 md:mt-4 " style={{ textShadow: "-2px 2px 4px var(--background)" }}>Створи власну історію, кинь кубик долі та занурся у безмежний світ фантазії.</h3>
                    <div className="w-full items-center flex justify-center">
                        <DiceRoller />
                    </div>
                </motion.div>
                <TownSVG />
            </motion.div>
            <div className="h-96 default-background z-6 relative">
                <div className="h-full w-full bg-(--accent)">

                </div>
            </div>
            <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3, once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex items-center z-10 justify-center text-(--foreground) w-full text-5xl h-screen default-background">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="hidden md:flex md:absolute w-full left-12 bottom-0 z-0"
                >
                    <MageHandSilhouette />
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute right-0 left-0 flex justify-center z-6 text-center gap-8">
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="relative w-full z-6 mx-0 flex flex-col text-center p-4 md:left-0 md:max-w-[60%] gap-2 md:gap-8">
                    <h1 className="self-center uppercase text-2xl md:text-4xl font-bold text-(--accent)" style={{ textShadow: "-2px 2px 4px var(--background)" }}>Для граців</h1>
                    <h3 className="self-center text-xl" style={{ textShadow: "0px 2px 4px var(--background)" }}>Розпочни свій шлях героя: обери расу, клас та здібності. Тут ти знайдеш усе необхідне для створення персонажа та участі в кампанії.</h3>
                    <ClassSlider />
                </motion.div>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute w-full z-6 mx-0 flex flex-col justify-center bottom-30 max-w-[40%] gap-8 right-0">
                </motion.div>
            </motion.div>
            <div className="h-96  default-background z-6 relative">
                <div className="h-full w-full bg-(--accent)">

                </div>
            </div>
            <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.5, once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative default-background w-full flex items-center z-6 justify-center text-(--foreground) text-5xl h-screen">

                <motion.div
                    initial={{ x: -400, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute h-screen flex justify-end w-full -right-20 top-0 z-6 ">
                    <div className="rotate-270 w-[40%] h-[100%]">
                        <LHandSilhoutte />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 400, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute  h-screen w-full -left-20 top-20 z-6 ">
                    <div className="rotate-90 w-[40%] h-[85%]">
                        <LHandSilhoutte />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 400, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="w-full z-6 h-full mx-0 flex flex-col justify-between pb-20 text-center mt-40 p-6 md:p-0 md:max-w-[60%] gap-8 left-0 right-0">
                    <div className="flex flex-col gap-8">
                        <h1 className="self-center uppercase text-2xl md:text-4xl font-bold text-(--accent)" style={{ textShadow: "0px 2px 4px var(--background)" }}>Для майстрів</h1>
                        <h3 className="self-center text-xl text-(--accent)" style={{ textShadow: "0px 0px 0px var(--background)" }}>Створіть свій світ, насичуйте його подіями і грайте разом зі своїми друзями! Створють найкращі пригоди як для себе, так і для них. І пам`&apos;ятайте: Найкраща пригода це та, де усім знайшлося місце!</h3>
                    </div>
                    <BlacksmithSilhouette />
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute w-full z-6 mx-0 flex flex-col justify-center text-right bottom-30 max-w-[40%] gap-8 right-40">
                </motion.div>
            </motion.div>
        </motion.main >
    );
}
