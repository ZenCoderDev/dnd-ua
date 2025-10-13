"use client";
import { useGetEntityBySlugQuery } from "@/store/api/apiEntity";
import { useState } from "react";

interface TooltipProps {
    id: string;
    children: React.ReactNode;
}

const Tooltip = ({ id, children }: TooltipProps) => {
    const [visible, setVisible] = useState(false);
    const { data: entity, isFetching } = useGetEntityBySlugQuery(id, {
        skip: !visible, // запрос только при наведении
    });

    return (
        <span
            className="relative cursor-help text-blue-300 hover:text-blue-400 transition"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}

            {visible && (
                <div
                    className="absolute bottom-full left-1/2 right-0 -translate-x-1/2 z-50 mb-3 w-72 
                     rounded-xl bg-(--accent) text-(--text-accent) p-4 text-sm shadow-xl
                     border border-(--border)"
                >
                    {isFetching && <div className="text-gray-400 text-xs">Loading...</div>}

                    {entity && (
                        <>
                            <div className="font-semibold text-gray-50 mb-1">{entity.name}</div>
                            {entity.subtitle && (
                                <div className="text-gray-400 text-xs mb-2">{entity.subtitle}</div>
                            )}

                            {entity.fields && (
                                <div className="text-gray-300 text-xs leading-snug space-y-1">
                                    {Object.entries(entity.fields).map(([key, value]) => (
                                        <div key={key}>
                                            <b>{key}:</b> {value}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {entity.description && (
                                <p className="text-gray-400 text-xs mt-2">{entity.description}</p>
                            )}
                        </>
                    )}

                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-(--accent)" />
                </div>
            )}
        </span>
    );
};

export default Tooltip;
