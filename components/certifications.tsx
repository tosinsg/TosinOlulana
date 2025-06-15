"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Medal } from "lucide-react"

const certifications = [
  {
    title: "Certified by BrightChamps",
    description: "Professional certification in web development and digital design",
    icon: Award,
    year: "2022",
  },
  {
    title: "1st Place in Science & Robotics Innovation Challenge",
    description: "Award for outstanding achievement in robotics and technological innovation",
    icon: Medal,
    year: "2021",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="section-heading">Certifications & Awards</h2>
        <p className="section-subheading">Recognition of my skills and achievements</p>

        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6 last:mb-0"
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <cert.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <span className="text-sm text-muted-foreground">{cert.year}</span>
                      </div>
                      <p className="text-muted-foreground mt-2">{cert.description}</p>
                    </div>
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
