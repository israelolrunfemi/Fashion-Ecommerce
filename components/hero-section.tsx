import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[var(--color-off-white)] to-[var(--color-beige)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge className="bg-[var(--color-dusty-rose)] text-white px-4 py-2 rounded-full">
              ✨ 40% OFF Summer Collection
            </Badge>

            <div className="space-y-4">
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
                Step into <span className="gradient-text">Style</span>
              </h1>
              <p className="text-xl text-[var(--color-warm-gray)] max-w-lg">
                Discover premium fashion collections and learn from an award-winning designer. Elevate your wardrobe and
                master the art of fashion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button className="btn-primary text-lg px-8 py-4">Shop Collection</Button>
              </Link>
              <Link href="/lessons">
                <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                  Design Lessons
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/hero-bg.png" alt="Fashion Model" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-[var(--color-gold)] text-white p-4 rounded-full shadow-lg">
              <span className="font-bold text-sm">NEW</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-[var(--color-mocha)]">500+</div>
                <div className="text-sm text-[var(--color-warm-gray)]">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
