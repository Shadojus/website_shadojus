import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Shadojus - Developer & Digital Creator",
    template: "%s | Shadojus"
  },
  description: "Welcome to Shadojus.com - Your go-to developer for modern web solutions, digital content creation, and innovative services. Let's build something amazing together!",
  keywords: ["web development", "digital creator", "services", "portfolio", "shadojus"],
  authors: [{ name: "Shadojus" }],
  creator: "Shadojus",
  metadataBase: new URL("https://shadojus.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shadojus.com",
    title: "Shadojus - Developer & Digital Creator",
    description: "Welcome to Shadojus.com - Your go-to developer for modern web solutions, digital content creation, and innovative services.",
    siteName: "Shadojus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadojus - Developer & Digital Creator",
    description: "Welcome to Shadojus.com - Your go-to developer for modern web solutions, digital content creation, and innovative services.",
    creator: "@shadojus",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased min-h-screen flex flex-col"
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
