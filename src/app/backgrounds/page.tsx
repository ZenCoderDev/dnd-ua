"use client";

import { useGetBackgroundsQuery } from "@/store/api/apiBackgrounds";

export default function Home() {
    const { data: backgrounds } = useGetBackgroundsQuery();

    return (
        <div className=" max-w-[90%] relative mx-auto grid grid-cols-3 gap-6 p-6">
            {backgrounds?.map((background, index) => (
                <div
                    key={index}
                    className={`animate-fade-up border border-(--border) animate-duration-1000 flex flex-col gap-4 group p-4 relative overflow-hidden bg-(--card-background) rounded-2xl shadow-xl transition-transform duration-300`}
                    style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute bottom-1/2 right-1/2 w-[200%] h-[200%]
                                bg-gradient-to-tl from-white/40 to-transparent
                                opacity-0 group-hover:opacity-70
                                transform translate-x-1/3 translate-y-1/3 rotate-45
                                group-hover:translate-x-0 group-hover:translate-y-0
                                transition-all duration-700 ease-out
                                blur-xl"
                        />
                    </div>
                    <h2 className="text-xl font-bold mt-2">{background.name}</h2>
                    <div>
                        {background.skills.map((skill, index) => (
                            <div key={index}>
                                {skill}
                            </div>
                        ))}
                    </div>


                    {background.languages > 0 && (
                        <h2 className="text-base text-(--text-second) opacity-80">Можеш взяти кількість мов на вибір: <b>{background.languages}</b></h2>
                    )}
                    <div className="">
                        <h2 className="text-base text-(--text-second) opacity-80">Початкове спорядження : </h2>
                        {background.equipment.map((equipment, index) => (
                            <div key={index}>
                                {equipment}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-(--text-second) opacity-80">{background.description}</p>
                    {background.features.map((feature, featureIndex) => (
                        <div key={featureIndex}>
                            <h2 className="text-xl font-bold mt-2">{feature.name}</h2>
                            <h2 className="text-base text-(--text-second) opacity-80">{feature.description}</h2>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
