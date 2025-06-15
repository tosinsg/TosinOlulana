"use client"

import { motion } from "framer-motion"
import { Code, Palette, Layout, Database, Bot } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Web & App Development",
    description: "Creating responsive, user-friendly websites and applications with modern technologies.",
    icon: Code,
  },
  {
    title: "UI/UX Design & Wireframing",
    description: "Designing intuitive interfaces and seamless user experiences that engage and delight.",
    icon: Layout,
  },
  {
    title: "Graphics Design",
    description: "Crafting visually appealing graphics that communicate your brand's message effectively.",
    icon: Palette,
  },
  {
    title: "API Integration",
    description: "Connecting your applications with third-party services to extend functionality.",
    icon: Database,
  },
  {
    title: "Chatbot & Game Development",
    description: "Building interactive bots and engaging games for various platforms.",
    icon: Bot,
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <h2 className="section-heading">My Services</h2>
        <p className="section-subheading">I offer a range of services to help bring your digital ideas to life</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
