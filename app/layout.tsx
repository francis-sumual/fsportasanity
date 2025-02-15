// export const dynamic = "force-dynamic";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import type React from "react"; // Added import for React
import { FloatingNavbar } from "@/components/floating-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanity Blog",
  description: "A blog built with Next.js and Sanity.io",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FloatingNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
