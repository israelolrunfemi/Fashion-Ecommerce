import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Award } from "lucide-react"

export default function LessonsCTA() {
  const stats = [
    { icon: Users, value: "500+", label: "Students Taught" },
    { icon: Clock, value: "50+", label: "Hours of Content" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-mocha)] to-[var(--color-mocha)]/80 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge className="bg-[var(--color-gold)] text-[var(--color-mocha)] px-4 py-2 rounded-full w-fit">
              🎨 Master Fashion Design
            </Badge>

            <div className="space-y-6">
              <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
                Learn Fashion Design from an <span className="text-[var(--color-gold)]">Award-Winning</span> Designer
              </h2>

              <p className="text-xl text-white/90 leading-relaxed">
                Transform your passion into profession with our comprehensive fashion design courses. Learn sketching,
                pattern making, fabric selection, and industry secrets from 15+ years of experience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-[var(--color-gold)]" />
                  </div>
                  <div className="font-display text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/lessons">
                <Button className="bg-[var(--color-gold)] text-[var(--color-mocha)] hover:bg-[var(--color-gold)]/90 text-lg px-8 py-4">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/lessons#free-trial">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--color-mocha)] text-lg px-8 py-4"
                >
                  Free Trial Lesson
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Fashion Design Lesson"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-[var(--color-gold)]" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-mocha)]">Next Batch</div>
                  <div className="text-sm text-[var(--color-warm-gray)]">Starting March 15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
