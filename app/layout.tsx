import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";

import { Inter as FontSans, Bitter as FontSerif } from "next/font/google";

import "./globals.css";
import Footer from "@/components/footer";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import { ToasterProvider } from "@/providers/toast-provider";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "viShoots",
  description: "Your best photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-67HH2Z5DSS"
        ></Script>
        <Script id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-67HH2Z5DSS');
  `}
        </Script>
        <body>
          <ToasterProvider />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <Container>{children}</Container>
            <Footer />
          </ThemeProvider>
        </body>
      </head>
    </html>
  );
}
