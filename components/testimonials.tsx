"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    avatar: "/professional-woman-portrait.png",
    quote:
      "ContentSpark completely transformed my workflow. I used to spend hours crafting posts, now it takes minutes!",
    rating: 5,
    color: "purple",
  },
  {
    name: "Marcus Rodriguez",
    role: "Marketing Director",
    avatar: "/professional-man-portrait.png",
    quote: "The AI understands our brand voice perfectly. Our engagement rates have doubled in just 3 months.",
    rating: 5,
    color: "cyan",
  },
  {
    name: "Emily Watson",
    role: "Social Media Manager",
    avatar: "/professional-woman-smiling-portrait.png",
    quote: "Best investment we've made. The analytics alone are worth the price. Highly recommended!",
    rating: 5,
    color: "pink",
  },
  {
    name: "David Park",
    role: "Entrepreneur",
    avatar: "/professional-man-portrait-glasses.png",
    quote: "As a solo founder, ContentSpark is like having a full marketing team. Game changer!",
    rating: 5,
    color: "purple",
  },
  {
    name: "Lisa Anderson",
    role: "Agency Owner",
    avatar: "/professional-woman-portrait-confident.jpg",
    quote: "We manage 50+ client accounts with ease. The white-label features are fantastic.",
    rating: 5,
    color: "cyan",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getBorderColor = (color: string) => {
    switch (color) {
      case "purple":
        return "border-purple-500/40"
      case "cyan":
        return "border-cyan-500/40"
      case "pink":
        return "border-pink-500/40"
    }
  }

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/5 via-pink-950/5 to-cyan-950/5" />

      <div className="container mx-auto px-4 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Loved by{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              10,000+ Creators
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our community is saying about ContentSpark
          </p>
        </motion.div>
      </div>

      {/* Horizontal auto-scroll marquee */}
      <div className="relative">
        <div className="flex gap-6 py-8 animate-scroll">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: (index % testimonials.length) * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="flex-shrink-0 w-[350px]"
            >
              <div
                className={`backdrop-blur-2xl bg-white/5 dark:bg-white/10 border-2 ${getBorderColor(
                  testimonial.color,
                )} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}
              >
                <div className="flex items-start gap-4 mb-6">
                  {/* Avatar partially overflowing */}
                  <div className="relative -mt-12 -ml-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-4 border-background object-cover"
                    />
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
