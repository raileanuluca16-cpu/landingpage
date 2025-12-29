"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Upload, Sparkles, Send } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Input Your Topic",
    description:
      "Tell ContentSpark what you want to create. Upload images, add keywords, or describe your content goals.",
    icon: Upload,
    position: "left",
  },
  {
    number: "02",
    title: "AI Magic Happens",
    description:
      "Our AI analyzes trends, your brand voice, and best practices to generate engaging content in seconds.",
    icon: Sparkles,
    position: "right",
  },
  {
    number: "03",
    title: "Publish & Grow",
    description:
      "Review, edit if needed, and publish directly to all your social platforms. Watch your engagement soar.",
    icon: Send,
    position: "left",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-background to-purple-950/10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your social media game
          </p>
        </motion.div>

        {/* Diagonal zigzag timeline */}
        <div className="relative max-w-6xl mx-auto">
          <svg className="absolute inset-0 w-full h-full hidden lg:block" style={{ zIndex: 0 }}>
            <motion.path
              d="M 200,200 Q 400,100 600,300 Q 800,500 1000,400"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-32 lg:space-y-48 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: step.position === "left" ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  step.position === "right" ? "lg:flex-row-reverse lg:ml-auto lg:w-3/4" : "lg:w-3/4"
                }`}
              >
                {/* Number - Large and offset */}
                <div className="relative flex-shrink-0">
                  <div className="text-[120px] lg:text-[180px] font-bold opacity-10 absolute -top-16 -left-8 bg-gradient-to-br from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    {step.number}
                  </div>
                </div>

                {/* Card with icon and text */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                  className="relative backdrop-blur-2xl bg-white/5 dark:bg-white/10 border-2 border-purple-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                  }}
                >
                  <div className="absolute -top-8 -right-8 backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-2 border-purple-500/50 rounded-2xl p-6 shadow-xl">
                    <step.icon className="h-10 w-10 text-purple-400" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-bold">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
