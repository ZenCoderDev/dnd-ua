"use client";

import { useEffect, useRef } from "react";
import DiceBox from "@3d-dice/dice-box";

export default function DiceRoller() {
    const diceBoxRef = useRef<DiceBox | null>(null);

    useEffect(() => {
        const diceBox = new DiceBox("#dice-box", {
            assetPath: "/assets/dice-box",
            theme: "default",
            scale: 12,
        });

        diceBox.init().then(() => {
            diceBoxRef.current = diceBox;
        });

    }, []);

    const handleRoll = () => {
        if (diceBoxRef.current) {
            diceBoxRef.current.roll("1d20", {
                color: "#ff0000",
            });
        }
    };

    return (
        <div>
            <div
                id="dice-box"
                className="bg-transparent mx-auto flex"
                style={{
                    width: "600px",
                    height: "400px",
                    position: "relative",
                }}
            ></div>

            <button
                onClick={handleRoll}
                className="bg-(--accent) shadow-2xl hover:bg-(--accent-hover) hover:text-(--active) border border-(--active) cursor-pointer transition duration-300 py-2 px-4 text-(--active) rounded-xl mb-3"
            >
                🎲 Кинути кубик!
            </button>
        </div>
    );
}
