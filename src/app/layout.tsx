import "./globals.css";
import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Wedding Company – Quiz",
  description: "Frontend assignment: Test Your Knowledge quiz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
