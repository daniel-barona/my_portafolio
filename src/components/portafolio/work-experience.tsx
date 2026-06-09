import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {MapPin, Calendar, BriefcaseBusiness } from "lucide-react"

const workexperience = [
    {
        work: "Mesa de ayuda de IT",
        place: "Alliance of bioversity and CIAT",
        location: "Cali, Colombia",
        period: "JUL 2024 — JUL 2025",
        status: "Finalizado",
        description:
        "Practicante de Ingeniería de Sistemas encargado de soporte técnico en hardware y software. Manejo deplataformas para control remoto de equipos y gestión de incidencias mediante Freshservice. Desarrolló soluciones de automatización en Visual Studio Code, optimizando procesos y mejorando la eficiencia operativa de la empresa.",
    },
]

export function WorkExperienceSection() {
    return (
        <section id="works" className="py-16">
        <div className="rounded-[2rem] border border-border/70 bg-card/90 p-5 shadow-xl shadow-foreground/5 md:p-6">
            <div className="mb-7 flex items-center gap-3">
            <div className="rounded-xl bg-primary p-2.5 text-primary-foreground shadow-sm">
                <BriefcaseBusiness className="size-5"/>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-foreground">Trabajos realizados</h2>
                <p className="text-sm text-muted-foreground">Formación laboral</p>
            </div>
            </div>

            <div className="flex flex-col gap-4">
            {workexperience.map((work, index) => (
                <Card
                key={index}
                className="rounded-2xl border border-border/60 bg-background/85 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-foreground/10"
                >
                <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                        <CardTitle className="text-xl font-semibold leading-snug">
                        {work.work}
                        </CardTitle>
                        <CardDescription className="mt-1 text-base font-medium text-foreground/70">
                        {work.place}
                        </CardDescription>
                    </div>
                    <Badge
                        variant={work.status === "Trabajando" ? "default" : "secondary"}
                        className="shrink-0 rounded-full px-3 py-1"
                    >
                        {work.status}
                    </Badge>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1">
                        <Calendar className="size-3.5" />
                        {work.period}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1">
                        <MapPin className="size-3.5" />
                        {work.location}
                    </span>
                    </div>
                    <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground">
                    {work.description}
                    </p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
        </section>
    )
}
