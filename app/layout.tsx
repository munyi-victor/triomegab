import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
      <body className="relative h-full">
        <Navbar />
        {children}
        <ScrollToTopButton/>
        <Footer />
      </body>
    </html>
  );
}
