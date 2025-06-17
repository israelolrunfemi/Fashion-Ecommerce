import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesBar from "@/components/features-bar"
import CategoriesSection from "@/components/categories-section"
import TopProducts from "@/components/top-products"
import LessonsCTA from "@/components/lessons-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesBar />
      <CategoriesSection />
      <TopProducts />
      <LessonsCTA />
      <Footer />
    </main>
  )
}
