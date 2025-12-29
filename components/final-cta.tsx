"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { WaitlistForm } from "@/components/waitlist-form"
import { Sparkles } from "lucide-react"

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Full bleed blob background */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-l-[100px] blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left - Text offset */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-purple-500/20 border border-purple-500/50 rounded-full px-6 py-3">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Content?
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Join 10,000+ creators who are already using ContentSpark to grow their social media presence. Start your
              free trial today!
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:ml-auto"
          >
            <div className="backdrop-blur-2xl bg-white/5 dark:bg-white/10 border-2 border-purple-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Start Your Free Trial</h3>
              <WaitlistForm variant="cta" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
