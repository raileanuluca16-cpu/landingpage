"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "backdrop-blur-xl" : ""}`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-start justify-between">
          {/* Logo - Large, top left */}
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
            <div className="relative h-10 w-10">
              <Image src="/logo.jpg" alt="ContentSpark Logo" fill className="object-contain" />
              <div className="absolute inset-0 blur-xl bg-purple-500/30 animate-pulse" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              ContentSpark
            </span>
          </motion.div>

          {/* Navigation - Offset bottom right in glassmorphism card */}
          <div className="hidden lg:block">
            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative -mr-8 mt-8 backdrop-blur-2xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-2xl px-8 py-4 shadow-2xl"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#features" className="hover:text-purple-400 transition-colors font-medium">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how" className="hover:text-cyan-400 transition-colors font-medium">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-pink-400 transition-colors font-medium">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-purple-400 transition-colors font-medium">
                    FAQ
                  </a>
                </li>
                <li>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/50"
                  >
                    Get Started
                  </Button>
                </li>
              </ul>
            </motion.nav>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Dark mode toggle - Floating top right with neon glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="fixed top-6 right-6 z-50"
      >
        <div className="relative">
          <ThemeToggle />
          <div className="absolute inset-0 blur-xl bg-cyan-500/30 animate-pulse -z-10" />
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="fixed inset-0 z-40 lg:hidden backdrop-blur-3xl bg-background/95"
        >
          <nav className="flex flex-col gap-6 p-8 mt-24">
            <a
              href="#features"
              className="text-2xl font-bold hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how"
              className="text-2xl font-bold hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-2xl font-bold hover:text-pink-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-2xl font-bold hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500">Get Started</Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
