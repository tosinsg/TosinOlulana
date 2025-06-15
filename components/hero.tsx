"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "I bring ideas to life through code, design, and innovation."
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 80)
      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [typedText, fullText])

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I&apos;m Olulana Tosin —{" "}
            <span className="text-primary">
              {typedText}
              <span
                className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${isTypingComplete ? "animate-pulse" : ""}`}
              ></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full-stack Developer | UI/UX Designer | Tech Educator | Bot & App Creator
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#portfolio">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Let&apos;s Collaborate</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
