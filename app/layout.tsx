import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shadojus - Digital Creator & Developer",
  description: "Digital Creator & Developer aus Deutschland. Moderne Weblösungen mit Next.js und innovative Content Creation.",
  keywords: ["Shadojus", "Digital Creator", "Developer", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Shadojus", url: "https://instagram.com/shadojus" }],
  creator: "Shadojus",
  openGraph: {
    title: "Shadojus - Digital Creator & Developer",
    description: "Digital Creator & Developer aus Deutschland",
    url: "https://shadojus.vercel.app",
    siteName: "Shadojus",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
