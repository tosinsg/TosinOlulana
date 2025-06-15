"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Code, Rocket, BookOpen, Lightbulb, Briefcase } from "lucide-react"

const blogCategories = [
  {
    name: "💻 Coding & Development",
    icon: Code,
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
    posts: [
      {
        title: "How I Built My First Full-Stack App (Showman House Event Project)",
        excerpt:
          "A detailed walkthrough of building my event management system from scratch using modern web technologies.",
        date: "2024-01-15",
        readTime: "8 min read",
        featured: true,
      },
      {
        title: "Top 5 Free Tools for Beginner Web Developers",
        excerpt: "Essential free tools that every new developer should know about to boost productivity and learning.",
        date: "2024-01-10",
        readTime: "5 min read",
      },
      {
        title: "Understanding Frontend vs Backend – The Easy Way",
        excerpt: "Breaking down the differences between frontend and backend development in simple terms.",
        date: "2024-01-05",
        readTime: "6 min read",
      },
      {
        title: "My Journey Learning JavaScript and MongoDB",
        excerpt: "Challenges, breakthroughs, and lessons learned while mastering these essential technologies.",
        date: "2023-12-28",
        readTime: "7 min read",
      },
      {
        title: "Debugging Tips Every New Coder Should Know",
        excerpt: "Practical debugging strategies that will save you hours of frustration.",
        date: "2023-12-20",
        readTime: "4 min read",
      },
    ],
  },
  {
    name: "🚀 Learning & Career Growth",
    icon: Rocket,
    color: "bg-green-500/10 text-green-600 border-green-200",
    posts: [
      {
        title: "How I Started My Tech Career Without a University Degree",
        excerpt: "My unconventional path into tech and how you can do it too with dedication and the right resources.",
        date: "2024-01-12",
        readTime: "10 min read",
        featured: true,
      },
      {
        title: "NIIT Experience: What I've Learned So Far",
        excerpt: "Insights from my diploma program and how it's shaping my development skills.",
        date: "2024-01-08",
        readTime: "6 min read",
      },
      {
        title: "How I Prepare for My Programming Exams & Certifications",
        excerpt: "Study strategies and preparation tips for technical assessments and certifications.",
        date: "2023-12-25",
        readTime: "5 min read",
      },
      {
        title: "My Favorite YouTube Channels and Websites for Learning Code",
        excerpt: "Curated list of the best free resources that helped me learn programming.",
        date: "2023-12-15",
        readTime: "4 min read",
      },
    ],
  },
  {
    name: "📚 Tutorials & How-Tos",
    icon: BookOpen,
    color: "bg-purple-500/10 text-purple-600 border-purple-200",
    posts: [
      {
        title: "Step-by-Step: Building a Portfolio Website Using Tailwind CSS",
        excerpt: "Complete tutorial on creating a responsive portfolio website with modern design principles.",
        date: "2024-01-18",
        readTime: "12 min read",
        featured: true,
      },
      {
        title: "How to Host a Website for Free",
        excerpt: "Guide to deploying your websites using free hosting platforms like Vercel and Netlify.",
        date: "2024-01-14",
        readTime: "6 min read",
      },
      {
        title: "Creating a Simple CRUD App with JavaScript and MongoDB",
        excerpt: "Build a complete Create, Read, Update, Delete application from scratch.",
        date: "2024-01-06",
        readTime: "15 min read",
      },
      {
        title: "Sending Emails from Your Website (Beginner Tutorial)",
        excerpt: "Learn how to implement contact forms and email functionality in your web projects.",
        date: "2023-12-30",
        readTime: "8 min read",
      },
    ],
  },
  {
    name: "💡 Motivation & Personal Journey",
    icon: Lightbulb,
    color: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
    posts: [
      {
        title: "From Oyo to the World: My Tech Journey So Far",
        excerpt: "My personal story of growth, challenges, and dreams in the tech industry.",
        date: "2024-01-20",
        readTime: "9 min read",
        featured: true,
      },
      {
        title: "Why I Believe Anyone Can Learn Programming",
        excerpt: "Breaking down barriers and misconceptions about who can become a programmer.",
        date: "2024-01-11",
        readTime: "5 min read",
      },
      {
        title: "My First Time Fixing a Phone: What I Learned",
        excerpt: "How hardware troubleshooting taught me valuable problem-solving skills for software development.",
        date: "2023-12-22",
        readTime: "4 min read",
      },
    ],
  },
  {
    name: "💼 Freelancing & Business",
    icon: Briefcase,
    color: "bg-orange-500/10 text-orange-600 border-orange-200",
    posts: [
      {
        title: "How I Started Offering Tech Services as a Teen",
        excerpt: "My journey into freelancing and building a client base while still in school.",
        date: "2024-01-16",
        readTime: "7 min read",
        featured: true,
      },
      {
        title: "3 Ways I'm Planning to Make Money from Coding",
        excerpt: "Practical strategies for monetizing your programming skills as a beginner.",
        date: "2024-01-09",
        readTime: "6 min read",
      },
      {
        title: "How to Build a Personal Brand as a Developer in Nigeria",
        excerpt: "Tips for standing out in the local tech scene and building your reputation.",
        date: "2023-12-18",
        readTime: "8 min read",
      },
    ],
  },
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const featuredPosts = blogCategories.flatMap((category) => category.posts.filter((post) => post.featured))

  const displayPosts = selectedCategory
    ? blogCategories.find((cat) => cat.name === selectedCategory)?.posts || []
    : featuredPosts

  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="section-heading">🔥 Blog</h2>
        <p className="section-subheading">Sharing my journey, tutorials, and insights in tech development</p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="mb-2"
          >
            Featured Posts
          </Button>
          {blogCategories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category.name ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.name)}
              className="mb-2"
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name.replace(/[💻🚀📚💡💼]/gu, "").trim()}
            </Button>
          ))}
        </div>

        {/* Blog Categories Overview */}
        {selectedCategory === null && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <CardHeader>
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{category.posts.length} articles</p>
                    <Button variant="ghost" className="p-0 h-auto">
                      View Articles <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Blog Posts */}
        <div className="space-y-8">
          {selectedCategory && (
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">{selectedCategory}</h3>
              <Button variant="outline" onClick={() => setSelectedCategory(null)}>
                ← Back to Categories
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      {post.featured && (
                        <Badge variant="default" className="mb-2">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="ghost" className="p-0 h-auto group-hover:text-primary">
                        Read More <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Got Questions? Let's Connect!</h3>
              <p className="text-muted-foreground mb-6">
                Found something interesting? Have questions about any of these topics? I'd love to hear from you and
                help with your coding journey!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:tosinfreshman@gmail.com">Email Me</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
