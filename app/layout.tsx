import "./globals.css"
import { Inter } from "next/font/google"
import Cursor from "./components/Cursor"
import Header from "./components/Header"
import SpaceBackground from "./components/SpaceBackground"
import { ThemeProvider } from "./components/ThemeProvider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://siddharththakkar.xyz"),
  title: {
    default: "Siddharth Thakkar",
    template: "%s | Siddharth Thakkar",
  },
  description:
    "Hi, I'm Siddharth, I love building.",
  keywords: [
    "Siddharth Thakkar",
    "Sid Thakkar",
    "Siddharth Thakkar Portfolio",
    "Sid Thakkar Portfolio",
    "Siddharth Thakkar Developer",
    "Sid Thakkar Developer",
    "Siddharth Thakkar Software Engineer",
    "Sid Thakkar Software Engineer",
    "Siddharth Thakkar Full Stack",
    "Sid Thakkar Full Stack",
  ],
  authors: [{ name: "Siddharth Thakkar", url: "https://siddharththakkar.xyz" }],
  creator: "Siddharth Thakkar",
  publisher: "Siddharth Thakkar",
  alternates: {
    canonical: "https://siddharththakkar.xyz",
  },
  icons: {
    icon: [
      { url: "/faicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Siddharth Thakkar",
    description:
      "Hi, I'm Siddharth, I love building.",
    url: "https://siddharththakkar.xyz",
    siteName: "Siddharth Thakkar",
    images: [
      {
        url: "https://siddharththakkar.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Siddharth Thakkar",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Siddharth Thakkar",
    description:
      "Hi, I'm Siddharth, I love building.",
    creator: "@woustachemax7",
    images: ["https://siddharththakkar.xyz/og-image.png"],
  },

  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-stone-900 dark:bg-black dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Cursor />
          <SpaceBackground>
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </SpaceBackground>
        </ThemeProvider>
      </body>
    </html>
  )
}
