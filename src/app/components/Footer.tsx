export default function Footer() {
    return (
        <footer className="bg-(--card-background) z-8 text-(--text) py-6 border-t border-(--border) bottom-0">
            <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm">

                {/* Ліва частина */}
                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase text-3xl">Table Dices</p>
                    <p>Фанатський ресурс для гравців та майстрів D&D.</p>
                </div>

                {/* Середина */}
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Контакти</p>
                    <a href="mailto:dicestable@gmail.com" className="hover:underline">
                        dicestable@gmail.com
                    </a>
                </div>

                {/* Права */}
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Дисклеймер</p>
                    <p className="text-xs text-(--text-second)">
                        Матеріали використані лише з ознайомчою метою. <br />
                        Усі права на Dungeons & Dragons належать Wizards of the Coast.
                    </p>
                    <p className="text-xs mt-2">Версія сайту: v0.9.0</p>
                </div>
            </div>
        </footer>
    );
}
