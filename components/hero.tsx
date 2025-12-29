"use client"

import { motion } from "framer-motion"
import { WaitlistForm } from "@/components/waitlist-form"
import { Sparkles, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Mockup (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="relative">
              <div
                className="relative backdrop-blur-2xl bg-white/5 dark:bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
                style={{ transform: "rotate(-2deg)" }}
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl overflow-hidden border border-purple-500/30">
                  <img
                    src="/ai-content-generation-dashboard-interface-with-col.jpg"
                    alt="ContentSpark Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-purple-500/20 backdrop-blur-xl border border-purple-500/50 rounded-2xl p-4 shadow-xl">
                  <Sparkles className="h-8 w-8 text-purple-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/50 rounded-2xl p-4 shadow-xl">
                  <TrendingUp className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Text offset left (40%) */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Staggered headline */}
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="block text-balance">Generate</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Viral Content
                  </span>
                  <span className="block text-balance">in Seconds</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-muted-foreground italic leading-relaxed max-w-md"
              >
                AI-powered social media content that actually converts. Create, schedule, and optimize posts across all
                platforms with ContentSpark.
              </motion.p>

              {/* Waitlist form immediately below */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <WaitlistForm variant="hero" />
              </motion.div>
            </motion.div>

            {/* CTA offset bottom-left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/50 hover:bg-purple-500/10 group bg-transparent"
              >
                <Zap className="mr-2 h-5 w-5 group-hover:text-yellow-400 transition-colors" />
                Watch Demo
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 border-2 border-background"
                    />
                  ))}
                </div>
                <span>10,000+ creators trust us</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
