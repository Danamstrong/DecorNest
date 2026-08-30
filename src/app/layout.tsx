import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DecorNest — A Quiet Place for Home Decor",
    template: "%s — DecorNest",
  },
  description:
    "DecorNest is a home decor and interior design journal covering rooms, color, organization, and the small objects that make a house feel considered.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DecorNest — A Quiet Place for Home Decor",
    description:
      "Interior design, organization, and product edits for people who like their homes unhurried.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    // Token only — Next renders the <meta name="google-site-verification"> tag.
    google: "CLftxND8VPrU0nqWW_IAlG17WbpOj-L-7GyFIfwQrBs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-cream text-charcoal antialiased">
        {/* HBAgency (Header Bidding Agency) prebid wrapper — account 43279.
            afterInteractive: Next injects this into <head> once the page is
            interactive. */}
        <Script
          src="https://d3u598arehftfk.cloudfront.net/prebid_hb_6127_43279.js"
          strategy="afterInteractive"
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_ID || "G-YMFQ68M6JK"}
        />
      </body>
    </html>
  );
}
