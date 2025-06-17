import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function CategoriesSection() {
  const categories = [
    {
      title: "Women's Collection",
      subtitle: "2500+ Items",
      description: "Elegant dresses, chic blouses, sophisticated outerwear, and timeless pieces.",
      image: "/images/fashion-inspiration.png",
      href: "/shop?category=women",
      items: ["Dresses", "Blouses", "Jackets & Coats", "Jeans", "Knitwear"],
    },
    {
      title: "Men's Collection",
      subtitle: "1500+ Items",
      description: "Classic suits, casual wear, premium accessories for the modern gentleman.",
      image: "/images/minimal-fashion.png",
      href: "/shop?category=men",
      items: ["Suits", "T-Shirts & Shirts", "Jackets & Coats", "Jeans", "Accessories"],
    },
    {
      title: "Accessories",
      subtitle: "800+ Items",
      description: "Handbags, jewelry, scarves, and statement pieces to complete your look.",
      image: "/placeholder.svg?height=400&width=300",
      href: "/shop?category=accessories",
      items: ["Handbags", "Watches", "Sunglasses", "Jewelry", "Scarves"],
    },
  ]

  return (
    <section className="py-20 bg-[var(--color-beige)]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--color-mocha)] mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
            Discover our carefully curated collections designed for every occasion and style preference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg card-hover">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">{category.subtitle}</div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-[var(--color-mocha)] mb-3">{category.title}</h3>
                <p className="text-[var(--color-warm-gray)] mb-6">{category.description}</p>

                <div className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-[var(--color-warm-gray)]">
                      • {item}
                    </div>
                  ))}
                </div>

                <Link
                  href={category.href}
                  className="inline-flex items-center text-[var(--color-mocha)] font-semibold hover:text-[var(--color-gold)] transition-colors duration-200"
                >
                  Explore Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
