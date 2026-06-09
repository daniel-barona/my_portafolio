"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitBranch, Link2, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="sobre-mi" className="py-12 md:py-20">
      <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 shadow-2xl shadow-foreground/10 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Info */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-1">
              Hola, soy
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              Daniel Andres Barona Sandoval
            </h1>
            <p className="text-xl text-muted-foreground mt-2 font-medium">
              Ingeniero de sistemas
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Ingeniero de Sistemas con experiencia en desarrollo Full Stack e Inteligencia Artificial, enfocado en la creación de soluciones innovadoras que optimizan procesos y mejoran la eficiencia operativa. Especializado en la integración de Copilot Studio, Python y tecnologías web modernas como React para el desarrollo de aplicaciones inteligentes, automatización de flujos de trabajo y experiencias digitales de alto impacto.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Laravel</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">Github</Badge>
            <Badge variant="secondary">MySQL</Badge>
            <Badge variant="secondary">Postman</Badge>
            <Badge variant="secondary">QA</Badge>
            <Badge variant="secondary">Software and Hardware</Badge>
          </div>

          {/* Links */}
          <div className="flex gap-3 justify-center md:justify-start flex-wrap">
            <Button asChild size="sm" className="min-w-35">
              <a href="daniel.baronasa@gmail.com">
                <Mail data-icon="inline-start" />
                Contáctame
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/daniel-barona" target="_blank" rel="noopener noreferrer">
                <GitBranch data-icon="inline-start" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.linkedin.com/in/daniel-barona-2756601b0" target="_blank" rel="noopener noreferrer">
                <Link2 data-icon="inline-start" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.credly.com/users/daniel-barona.e3a63bda" target="_blank" rel="noopener noreferrer">
                <Link2 data-icon="inline-start" />
                Credly (personal)
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.credly.com/users/daniel-barona" target="_blank" rel="noopener noreferrer">
                <Link2 data-icon="inline-start" />
                Credly (universitario)
              </a>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
