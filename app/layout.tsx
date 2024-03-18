import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageTransitionLayout from "@/layouts/PageTransitionLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "viShoots",
  description: "Professional Photography for hire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <PageTransitionLayout>{children}</PageTransitionLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
