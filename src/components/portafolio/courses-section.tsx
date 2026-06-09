import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    name: "De Cero a Full Stack",
    platform: "Udemy",
    instructor: "Adrian Lisciotti",
    year: "2025",
    category: "Fullstack",
    certificate: true,
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-dfe7d0ab-521b-4065-90d9-29d1aec50e90.jpg",
    skills: ["PHP", "Laravel", "HTML", "Database"],
  },
  {
    name: "Prompt Design in Vertex AI Skill Badge",
    platform: "Google Cloud",
    instructor: "Google",
    year: "2025",
    category: "IA",
    certificate: true,
    link: "https://www.credly.com/badges/f36cc8b6-ac99-41a6-8cd6-3bee4791b314/public_url",
    skills: ["IA", "Gemini API's", "IA Generativa", "Prompts de Ingeria"],
  },
  {
    name: "Introduction to Data Science",
    platform: "Cisco",
    instructor: "Maximilian Schwarzmüller",
    year: "2026",
    category: "Data Science",
    certificate: true,
    link: "https://www.credly.com/badges/25bf6e6c-ef9a-40c6-8399-722b1a87b094/public_url",
    skills: ["Analisis de datos", "Reccolecion de datos", "Validacion de datos"],
  },
  {
    name: "Software Testing desde 0 : MasterClass todo en 1 con IA",
    platform: "Udemy",
    instructor: "Esteban Balvin",
    year: "2026",
    category: "QA",
    certificate: true,
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-e9babd01-3aa2-4b9f-a56a-01fc8eaef299.jpg",
    skills: ["QA", "Cypress", "Jira", "Testing API-REST"],
  },
  {
    name: "Python Essentials 2",
    platform: "Cisco",
    instructor: "Cisco",
    year: "2024",
    category: "Backend",
    certificate: true,
    link: "https://www.credly.com/badges/feee2ba1-8330-479c-ac87-ffce40ea3c3c/public_url",
    skills: ["Python", "Objetos", "Pip", "Polimorfismo", "Programacion Orientada a objetos"],
  },
  {
    name: "Python Essentials I",
    platform: "Cisco",
    instructor: "Cisco",
    year: "2024",
    category: "Backend",
    certificate: true,
    link: "https://www.credly.com/badges/433f6951-1d7a-49b5-9126-3c47eefa7f01/public_url",
    skills: ["Pensamiento Algoritmico", "Pensamiento analitico", "Python", "Desarollo"],
  },
]

const categoryColors: Record<string, string> = {
  "IA": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Fullstack": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "QA": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "Data Science": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  "Backend": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
}

export function CoursesSection() {
  return (
    <section id="cursos" className="py-16">
      <div className="rounded-[2rem] border border-border/70 bg-card/90 p-5 shadow-xl shadow-foreground/5 md:p-6">
        <div className="mb-7 flex items-center gap-3">
          <div className="rounded-xl bg-primary p-2.5 text-primary-foreground shadow-sm">
            <BookOpen className="size-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Cursos</h2>
            <p className="text-sm text-muted-foreground">Formación continua y certificaciones</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="flex min-h-64 flex-col rounded-2xl border border-border/60 bg-background/85 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-foreground/10"
            >
              <CardHeader className="pb-2">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${categoryColors[course.category] ?? "bg-muted text-muted-foreground"}`}
                  >
                    {course.category}
                  </span>
                  <span className="shrink-0 rounded-full bg-muted/60 px-2.5 py-1 text-xs text-muted-foreground">
                    {course.year}
                  </span>
                </div>
                <CardTitle className="text-lg font-semibold leading-snug">
                  {course.name}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {course.platform} · {course.instructor}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-5">
                <div className="flex flex-wrap gap-1.5">
                  {course.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="rounded-full text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-border/60 pt-4">
                  {course.certificate ? (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
                      <CheckCircle2 className="size-3.5" />
                      Certificado
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">En progreso</span>
                  )}
                  <Button variant="ghost" size="sm" asChild className="h-9 px-3 text-xs">
                    <a href={course.link} target="_blank" rel="noopener noreferrer">
                      Ver
                      <ExternalLink data-icon="inline-end" className="size-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
