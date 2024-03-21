import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Palanquin_Dark } from 'next/font/google'

const palanquinDark = Palanquin_Dark({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Traceable Chain",
  description: "Traceable Chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={palanquinDark.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
