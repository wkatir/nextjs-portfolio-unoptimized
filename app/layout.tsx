import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning className={inter.className}>
     
     <head>
     <link rel="icon" href="https://res.cloudinary.com/drycov6o6/image/upload/v1735079346/wilmer-portafolio/so0zko3ilzmzuv8dvrho.ico" sizes="any" />
     </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
