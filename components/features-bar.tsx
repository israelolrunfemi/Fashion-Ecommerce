import { Truck, CreditCard, Headphones, Shield } from "lucide-react"

export default function FeaturesBar() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders above $150",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Multiple secure payment options",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "We support online 24 hours",
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "100% secure payment guarantee",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-6 rounded-2xl hover:bg-[var(--color-beige)]/30 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-[var(--color-mocha)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-mocha)] mb-1">{feature.title}</h3>
                <p className="text-sm text-[var(--color-warm-gray)]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
