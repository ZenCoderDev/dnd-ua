"use client";

import { useGetEquipmentByCategoryQuery } from "@/store/api/apiEquipment";

export const getNormalizeTypeName = (name: string): string => {
    switch (name) {
        case "martial_melee_weapon":
            return "Військова зброя";
        case "simple_melee_weapon":
            return "Проста зброя";
        case "simple_ranged_weapon":
            return "Проста далекобійна зброя";
        case "martial_ranged_weapon":
            return "Військова далекобійна зброя";
        case "light_armor":
            return "Легкі обладунки";
        case "medium_armor":
            return "Середні обладунки";
        case "heavy_armor":
            return "Важкі обладунки";
        case "shield":
            return "Щити";
        case "ammunition":
            return "Амуніція";
        case "tool":
            return "Інструменти";
        case "instrument":
            return "Музичні інструменти";
        case "kit":
            return "Набори";
        case "gaming_set":
            return "Ігрові набори";
        case "mount":
            return "Скакун";
        case "vehicle_land":
            return "Наземний транспорт";
        case "vehicle_water":
            return "Водний транспорт";
        case "gear":
            return "Спорядження";
        case "trade":
            return "Торгові товари";
        case "tack":
            return "Сідельне спорядження";
        case "vehicle":
            return "Транспорт";
    }
    return name;
}

export const getNormalizePropName = (name: string): string => {
    switch (name) {
        case "damage":
            return "Шкода";
        case "ac":
            return "Клас захисту";
        case "dexBonus":
            return "Додати модифікатор Спритності";
        case "dexBonusMax":
            return "Максимальний бонус Спритності";
        case "strengthReq":
            return "Необхідна Сила";
        case "stealthDisadvantage":
            return "Перешкода на Скрадання";
        case "damageType":
            return "Тип шкоди";
        case "properties":
            return "Особливість";
        case "martial_ranged_weapon":
            return "Військова далекобійна зброя";
        case "quantity":
            return "Кількість";
        case "contents":
            return "Містить у собі";
        case "gear":
            return "Спорядження";
        case "speed":
            return "Швидкість";
        case "carryingCapacity":
            return "Вантажопідйомність";
    }
    return name;
}

export const getNormalizeValueName = (name: string): string => {
    switch (name) {
        case "true":
            return "Так";
        case "false":
            return "Ні";
        case "null":
            return "Відсутнє";
    }
    return name;
}

export default function EquipmentCategoryClient({ id }: { id: string }) {
    const { data, isLoading, isError } = useGetEquipmentByCategoryQuery(id);

    if (isLoading)return <div className="relative text-center w-full h-full flex items-center justify-center"><p className="mx-auto my-0 w-full h-full">Завантаження...</p></div>;
    if (isError || !data)return <div className="relative text-center w-full h-full flex items-center justify-center"><p className="mx-auto my-0 w-full h-full">Помилка!</p></div>;

    const grouped = new Map<string, typeof data>();
    data.forEach((item) => {
        const group = item.type; // например simple_weapon, martial_weapon, ranged_weapon
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
                                <strong>{item.name}</strong> — {item.cost}
                                <span> | вага: {item.weight}</span>
                                {item.properties && (
                                    <div className="flex flex-col gap-1 mt-1 text-sm text-(--foreground)">
                                        {Object.entries(item.properties).map(([key, value]) => (
                                            <p key={key}>
                                                <strong>{getNormalizePropName(key)}:</strong> {getNormalizeValueName(String(value))}
                                            </p>
                                        ))}
                                    </div>
                                )}
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
