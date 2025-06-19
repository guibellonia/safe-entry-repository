import type { Metadata } from "next";
import { DM_Sans, Figtree } from "next/font/google";
import "./global.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Four Coding",
  description: "Construindo as soluções para seus maiores problemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link
        rel="icon"
        href="/images/four-coding-logo.svg"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={`${dmSans.variable} ${figtree.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
