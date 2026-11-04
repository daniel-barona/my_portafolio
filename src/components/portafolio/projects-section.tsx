import { useMemo, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FolderOpen, GitBranch, Layers3, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    name: "HeroesApp",
    description:
      "Plataforma web para que sirve para consultas sobre tu superheroe o villano favorito, podras comparar sus estadisticas, equipos, etx. (f5 en caso de presentar problemas de carga o cargar de tab (max. 1min) el backend esta en render de forma gratiuta :))",
    tech: ["React", "TypeScript", "Python", "Javascript"],
    github: "https://github.com/daniel-barona/heroesApp-frontend",
    demo: "https://nimble-cendol-05924b.netlify.app/",
    featured: true,
    image: null,
    category: "Full Stack",
  },
  {
    name: "CalendarMern",
    description:
      "una aplicación de calendario para gestionar eventos personales, de estudio, familia y trabajo. Construida con **React, TypeScript y Vite**, con autenticación mediante **JWT** y persistencia de datos en una API REST (Node.js + Express + MongoDB).\n\nSi no deseas usar un usuario puedes usar:\n\n- Correo: `test2@gmail.com`\n- Contraseña: `Test2_123*`",
    tech: ["Node.js", "JS", "React", "MongoDB", "Express", "TypeScript"],
    github: "https://github.com/daniel-barona/CalendarMernFrontend",
    demo: "https://my-calendar-app-beta-three.vercel.app/",
    featured: true,
    image: null,
    category: "Full Stack",
  },
  {
    name: "DermaPlus",
    description:
      "Pagina de presentacion de una tienda de comesticos, presenta una vanguardia de heroes, el archivo es una panel estatico",
    tech: ["React", "Typescript", "JS", "Node.js"],
    github: "https://github.com/daniel-barona/Derma_Plus",
    demo: "https://derma-plus-jade.vercel.app/",
    featured: false,
    image: null,
    category: "Frontend",
  },
  {
    name: "Saul-IA",
    description:
      "Un agente de IA, para la programaccion posee todos los estatus para crear un agente, conocimiento, prompts y dialogo",
    tech: ["Python"],
    github: "https://github.com/daniel-barona/saul_unilibre",
    demo: null,
    featured: false,
    image: null,
    category: "Backend",
  },
  {
    name: "GifsApp",
    description:
      "Aplicación para explorar tus favoritos gifs la pagina esta conectada con API de la plataforma de Gifs mas grande del mundo, ademas de poseer testing.",
    tech: ["React", "JS", "Typescript"],
    github: "https://github.com/daniel-barona/GifMania",
    demo: "https://gifanimationsearch.netlify.app/",
    featured: false,
    image: null,
    category: "Frontend",
  },
  {
    name: "Videogames",
    description:
      "Sitio donde se pueden ver todas las tendencias de los mejores videojuegos del mundo",
    tech: ["PHP", "Css", "Html"],
    github: "https://github.com/daniel-barona/videogames",
    demo: null,
    featured: false,
    image: null,
    category: "Full Stack",
  },
  {
    name: "TesloShop",
    description:
      "Tienda en linea estilo e-commerce inspirada en Tesla, construida con React y TypeScript. Permite a los usuarios navegar productos, filtrarlos por genero, talla y precio, e iniciar sesion para acceder a un panel de administracion con CRUD de productos.",
    tech: ["Next.js", "React", "Tailwind", "TypeScript"],
    github: "https://github.com/daniel-barona/teslo-shop-frotend",
    demo: "https://teslo-react-frontend.netlify.app/",
    featured: false,
    image: null,
    category: "Full Stack",
  },
  {
    name: "SIPSA - Ciencia de datos",
    description:"Este proyecto está diseñado para procesar, analizar y modelar los datos mensuales de precios mayoristas del SIPSA (Sistema de Información de Precios y Abastecimiento del Sector Agropecuario) del DANE, con cobertura histórica 2013 – 2026. El flujo de trabajo incluye la descarga de datos, consolidación, limpieza, análisis exploratorio de datos (EDA) y modelado predictivo (ARIMA/SARIMA).",
    tech: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Streamlit"],
    github: "https://github.com/daniel-barona/proyecto_ciencia_datos",
    demo: "https://proyectocienciadatos-qmnztotitxxcstru4dsxrd.streamlit.app/",
    featured: true,
    image: null,
    category: "Full Stack",
  },
]

const categoryColors: Record<string, string> = {
  "Full Stack": "bg-sky-100 text-sky-800 dark:bg-sky-950/50 dark:text-sky-200",
  Frontend: "bg-violet-100 text-violet-800 dark:bg-violet-950/50 dark:text-violet-200",
  Backend: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200",
}

export function ProjectsSection() {
  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  )
  const [activeCategory, setActiveCategory] = useState("Todos")
  const visibleProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="proyectos" className="py-16">
      <div className="rounded-[2rem] border border-border/70 bg-card/90 p-5 shadow-xl shadow-foreground/5 md:p-6">
        <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary p-2.5 text-primary-foreground shadow-sm">
              <FolderOpen className="size-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Proyectos</h2>
              <p className="text-sm text-muted-foreground">Cosas que he construido</p>
            </div>
          </div>

          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-border/70 bg-background/80 p-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "shrink-0 rounded-full px-3.5 py-2 text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`${project.name}-${index}`} project={project} />
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
          <Layers3 className="size-4 text-primary" />
          <span>
            {visibleProjects.length} proyectos visibles. Para visitar más, puedes ir{" "}
            <a
              href="https://github.com/daniel-barona?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              a mis repositorios de GitHub
            </a>
            .
          </span>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0]
}) {
  return (
    <Card className="flex min-h-72 flex-col rounded-2xl border border-border/60 bg-background/85 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-foreground/10">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${categoryColors[project.category] ?? "bg-muted text-muted-foreground"}`}
          >
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950/50 dark:text-amber-200">
              <Star className="size-3 fill-current" />
              Destacado
            </span>
          )}
        </div>
        <CardTitle className="mt-3 text-xl font-semibold">{project.name}</CardTitle>
        <CardDescription className="whitespace-pre-line text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t-0 bg-transparent pt-0">
        <Button variant="outline" size="sm" asChild className="h-9">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <GitBranch data-icon="inline-start" />
            Código
          </a>
        </Button>
        {project.demo && (
          <Button size="sm" asChild className="h-9">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink data-icon="inline-start" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
