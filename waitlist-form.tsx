"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Sparkles } from "lucide-react"
import { z } from "zod"

const emailSchema = z.string().email("Please enter a valid email address")

interface WaitlistFormProps {
  variant?: "hero" | "cta"
}

export function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      emailSchema.parse(email)
      setIsLoading(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Save to localStorage
      const existingEmails = JSON.parse(localStorage.getItem("contentsparkWaitlist") || "[]")
      existingEmails.push({ email, timestamp: new Date().toISOString() })
      localStorage.setItem("contentsparkWaitlist", JSON.stringify(existingEmails))

      toast({
        title: "🎉 Welcome to ContentSpark!",
        description: "You're on the waitlist! We'll notify you when we launch.",
      })

      setEmail("")
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid email",
          description: error.errors[0].message,
          variant: "destructive",
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 ${
            variant === "hero"
              ? "bg-white/10 border-purple-500/30 focus:border-purple-500 text-lg"
              : "bg-white/5 border-white/20 focus:border-cyan-500"
          }`}
          required
        />
        <Button
          type="submit"
          disabled={isLoading}
          className={`${
            variant === "hero"
              ? "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600"
              : "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
          } shadow-lg relative group`}
          size="lg"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isLoading ? (
              "Joining..."
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                Join Waitlist
              </>
            )}
          </span>
          <div className="absolute inset-0 blur-xl bg-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>
      </div>
      {variant === "cta" && (
        <p className="text-xs text-muted-foreground">
          By joining, you agree to our Terms of Service and Privacy Policy
        </p>
      )}
    </form>
  )
}
