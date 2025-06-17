import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function TopProducts() {
  const products = [
    {
      id: 1,
      name: "Elegant Silk Dress",
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=400&width=300",
      isNew: false,
      colors: ["#8B6F47", "#D4A5A5", "#000000"],
    },
    {
      id: 2,
      name: "Cashmere Blend Coat",
      price: 459,
      originalPrice: 599,
      discount: 23,
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg?height=400&width=300",
      isNew: true,
      colors: ["#8B6F47", "#000000", "#FFFFFF"],
    },
    {
      id: 3,
      name: "Designer Handbag",
      price: 189,
      originalPrice: 249,
      discount: 24,
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=400&width=300",
      isNew: false,
      colors: ["#8B6F47", "#D4A5A5"],
    },
    {
      id: 4,
      name: "Premium Blazer",
      price: 329,
      originalPrice: 429,
      discount: 23,
      rating: 4.8,
      reviews: 92,
      image: "/placeholder.svg?height=400&width=300",
      isNew: true,
      colors: ["#000000", "#8B6F47", "#FFFFFF"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--color-mocha)] mb-4">
            Our Top Seller Products
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
            Discover our most loved pieces, carefully selected by our customers and fashion experts.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[var(--color-beige)]/50 rounded-full p-1">
            {["All", "Women", "Men", "Accessories"].map((tab, index) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  index === 0
                    ? "bg-[var(--color-mocha)] text-white shadow-md"
                    : "text-[var(--color-mocha)] hover:bg-white/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg card-hover">
              <div className="relative">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.discount > 0 && (
                    <Badge className="bg-[var(--color-dusty-rose)] text-white">-{product.discount}%</Badge>
                  )}
                  {product.isNew && <Badge className="bg-[var(--color-gold)] text-white">NEW</Badge>}
                </div>

                {/* Wishlist */}
                <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
                  <Heart className="w-4 h-4" />
                </Button>

                {/* Quick Actions */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-white/90 text-[var(--color-mocha)] hover:bg-white">Quick View</Button>
                    <Button className="flex-1 bg-[var(--color-mocha)] text-white hover:bg-[var(--color-mocha)]/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-[var(--color-warm-gray)]">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-[var(--color-mocha)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                  <Link href={`/product/${product.id}`}>{product.name}</Link>
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-lg text-[var(--color-mocha)]">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-[var(--color-warm-gray)] line-through">${product.originalPrice}</span>
                  )}
                </div>

                {/* Color Options */}
                <div className="flex items-center gap-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-gray-200 hover:border-[var(--color-mocha)] transition-colors"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop">
            <Button className="btn-primary text-lg px-8 py-4">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
