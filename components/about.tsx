"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden group">
              <Image
                src="/images/tosin-profile.jpg"
                alt="Olulana Tosin - Professional Portrait"
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Creative Developer & Designer</h3>
            <p className="text-muted-foreground mb-6">
              I am a passionate full-stack developer and UI/UX designer with certifications from prestigious
              organizations like BrightChamps. My journey in technology has been marked by innovation and excellence,
              earning me top awards in science and robotics.
            </p>
            <p className="text-muted-foreground mb-6">
              With expertise in web development, app creation, and bot design, I bring a unique blend of technical skill
              and creative vision to every project I undertake.
            </p>
            <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-lg mb-2">My Mission</h4>
              <p className="italic">
                "I aim to help create a better future for now and the next—making life a better place with impactful
                tech solutions."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
