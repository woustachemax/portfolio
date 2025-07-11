import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import SpaceBackground from "./components/SpaceBackground"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Siddharth Thakkar",
  description: "Software Developer | MERN Stack | 3D Web Development",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <SpaceBackground>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </SpaceBackground>
      </body>
    </html>
  )
}
