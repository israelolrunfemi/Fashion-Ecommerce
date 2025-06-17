import Image from "next/image"
import { Award, Users, Briefcase, Heart, Star, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutContent() {
  const achievements = [
    {
      icon: Award,
      title: "Fashion Designer of the Year",
      year: "2023",
      organization: "International Fashion Council",
    },
    {
      icon: Star,
      title: "Excellence in Design Award",
      year: "2022",
      organization: "Fashion Industry Awards",
    },
    {
      icon: Users,
      title: "Top Fashion Educator",
      year: "2021",
      organization: "Design Education Society",
    },
    {
      icon: Briefcase,
      title: "Sustainable Fashion Pioneer",
      year: "2020",
      organization: "Green Fashion Initiative",
    },
  ]

  const milestones = [
    {
      year: "2008",
      title: "Founded Élégance Atelier",
      description: "Started with a vision to create timeless, elegant fashion pieces that empower women.",
    },
    {
      year: "2012",
      title: "First International Collection",
      description: "Launched our first international collection, featured in Paris Fashion Week.",
    },
    {
      year: "2016",
      title: "Fashion Education Program",
      description: "Launched comprehensive fashion design courses to share knowledge with aspiring designers.",
    },
    {
      year: "2020",
      title: "Sustainable Fashion Initiative",
      description: "Pioneered eco-friendly fashion practices and sustainable design methodologies.",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Received international acclaim and expanded to serve customers worldwide.",
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-off-white)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-[var(--color-dusty-rose)] text-white px-4 py-2 rounded-full w-fit">
                ✨ Award-Winning Designer
              </Badge>

              <div className="space-y-6">
                <h1 className="font-display text-5xl lg:text-6xl font-bold text-[var(--color-mocha)] leading-tight">
                  Meet Isabella
                  <span className="gradient-text"> Moreau</span>
                </h1>

                <p className="text-xl text-[var(--color-warm-gray)] leading-relaxed">
                  With over 15 years of experience in haute couture and fashion education, I've dedicated my career to
                  creating timeless pieces and nurturing the next generation of fashion designers.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-[var(--color-mocha)]">15+</div>
                  <div className="text-sm text-[var(--color-warm-gray)]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-[var(--color-mocha)]">2000+</div>
                  <div className="text-sm text-[var(--color-warm-gray)]">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-[var(--color-mocha)]">50+</div>
                  <div className="text-sm text-[var(--color-warm-gray)]">Awards Won</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Isabella Moreau - Fashion Designer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Quote Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-sm">
                <Quote className="w-8 h-8 text-[var(--color-gold)] mb-3" />
                <p className="text-[var(--color-mocha)] font-medium italic">
                  "Fashion is not just about clothing; it's about expressing your authentic self and empowering others
                  to do the same."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--color-mocha)] mb-6">My Story</h2>
              <p className="text-lg text-[var(--color-warm-gray)]">
                A journey of passion, creativity, and dedication to the art of fashion design.
              </p>
            </div>

            <div className="space-y-8 text-lg text-[var(--color-warm-gray)] leading-relaxed">
              <p>
                My love affair with fashion began in childhood, sketching dress designs in the margins of my school
                notebooks. Growing up in Paris, surrounded by the world's most iconic fashion houses, I was inspired by
                the artistry and craftsmanship that went into every piece.
              </p>

              <p>
                After graduating from École de la Chambre Syndicale de la Couture Parisienne, I spent my early career
                working with renowned designers, learning the intricacies of haute couture and developing my unique
                aesthetic. This experience taught me that true fashion transcends trends—it's about creating pieces that
                make women feel confident, elegant, and authentically themselves.
              </p>

              <p>
                In 2008, I founded Élégance Atelier with a simple mission: to create timeless fashion that celebrates
                femininity while empowering women to express their individuality. Every piece in our collection is
                designed with meticulous attention to detail, using only the finest materials and sustainable practices.
              </p>

              <p>
                Beyond designing, I'm passionate about education. Through our fashion design courses, I've had the
                privilege of mentoring over 2,000 aspiring designers, sharing not just technical skills but the
                philosophy and artistry that make fashion truly meaningful. Seeing my students launch their own
                successful careers brings me immense joy and fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-[var(--color-beige)]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--color-mocha)] mb-6">
              Awards & Recognition
            </h2>
            <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              Recognition from industry leaders and organizations worldwide for excellence in fashion design and
              education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white rounded-3xl p-8 shadow-lg border-0 text-center card-hover">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-[var(--color-gold)]" />
                  </div>
                  <div className="font-display text-2xl font-bold text-[var(--color-mocha)] mb-2">
                    {achievement.year}
                  </div>
                  <h3 className="font-semibold text-[var(--color-mocha)] mb-2">{achievement.title}</h3>
                  <p className="text-sm text-[var(--color-warm-gray)]">{achievement.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--color-mocha)] mb-6">
              Journey Milestones
            </h2>
            <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              Key moments that shaped Élégance Atelier and our commitment to fashion excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--color-beige)]"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-[var(--color-gold)] rounded-full flex items-center justify-center shadow-lg">
                      <span className="font-bold text-white text-sm">{milestone.year}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                      <h3 className="font-display text-2xl font-bold text-[var(--color-mocha)] mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-[var(--color-warm-gray)] leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-mocha)] to-[var(--color-mocha)]/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl lg:text-5xl font-bold">Our Mission</h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <Heart className="w-12 h-12 text-[var(--color-gold)] mx-auto" />
                <h3 className="font-display text-2xl font-bold">Empower</h3>
                <p className="text-white/90">
                  Empowering women through fashion that celebrates their unique beauty and confidence.
                </p>
              </div>

              <div className="space-y-4">
                <Users className="w-12 h-12 text-[var(--color-gold)] mx-auto" />
                <h3 className="font-display text-2xl font-bold">Educate</h3>
                <p className="text-white/90">
                  Sharing knowledge and nurturing the next generation of talented fashion designers.
                </p>
              </div>

              <div className="space-y-4">
                <Award className="w-12 h-12 text-[var(--color-gold)] mx-auto" />
                <h3 className="font-display text-2xl font-bold">Excel</h3>
                <p className="text-white/90">
                  Maintaining the highest standards of craftsmanship and sustainable fashion practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
