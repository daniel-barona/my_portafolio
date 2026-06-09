import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

const studies = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Libre seccional Cali",
    location: "Cali, Colombia",
    period: "2019 — 2026",
    status: "Cursando",
    description:
      "Culminado el plan de estudios; Este programa académico proporciona una sólida base en ciencias de la computación, software, redes y bases de datos, junto con un enfoque en la innovación y la solución de problemas complejos.",
    highlights: ["Algoritmia", "Bases de Datos", "Redes", "Arquitectura de Software", "Gestion Organizacional"],
  },
  {
    degree: "Diplomado de ciencia de datos",
    institution: "Universidad Libre seccional Cali",
    location: "Cali, Colombia",
    period: "2026",
    status: "Cursando",
    description:
      "Orientación en ciencias analiticas para el desarollo de modelos predictivos, creacion de datasets y analisis",
    highlights: ["Matemáticas", "Ciencia de datps", "Python", "Modelos", "IA"],
  },
]

export function EducationSection() {
  return (
    <section id="estudios" className="py-16">
      <div className="rounded-[2rem] border border-border/70 bg-card/90 p-5 shadow-xl shadow-foreground/5 md:p-6">
        <div className="mb-7 flex items-center gap-3">
          <div className="rounded-xl bg-primary p-2.5 text-primary-foreground shadow-sm">
            <GraduationCap className="size-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Estudios</h2>
            <p className="text-sm text-muted-foreground">Formación académica</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {studies.map((study, index) => (
            <Card
              key={index}
              className="rounded-2xl border border-border/60 bg-background/85 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-foreground/10"
            >
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <CardTitle className="text-xl font-semibold leading-snug">
                      {study.degree}
                    </CardTitle>
                    <CardDescription className="mt-1 text-base font-medium text-foreground/70">
                      {study.institution}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={study.status === "Graduado" ? "default" : "secondary"}
                    className="shrink-0 rounded-full px-3 py-1"
                  >
                    {study.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1">
                    <Calendar className="size-3.5" />
                    {study.period}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1">
                    <MapPin className="size-3.5" />
                    {study.location}
                  </span>
                </div>
                <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {study.highlights.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
