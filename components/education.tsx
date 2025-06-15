"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    institution: "NIIT (National Institute of Information Technology)",
    degree: "Diploma in Software Engineering",
    location: "Lagos, Nigeria",
    period: "Jan 2024 – Present",
    courses: ["Full Stack Development", "MongoDB", "JavaScript", "Web Design", "App Development"],
    projects: ["Showman House Event Management System"],
    achievement: "Preparing for final project defense and certifications",
    current: true,
  },
  {
    institution: "Normal College",
    degree: "Senior School Certificate (WAEC & NECO)",
    location: "Lagos State, Nigeria",
    period: "Sept 2022 – Jul 2024",
    subjects: ["Maths", "Chemistry", "Physics", "English", "and more"],
    extra: "Active in school coding and science clubs",
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <h2 className="section-heading">📘 Education</h2>
        <p className="section-subheading">My academic journey and learning experiences</p>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`border-2 hover:border-primary/50 transition-all duration-300 ${edu.current ? "border-primary/30 bg-primary/5" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 ${edu.current ? "bg-primary/20" : "bg-muted"}`}
                    >
                      <GraduationCap className={`h-6 w-6 ${edu.current ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold">{edu.institution}</h3>
                        {edu.current && (
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>

                      <p className="text-lg font-semibold text-primary mb-3">{edu.degree}</p>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {edu.courses && (
                          <div>
                            <p className="font-medium mb-2">📌 Courses:</p>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course, courseIndex) => (
                                <span
                                  key={courseIndex}
                                  className="text-sm bg-secondary text-secondary-foreground px-2 py-1 rounded"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {edu.subjects && (
                          <div>
                            <p className="font-medium mb-2">📌 Subjects Passed:</p>
                            <p className="text-muted-foreground">{edu.subjects.join(", ")}</p>
                          </div>
                        )}

                        {edu.projects && (
                          <div>
                            <p className="font-medium mb-2">📌 Projects:</p>
                            <p className="text-muted-foreground">{edu.projects.join(", ")}</p>
                          </div>
                        )}

                        {edu.achievement && (
                          <div className="flex items-start gap-2">
                            <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">📌 Achievement:</p>
                              <p className="text-muted-foreground">{edu.achievement}</p>
                            </div>
                          </div>
                        )}

                        {edu.extra && (
                          <div>
                            <p className="font-medium mb-2">📌 Extra:</p>
                            <p className="text-muted-foreground">{edu.extra}</p>
                          </div>
                        )}
                      </div>
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
