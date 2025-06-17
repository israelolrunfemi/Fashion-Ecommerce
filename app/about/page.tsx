import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutContent from "./about-content"

export const metadata: Metadata = {
  title: "About the Designer - Award-Winning Fashion Expert | Élégance Atelier",
  description:
    "Meet our award-winning fashion designer with 15+ years of industry experience. Learn about our mission, awards, and commitment to fashion excellence.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutContent />
      <Footer />
    </main>
  )
}
