import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://decornest.example.com"),
  title: {
    default: "DecorNest — A Quiet Place for Home Decor",
    template: "%s — DecorNest",
  },
  description:
    "DecorNest is a home decor and interior design journal covering rooms, color, organization, and the small objects that make a house feel considered.",
  openGraph: {
    title: "DecorNest — A Quiet Place for Home Decor",
    description:
      "Interior design, organization, and product edits for people who like their homes unhurried.",
    siteName: "DecorNest",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-cream text-charcoal antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
