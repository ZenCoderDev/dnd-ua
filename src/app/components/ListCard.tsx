"use client";

import Image from "next/image";
import Link from "next/link";

interface ListCardProps {
    id: string;
    name: string;
    description: string;
    image: string;
    index?: number;
    href: string;
}

export default function ListCard({ id, name, description, image, index = 0, href }: ListCardProps) {
    return (<Link
        key={id}
        href={`/${href}/${id}`}
        className={`group list-card`}
        style={{ animationDelay: `${index * 100}ms` }}>
        <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="list-card-img"
        />
        <div className="list-card-blur-body">
            <div className="list-card-blur "
            />
        </div>
        <h2 className="text-xl font-bold mt-2">{name}</h2>
        <p className="text-sm text-(--text-second) opacity-80">{description}</p>
    </Link>
    )
}