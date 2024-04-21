import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { GlobalStyle } from "@/styles/App.styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TriomegaB Hearts of Passion",
  description:
    "A charity organization aimed at mentoring, inspiring and building youths through providing better health and lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyle/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
