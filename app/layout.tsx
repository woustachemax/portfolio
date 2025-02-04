import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import SpaceBackground from "./components/SpaceBackground";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siddharth Thakkar",
  description: "Software Developer | MERN Stack | 3D Web Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" />
        
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
        
        
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <link rel="manifest" href="/site.webmanifest" />
        
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <SpaceBackground>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </SpaceBackground>
      </body>
    </html>
  );
}
