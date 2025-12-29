"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for solo creators",
    features: ["50 AI-generated posts/month", "2 connected accounts", "Basic analytics", "Email support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing brands",
    features: [
      "Unlimited AI posts",
      "10 connected accounts",
      "Advanced analytics",
      "Priority support",
      "Custom brand voice",
      "Team collaboration",
      "Trend detection",
    ],
    popular: true,
  },
  {
    name: "Agency",
    price: "$99",
    description: "For agencies & teams",
    features: ["Everything in Pro", "Unlimited accounts", "White-label reports", "Dedicated manager", "API access"],
    popular: false,
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/10 via-background to-pink-950/10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing
            </span>{" "}
            That Scales With You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your content creation needs
          </p>
        </motion.div>

        {/* Staggered cards layout */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: plan.popular ? 1.03 : 1.02, zIndex: 10 }}
              className={`relative ${plan.popular ? "lg:-mt-8 lg:mb-8" : index === 0 ? "lg:mt-8" : "lg:mt-4"}`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10"
                  style={{ transform: "translateX(-50%) rotate(-2deg)" }}
                >
                  <Sparkles className="inline h-4 w-4 mr-1" />
                  Most Popular
                </motion.div>
              )}

              <div
                className={`h-full backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-2xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/50 shadow-purple-500/20"
                    : "bg-white/5 dark:bg-white/5 border-2 border-white/10 hover:border-purple-500/30"
                }`}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/50"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>

                  <div className="space-y-4 pt-6">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
