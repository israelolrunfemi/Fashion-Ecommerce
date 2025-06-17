"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Grid, List, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ShopContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Products", count: 1247 },
    { id: "women", name: "Women", count: 856 },
    { id: "men", name: "Men", count: 234 },
    { id: "accessories", name: "Accessories", count: 157 },
    { id: "new", name: "New Arrivals", count: 89 },
    { id: "sale", name: "Sale", count: 123 },
  ]

  const products = [
    {
      id: 1,
      name: "Elegant Silk Evening Dress",
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=400&width=300",
      category: "women",
      isNew: false,
      colors: ["#8B6F47", "#D4A5A5", "#000000"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Premium Cashmere Coat",
      price: 459,
      originalPrice: 599,
      discount: 23,
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg?height=400&width=300",
      category: "women",
      isNew: true,
      colors: ["#8B6F47", "#000000", "#FFFFFF"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 3,
      name: "Designer Leather Handbag",
      price: 189,
      originalPrice: 249,
      discount: 24,
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=400&width=300",
      category: "accessories",
      isNew: false,
      colors: ["#8B6F47", "#D4A5A5"],
      sizes: ["One Size"],
    },
    {
      id: 4,
      name: "Tailored Business Blazer",
      price: 329,
      originalPrice: 429,
      discount: 23,
      rating: 4.8,
      reviews: 92,
      image: "/placeholder.svg?height=400&width=300",
      category: "women",
      isNew: true,
      colors: ["#000000", "#8B6F47", "#FFFFFF"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 5,
      name: "Classic Men's Suit",
      price: 599,
      originalPrice: 799,
      discount: 25,
      rating: 4.9,
      reviews: 67,
      image: "/placeholder.svg?height=400&width=300",
      category: "men",
      isNew: false,
      colors: ["#000000", "#8B6F47"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 6,
      name: "Luxury Watch Collection",
      price: 899,
      originalPrice: 1199,
      discount: 25,
      rating: 4.8,
      reviews: 43,
      image: "/placeholder.svg?height=400&width=300",
      category: "accessories",
      isNew: true,
      colors: ["#D4AF37", "#8B6F47"],
      sizes: ["One Size"],
    },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-off-white)] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-[var(--color-mocha)] mb-6">
            Premium Fashion Collection
          </h1>
          <p className="text-xl text-[var(--color-warm-gray)] max-w-2xl mx-auto">
            Discover our carefully curated selection of premium clothing and accessories, designed for the modern
            fashion enthusiast.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-[var(--color-mocha)] mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? "bg-[var(--color-mocha)] text-white"
                        : "hover:bg-[var(--color-beige)]/50 text-[var(--color-warm-gray)]"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-[var(--color-mocha)] mb-4">Price Range</h3>
              <div className="space-y-2">
                {["Under $100", "$100 - $300", "$300 - $500", "$500 - $1000", "Over $1000"].map((range) => (
                  <label key={range} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-[var(--color-warm-gray)]">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-[var(--color-mocha)] mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-200 rounded-lg py-2 text-sm hover:border-[var(--color-mocha)] hover:text-[var(--color-mocha)] transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-[var(--color-warm-gray)]">
                  Showing {filteredProducts.length} of {products.length} products
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border border-gray-200 rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-[var(--color-beige)]" : ""}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-[var(--color-beige)]" : ""}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-8 ${
                viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-lg card-hover ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <div className={`relative ${viewMode === "list" ? "w-64 flex-shrink-0" : ""}`}>
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "h-64" : "h-80"}`}>
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
                  </div>

                  <div className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                    <div>
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
                          <span className="text-sm text-[var(--color-warm-gray)] line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Color Options */}
                      <div className="flex items-center gap-2 mb-4">
                        {product.colors.map((color, index) => (
                          <button
                            key={index}
                            className="w-6 h-6 rounded-full border-2 border-gray-200 hover:border-[var(--color-mocha)] transition-colors"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-[var(--color-mocha)] text-white hover:bg-[var(--color-mocha)]/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button className="btn-secondary text-lg px-8 py-4">Load More Products</Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
