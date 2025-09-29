"use client";

import { Provider } from "react-redux";
import { store } from "./index";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const animations = {
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3, ease: "easeInOut" },
    },
    scale: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.35, ease: "easeOut" },
    },
    blur: {
        initial: { opacity: 0, filter: "blur(10px)" },
        animate: { opacity: 1, filter: "blur(0px)" },
        exit: { opacity: 0, filter: "blur(10px)" },
        transition: { duration: 0.4, ease: "easeOut" },
    },
    slideUp: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -40 },
        transition: { duration: 0.4, ease: "easeInOut" },
    },
};

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const effect = animations.fade;

    return (
        <Provider store={store} >
            {children}
        </Provider>
    );
}
