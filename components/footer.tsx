"use client"

import { motion } from "framer-motion"
import { Sparkles, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-20 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Quick links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Center - Legal */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Social (floating) */}
          <div className="space-y-6 lg:ml-auto">
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="#"
                className="backdrop-blur-xl bg-white/10 border border-purple-500/30 rounded-xl p-3 hover:bg-purple-500/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="#"
                className="backdrop-blur-xl bg-white/10 border border-cyan-500/30 rounded-xl p-3 hover:bg-cyan-500/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="#"
                className="backdrop-blur-xl bg-white/10 border border-pink-500/30 rounded-xl p-3 hover:bg-pink-500/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="#"
                className="backdrop-blur-xl bg-white/10 border border-purple-500/30 rounded-xl p-3 hover:bg-purple-500/20 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright offset top-left, Logo bottom-right */}
        <div className="mt-20 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-sm text-muted-foreground order-2 lg:order-1">© 2025 ContentSpark. All rights reserved.</p>

          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 order-1 lg:order-2">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-purple-400" />
              <div className="absolute inset-0 blur-xl bg-purple-500/30 animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ContentSpark
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
