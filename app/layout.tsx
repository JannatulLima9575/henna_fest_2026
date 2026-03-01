import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Noor-E-Eid Henna Fest 2026 | Red Beauty Salon",
  description:
    "Join Noor-E-Eid Henna Fest 2026 at Red Beauty Salon, Barudkhana. Enjoy premium Indian & Pakistani mehendi designs, organic henna, Eid-themed decoration, and a magical festive vibe this Ramadan.",
  keywords: [
    "Henna Fest 2026",
    "Eid Mehendi Event",
    "Noor-E-Eid",
    "Red Beauty Salon",
    "Ramadan Event",
    "Sylhet Henna Festival"
  ],
  openGraph: {
    title: "Noor-E-Eid Henna Fest 2026",
    description:
      "Celebrate Eid with beautiful mehendi, festive decor & magical vibes.",
    type: "website",
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
        className={`${playfair.variable} ${poppins.variable} bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50 text-stone-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}