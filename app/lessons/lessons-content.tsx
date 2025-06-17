import Image from "next/image"
import { Clock, Users, Award, Star, Play, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LessonsContent() {
  const courses = [
    {
      id: 1,
      title: "Fashion Design Fundamentals",
      description: "Master the basics of fashion design including sketching, color theory, and design principles.",
      price: 299,
      originalPrice: 399,
      duration: "8 weeks",
      lessons: 24,
      students: 1247,
      rating: 4.9,
      reviews: 156,
      level: "Beginner",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Fashion sketching techniques",
        "Color theory and fabric selection",
        "Design development process",
        "Portfolio creation guidance",
      ],
    },
    {
      id: 2,
      title: "Advanced Pattern Making",
      description: "Learn professional pattern making techniques and garment construction methods.",
      price: 449,
      originalPrice: 599,
      duration: "12 weeks",
      lessons: 36,
      students: 892,
      rating: 4.8,
      reviews: 124,
      level: "Advanced",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Professional pattern drafting",
        "Fitting and alterations",
        "Grading techniques",
        "Industry software training",
      ],
    },
    {
      id: 3,
      title: "Fashion Business & Marketing",
      description: "Build your fashion brand and learn marketing strategies for the fashion industry.",
      price: 349,
      originalPrice: 449,
      duration: "10 weeks",
      lessons: 30,
      students: 634,
      rating: 4.7,
      reviews: 89,
      level: "Intermediate",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Brand development strategies",
        "Fashion marketing fundamentals",
        "Social media for fashion",
        "Retail and e-commerce basics",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Designer",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The fashion design course transformed my career. The instructor's expertise and personalized feedback helped me launch my own fashion line.",
    },
    {
      name: "Maria Rodriguez",
      role: "Fashion Student",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Incredible depth of knowledge and practical skills. I learned more in 8 weeks than I did in my entire fashion school program.",
    },
    {
      name: "Emma Chen",
      role: "Boutique Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The business course gave me the tools to scale my boutique. Revenue increased by 150% after implementing the strategies learned.",
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-mocha)] to-[var(--color-mocha)]/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-[var(--color-gold)] text-[var(--color-mocha)] px-4 py-2 rounded-full w-fit">
                🎨 Award-Winning Designer
              </Badge>

              <div className="space-y-6">
                <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight">
                  Master Fashion Design with <span className="text-[var(--color-gold)]">Expert</span> Guidance
                </h1>

                <p className="text-xl text-white/90 leading-relaxed">
                  Transform your passion into profession with comprehensive fashion design courses. Learn from 15+ years
                  of industry experience and join over 2,000 successful graduates.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-[var(--color-gold)]">2000+</div>
                  <div className="text-sm text-white/80">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-[var(--color-gold)]">15+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-[var(--color-gold)]">4.9</div>
                  <div className="text-sm text-white/80">Average Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[var(--color-gold)] text-[var(--color-mocha)] hover:bg-[var(--color-gold)]/90 text-lg px-8 py-4">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--color-mocha)] text-lg px-8 py-4"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Preview
                </Button>
              </div>
            </div>

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

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--color-mocha)] mb-4">
              Our Fashion Design Courses
            </h2>
            <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              Choose from our comprehensive range of courses designed to take you from beginner to professional fashion
              designer.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover border-0">
                <div className="relative h-48 overflow-hidden">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-[var(--color-dusty-rose)] text-white">
                    {course.level}
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-[var(--color-warm-gray)]">({course.reviews})</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[var(--color-warm-gray)]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.students}
                      </div>
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold text-[var(--color-mocha)]">{course.title}</CardTitle>
                  <p className="text-[var(--color-warm-gray)]">{course.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-2xl text-[var(--color-mocha)]">${course.price}</span>
                        <span className="text-sm text-[var(--color-warm-gray)] line-through">
                          ${course.originalPrice}
                        </span>
                      </div>
                      <div className="text-sm text-[var(--color-warm-gray)]">{course.lessons} lessons</div>
                    </div>

                    <div className="space-y-2">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[var(--color-gold)]" />
                          <span className="text-[var(--color-warm-gray)]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 bg-[var(--color-mocha)] text-white hover:bg-[var(--color-mocha)]/90">
                        Enroll Now
                      </Button>
                      <Button variant="outline" className="border-[var(--color-mocha)] text-[var(--color-mocha)]">
                        Preview
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[var(--color-beige)]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--color-mocha)] mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              Join thousands of successful fashion designers who transformed their careers with our courses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white rounded-3xl p-8 shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                    ))}
                  </div>

                  <p className="text-[var(--color-warm-gray)] mb-6 leading-relaxed">"{testimonial.text}"</p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--color-mocha)]">{testimonial.name}</div>
                      <div className="text-sm text-[var(--color-warm-gray)]">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-mocha)] to-[var(--color-mocha)]/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-display text-4xl lg:text-5xl font-bold">Ready to Start Your Fashion Journey?</h2>
            <p className="text-xl text-white/90">
              Join our next cohort and get lifetime access to all course materials, 1-on-1 mentorship, and our exclusive
              designer community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[var(--color-gold)] text-[var(--color-mocha)] hover:bg-[var(--color-gold)]/90 text-lg px-8 py-4">
                Start Free 7-Day Trial
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--color-mocha)] text-lg px-8 py-4"
              >
                Schedule Consultation
              </Button>
            </div>

            <p className="text-sm text-white/70">
              No credit card required • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
