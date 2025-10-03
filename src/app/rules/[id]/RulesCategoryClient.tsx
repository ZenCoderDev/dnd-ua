"use client";

import { useGetEquipmentByCategoryQuery } from "@/store/api/apiEquipment";
import { useGetRulesByCategoryQuery } from "@/store/api/apiRules";

export const getNormalizeTypeName = (name: string): string => {
    switch (name) {
        case "Core":
            return "Основні правила";
        case "Combat":
            return "Бій";
        case "Exploration":
            return "Дослідження";
        case "Magic":
            return "Магія";
        case "Economy":
            return "Економіка";
        case "Social":
            return "Соціальна взаємодія";
    }
    return name;
}

export default function RulesCategoryClient({ id }: { id: string }) {
    const { data, isLoading, isError } = useGetRulesByCategoryQuery(id);

    if (isLoading)return <div className="relative text-center w-full h-full flex items-center justify-center"><p className="mx-auto my-0 w-full h-full">Завантаження...</p></div>;
    if (isError || !data)return <div className="relative text-center w-full h-full flex items-center justify-center"><p className="mx-auto my-0 w-full h-full">Помилка!</p></div>;

    const grouped = new Map<string, typeof data>();
    data.forEach((item) => {
        const group = item.category; // например simple_weapon, martial_weapon, ranged_weapon
        if (!grouped.has(group)) grouped.set(group, []);
        grouped.get(group)!.push(item);
    })

    return (
        <div className="md:max-w-[90%] mx-auto mt-16 md:mt-4">
            {Array.from(grouped.entries()).map(([group, items]) => (
                <div key={group} className="mb-6 bg-(--card-background) gap-4 flex flex-col p-4 rounded-2xl">
                    <h1 className="text-xl font-bold">
                        {getNormalizeTypeName(group)}
                    </h1>
                    <div className="grid gap-4"
                        style={{
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        }}>
                        {items.map((item) => (
                            <div key={item.id} className="border p-2 rounded bg-(--active)">
                                <strong>{item.name}</strong>
                                {item.description && (
                                    <div className="flex flex-col gap-1 mt-1 text-sm text-(--foreground)">

                                        <p>
                                            <strong>Опис: </strong>{item.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    );
}
