import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "TriomegaB Hearts of Passion Foundation",
  description:
    "A charity organization aimed at mentoring, inspiring and building youths through providing better health, education and general lifestyle",
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
