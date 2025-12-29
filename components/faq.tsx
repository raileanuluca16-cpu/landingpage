"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer:
      "ContentSpark uses advanced natural language models trained on millions of high-performing social media posts. It analyzes your brand voice, target audience, and current trends to generate engaging content tailored to your needs.",
  },
  {
    question: "Can I customize the AI-generated content?",
    answer:
      "While our AI creates great content out of the box, you have full control to edit, refine, and personalize every post. Our intuitive editor makes it easy to add your unique touch.",
  },
  {
    question: "Which social media platforms do you support?",
    answer:
      "We currently support Instagram, Twitter/X, LinkedIn, Facebook, TikTok, and Pinterest. We're constantly adding new platforms based on user demand.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required to start.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. No questions asked, no hidden fees. Your access will continue until the end of your billing period.",
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openItem, setOpenItem] = useState<string | undefined>("item-0")

  return (
    <section id="faq" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-950/10 via-background to-purple-950/10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Questions?
            </span>{" "}
            We've Got Answers
          </h2>
        </motion.div>

        {/* Split layout: Accordion left, Illustration right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" value={openItem} onValueChange={setOpenItem} collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:text-purple-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right - Illustration overlapping */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:-ml-12"
          >
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="backdrop-blur-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-2 border-purple-500/30 rounded-3xl p-12 shadow-2xl"
            >
              <HelpCircle className="h-full w-full text-purple-400/20" />
            </motion.div>

            {/* Floating element */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 backdrop-blur-xl bg-cyan-500/20 border-2 border-cyan-500/50 rounded-2xl p-8 shadow-xl"
            >
              <p className="text-sm font-mono text-cyan-400">Still have questions?</p>
              <p className="text-xs text-muted-foreground mt-2">Contact our support team 24/7</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
