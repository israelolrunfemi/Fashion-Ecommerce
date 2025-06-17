import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LessonsContent from "./lessons-content"

export const metadata: Metadata = {
  title: "Fashion Design Lessons - Learn from Award-Winning Designer | Élégance Atelier",
  description:
    "Master fashion design with our comprehensive courses. Learn sketching, pattern making, fabric selection from 15+ years of industry experience.",
}

export default function LessonsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <LessonsContent />
      <Footer />
    </main>
  )
}
