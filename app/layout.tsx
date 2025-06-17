import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Élégance Atelier - Premium Fashion & Design Lessons",
  description:
    "Discover premium fashion collections and learn from award-winning designer. Shop exclusive clothing, accessories, and join our fashion design masterclasses.",
  keywords: "fashion, designer clothing, fashion lessons, women's fashion, accessories, premium fashion",
  authors: [{ name: "Élégance Atelier" }],
  openGraph: {
    title: "Élégance Atelier - Premium Fashion & Design Lessons",
    description: "Discover premium fashion collections and learn from award-winning designer.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
          {children}
        
      </body>
    </html>
  )
}
