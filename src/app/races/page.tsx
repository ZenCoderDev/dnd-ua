"use client";

import { useGetRacesQuery } from "@/store/api/apiSlice";
import ListCard from "../components/ListCard";

export default function Home() {
    const { data: races } = useGetRacesQuery();

    return (
        <div className="md:max-w-[90%] mt-12 md:mt-0 relative grid gap-6 px-2 py-4 md:p-6
                grid-cols-[repeat(auto-fit,minmax(340px,1fr))] mx-auto overflow-y-hidden">
            {races?.map((race, index) => (
                <ListCard
                    key={index}
                    id={race.id}
                    name={race.name}
                    description={race.description}
                    image={race.image}
                    index={index}
                    href="races" />
            ))}
        </div>
    );
}
