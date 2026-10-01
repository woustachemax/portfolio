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
    default: "Siddharth Thakkar (woustachemax)",
    template: "%s | Siddharth Thakkar",
  },
  description:
    "Siddharth Thakkar, aka woustachemax, is a software engineer who builds open-source tools, AI projects, and full-stack apps. Explore his projects, resume, and writing.",
  keywords: [
    "Siddharth Thakkar",
    "Sid Thakkar",
    "woustachemax",
    "woustachemax7",
    "Siddharth Thakkar Portfolio",
    "Sid Thakkar Portfolio",
    "Siddharth Thakkar Developer",
    "Sid Thakkar Developer",
    "Siddharth Thakkar Software Engineer",
    "Sid Thakkar Software Engineer",
    "Siddharth Thakkar Full Stack",
    "Sid Thakkar Full Stack",
    "woustachemax GitHub",
    "woustachemax portfolio",
  ],
  authors: [{ name: "Siddharth Thakkar", url: "https://siddharththakkar.xyz" }],
  creator: "Siddharth Thakkar",
  publisher: "Siddharth Thakkar",
  alternates: {
    canonical: "https://siddharththakkar.xyz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    title: "Siddharth Thakkar (woustachemax)",
    description:
      "Siddharth Thakkar, aka woustachemax, is a software engineer who builds open-source tools, AI projects, and full-stack apps.",
    url: "https://siddharththakkar.xyz",
    siteName: "Siddharth Thakkar",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Siddharth Thakkar (woustachemax)",
    description:
      "Siddharth Thakkar, aka woustachemax, is a software engineer who builds open-source tools, AI projects, and full-stack apps.",
    creator: "@woustachemax7",
  },

  category: "technology",
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Siddharth Thakkar",
  alternateName: "woustachemax",
  url: "https://siddharththakkar.xyz",
  image: "https://siddharththakkar.xyz/opengraph-image",
  jobTitle: "Software Engineer",
  description:
    "Siddharth Thakkar, aka woustachemax, is a software engineer who builds open-source tools, AI projects, and full-stack apps.",
  sameAs: [
    "https://github.com/woustachemax",
    "https://www.linkedin.com/in/sidthakkar/",
    "https://x.com/woustachemax7",
    "https://blog.siddharththakkar.xyz/",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
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
