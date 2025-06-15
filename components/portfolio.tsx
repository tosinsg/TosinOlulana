"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Rental Booking Website",
    description:
      "A complete platform for apartment reservations with user authentication, payment integration, and booking management.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    role: "Full-stack Developer",
    purpose:
      "To simplify the apartment booking process and provide a seamless experience for both property owners and tenants.",
    link: "#",
    github: "#",
  },
  {
    title: "Online Course Platform",
    description: "An interactive learning platform with video courses, quizzes, progress tracking, and certification.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Vercel"],
    role: "Lead Developer & UI Designer",
    purpose: "To create an accessible platform for students to learn various subjects interactively.",
    link: "#",
    github: "#",
  },
  {
    title: "Python Puzzle Game",
    description:
      "A brain-training logic game built with Python, featuring multiple difficulty levels and score tracking.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Python", "Pygame", "SQLite"],
    role: "Game Developer",
    purpose: "To provide an entertaining way for users to improve their logical thinking and problem-solving skills.",
    link: "#",
    github: "#",
  },
  {
    title: "Telegram Bots",
    description: "A collection of engaging bots for games, automation, and utility purposes on the Telegram platform.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Python", "Telegram API", "AWS Lambda"],
    role: "Bot Developer",
    purpose: "To enhance user experience on Telegram with automated services and interactive games.",
    link: "#",
    github: "#",
  },
]

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="section-heading">My Portfolio</h2>
        <p className="section-subheading">Here are some of the projects I&apos;ve worked on</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full border-2 hover:border-primary/50 transition-all duration-300">
                <div className="relative h-64 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-4">
                    <p className="text-sm">
                      <span className="font-semibold">Role:</span> {project.role}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Purpose:</span> {project.purpose}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Live
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
