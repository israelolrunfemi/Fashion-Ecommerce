import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactContent from "./contact-content"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Élégance Atelier",
  description:
    "Contact our fashion design team. Get support, ask questions about our courses, or inquire about custom designs. We're here to help.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactContent />
      <Footer />
    </main>
  )
}
