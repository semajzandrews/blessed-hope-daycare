import type { Metadata } from "next";
import { Fraunces, Nunito, Caveat } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Blessed Hope Daycare Center — Where small hands learn big things",
  description:
    "A licensed childcare home on Joyce Street in Orange, NJ, caring for infants, toddlers, and preschoolers. Warm, attentive, and patient. Call (973) 678-0098 to tour.",
  openGraph: {
    title: "Blessed Hope Daycare Center · Orange, NJ",
    description:
      "Where small hands learn big things. Licensed home daycare in Orange, NJ. Infants, toddlers, preschool.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable} antialiased`}
    >
      <body className="bg-milk text-cocoa min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
