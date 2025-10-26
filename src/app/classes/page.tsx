"use client";

import { useGetClassesQuery } from "@/store/api/apiClasses";
import ListCard from "../components/ListCard";

export default function Home() {
    const { data: classes, isLoading, error } = useGetClassesQuery();

    if (isLoading) return <div className="relative text-center w-full h-full flex items-center justify-center"><p className="mx-auto my-0 w-full h-full">Завантаження...</p></div>;
    if (error) return <div className="relative text-center w-full h-full flex items-center justify-center"><p className="mx-auto my-0 w-full h-full">Помилка завантаження</p></div>;

    return (
        <div className="md:max-w-[90%] mt-12 md:mt-0 relative grid gap-6 px-2 py-4 md:p-6
                grid-cols-[repeat(auto-fit,minmax(340px,1fr))] mx-auto overflow-y-hidden">
            {classes?.map((classes, index) => (
                <ListCard
                    key={index}
                    id={classes.id}
                    name={classes.name}
                    description={classes.description}
                    image={classes.image}
                    index={index}
                    href="classes" />
            ))}
        </div>
    );
}
