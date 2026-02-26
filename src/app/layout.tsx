import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linus Michael",
  description:
    "Cabinetmaker. Builder. Teaching tradesmen to scale with AI.",
  metadataBase: new URL("https://linusmichael.com"),
  openGraph: {
    title: "Linus Michael",
    description:
      "Cabinetmaker. Builder. Teaching tradesmen to scale with AI.",
    url: "https://linusmichael.com",
    siteName: "Linus Michael",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linus Michael",
    description:
      "Cabinetmaker. Builder. Teaching tradesmen to scale with AI.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-parchment text-ink">
        {children}
      </body>
    </html>
  );
}
