import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://triomegab.vercel.app"),
  title: {
    default:"TriomegaB Hearts of Passion Foundation",
    template:`%s | TriomegaB Hearts of Passion Foundation`
  },
  description:
    "A charity organization aimed at mentoring, inspiring and building youths through providing better health, education and general lifestyle",
  keywords:["charity foundation kenya", "NGO kenya", "non-profit organization kenya", "Kenyan charity","Kenyan NGO","best charity in kenya", "top NGOs in kenya", "how to donate to charity in kenya", "kenyan charity organizations","volunteer opportunities in kenya"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Analytics />
          <Navbar />
          {children}
          <ScrollToTopButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
