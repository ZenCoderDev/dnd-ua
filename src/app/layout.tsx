import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/Providers";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'], // чтобы поддерживалась кириллица
  weight: ['400', '500', '600', '700'], // нужные толщины
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Table Dices",
  description: "Український сайт про Dungeons & Dragons — правила, класи, заклинання, предмети та інші матеріали для гри",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} relative min-h-screen flex flex-col antialiased`}
      >
        <Sidebar />
        <main className="flex-1">
          <ReduxProvider>{children}</ReduxProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
