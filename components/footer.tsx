import Link from "next/link"
import { Github, Linkedin, MessageSquare } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              Olulana<span className="text-primary">Tosin</span>
            </Link>
            <p className="text-muted-foreground mt-2">Full-stack Developer & UI/UX Designer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/tosinsg"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tosin-olulana-88aa11368"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/2348104220096"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">&copy; {currentYear} Olulana Tosin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
