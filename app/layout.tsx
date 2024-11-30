import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Wilmer's Portfolio",
  description: "Modern & Minimalist Wilmer's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
