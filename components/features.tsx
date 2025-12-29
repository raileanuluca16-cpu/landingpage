"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Brain, Zap, Target, Calendar, BarChart } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create engaging posts in seconds with our advanced AI that understands your brand voice.",
    color: "purple",
    size: "large" as const,
  },
  {
    icon: Target,
    title: "Multi-Platform",
    description: "Optimize content for Instagram, Twitter, LinkedIn, and more automatically.",
    color: "cyan",
    size: "small" as const,
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Post at the perfect time with AI-powered scheduling recommendations.",
    color: "pink",
    size: "small" as const,
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Track performance and optimize your strategy with real-time insights.",
    color: "purple",
    size: "medium" as const,
  },
  {
    icon: Zap,
    title: "Instant Editing",
    description: "Fine-tune generated content with our intuitive editor.",
    color: "cyan",
    size: "small" as const,
  },
  {
    icon: Sparkles,
    title: "Trend Detection",
    description: "Stay ahead with AI that identifies trending topics in your niche.",
    color: "pink",
    size: "medium" as const,
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getCardSize = (size: "small" | "medium" | "large") => {
    switch (size) {
      case "large":
        return "lg:col-span-6 lg:row-span-2"
      case "medium":
        return "lg:col-span-4 lg:row-span-1"
      case "small":
        return "lg:col-span-3 lg:row-span-1"
    }
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return "border-purple-500/30 hover:border-purple-500/60 hover:shadow-purple-500/20"
      case "cyan":
        return "border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/20"
      case "pink":
        return "border-pink-500/30 hover:border-pink-500/60 hover:shadow-pink-500/20"
    }
  }

  const getIconColor = (color: string) => {
    switch (color) {
      case "purple":
        return "text-purple-400"
      case "cyan":
        return "text-cyan-400"
      case "pink":
        return "text-pink-400"
    }
  }

  return (
    <section id="features" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Features that
            </span>
            <br />
            <span className="text-balance">Supercharge Your Content</span>
          </h2>
        </motion.div>

        {/* Overlapping cards grid */}
        <div className="grid lg:grid-cols-12 gap-6 auto-rows-[200px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`${getCardSize(feature.size)} group`}
            >
              <div
                className={`h-full backdrop-blur-2xl bg-white/5 dark:bg-white/5 border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${getColorClasses(
                  feature.color,
                )}`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="relative w-fit">
                      <feature.icon className={`h-12 w-12 ${getIconColor(feature.color)}`} />
                      <div
                        className={`absolute inset-0 blur-xl ${getIconColor(feature.color)} opacity-30 group-hover:opacity-60 transition-opacity`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
