import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/Providers";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Script from "next/script";
import HeaderWithMobileMenu from "./components/HeaderWithMobileMenu";

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Table Dices",
  description: "Український сайт про Dungeons & Dragons — правила, класи, заклинання, предмети та інші матеріали для гри",
  metadataBase: new URL("https://tbdices.com/"),
  openGraph: {
    title: "Table Dices",
    description: "Український сайт про Dungeons & Dragons — правила, класи, заклинання, предмети та інші матеріали для гри",
    url: "https://tbdices.com/",
    siteName: "Table Dices",
    images: [
      {
        url: "/main-img.png",
        width: 1200,
        height: 630,
        alt: "Table Dices Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Table Dices",
    description: "Український сайт про Dungeons & Dragons — правила, класи, заклинання, предмети та інші матеріали для гри",
    images: ["/main-img.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon-512x512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Table Dices</title>
        <meta name="description" content="Український сайт про Dungeons & Dragons — правила, класи, заклинання, предмети та інші матеріали для гри" />
        <meta property="og:title" content="Table Dices" />
        <meta property="og:description" content="Український сайт про Dungeons & Dragons — правила, класи, заклинання, предмети та інші матеріали для гри!" />
        <meta property="og:image" content="https://tbdices.com/main-img.png" />
        <meta property="og:url" content="https://tbdices.com" />
        <meta name="twitter:card" content="main-img.png" />
      </head>
      <body
        className={`${montserrat.className} relative min-h-screen flex flex-col antialiased`}
      >
        <HeaderWithMobileMenu />
        <Sidebar />
        <main className="flex-1">
          <ReduxProvider>{children}</ReduxProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
