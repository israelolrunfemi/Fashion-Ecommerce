import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ShopContent from "./shop-content"

export const metadata: Metadata = {
  title: "Shop - Premium Fashion Collections | Élégance Atelier",
  description:
    "Discover our premium fashion collections. Shop women's clothing, men's fashion, and accessories from award-winning designer.",
}

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ShopContent />
      <Footer />
    </main>
  )
}
