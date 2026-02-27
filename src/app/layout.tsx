import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linus Michael",
  description: "Cabinet maker. AI builder. Building in public.",
  metadataBase: new URL("https://linusmichael.com"),
  openGraph: {
    title: "Linus Michael",
    description: "Cabinet maker. AI builder. Building in public.",
    url: "https://linusmichael.com",
    siteName: "Linus Michael",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linus Michael",
    description: "Cabinet maker. AI builder. Building in public.",
    creator: "@linumis",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
