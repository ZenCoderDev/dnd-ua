import Link from "next/link";

export default function Header() {
    const navItems = [
        {
            label: "Гравцю", href: "/classes", subLabels: [{
                name: "Класи", href: "/classes"
            }, {
                name: "Раси", href: "/races"
            }, {
                name: "Походження", href: "/backgrounds"
            }]
        },
        { label: "Майстру", href: "/races", subLabels: [] },
        { label: "Довідка", href: "/equipment", subLabels: [{ name: "Закляття", href: "/spells" }] },
    ];

    return (
        <div className="flex items-center w-full max-w-[75%] left-0 right-0  animate-fade-down animate-duration-1000 drop-shadow-[0_2px_4px_var(--foreground)] border-[#4262C5] mx-auto top-4 z-16 max-h-15 fixed justify-between bg-gradient-to-r from-[#362999] to-[#4262C5] text-white font-bold text-xl">
            <div className="w-16 h-full flex items-center justify-center ">
                {/* Левая SVG-лента */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 100" className="z-8 h-full w-15 relative rotate-90">
                    <defs>
                        <linearGradient x1="50%" y1="92.034%" x2="50%" y2="7.2%" id="a">
                            <stop offset="0%" stopColor="#4262C5" />
                            <stop offset="35%" stopColor="#44AEC2" />
                            <stop offset="65%" stopColor="#93EFED" />
                            <stop offset="100%" stopColor="#372f9d" />
                        </linearGradient>
                    </defs>
                    <path d="M0 0L30 0L30 100L15 85L0 100z" fill="url(#a)" strokeWidth="2" />
                </svg>
            </div>

            <div className="flex-1 flex flex-row justify-center gap-8 text-center">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer top-0.5 flex flex-col"
                    >
                        {/* Задний размытый текст */}
                        <span
                            className="absolute top-0  uppercase text-[#93EFED] opacity-0 group-hover:opacity-40 blur-xs  scale-90  transition duration-300"
                            aria-hidden="true"
                        >
                            {item.label}
                        </span>
                        <div
                            className="absolute right-0 shadow-2xl mt-2 top-6 w-fit  bg-[#362999]  text-white rounded-md  origin-top scale-y-0 group-hover:scale-y-100  transition-transform duration-300  opacity-0 group-hover:opacity-100 invisible group-hover:visible  z-20"
                        >
                            <ul className="flex flex-col p-4 space-y-2">
                                {item.subLabels.map((mapLink, mapIndex) => (
                                    <li
                                        key={mapIndex}
                                        className="hover:text-[#44AEC2]"
                                    >
                                        <Link
                                            href={mapLink.href}
                                            className="transition duration-300"
                                        >
                                            {mapLink.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* Основной текст */}
                        <span className="uppercase relative z-10 text-(--background)">{item.label}</span>

                        {/* Линия под текстом */}
                        <div className="h-0.5 w-full bg-[#93EFED] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                    </div>
                ))}
            </div>

            <div className="w-16 h-full flex items-center justify-center">
                {/* Правая SVG-лента */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 100" className="z-8 h-full w-15 relative rotate-270">
                    <defs>
                        <linearGradient x1="50%" y1="92.034%" x2="50%" y2="7.2%" id="b">
                            <stop offset="0%" stopColor="#362999" />
                            <stop offset="35%" stopColor="#44AEC2" />
                            <stop offset="65%" stopColor="#93EFED" />
                            <stop offset="100%" stopColor="#415cc0" />
                        </linearGradient>
                    </defs>
                    <path d="M0 0L30 0L30 100L15 85L0 100z" fill="url(#b)" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
}