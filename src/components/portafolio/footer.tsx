import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="py-10">
      <Separator className="mb-8" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>
          Bienvenidos a{" "}
          <span className="text-foreground font-medium">Mi Hoja de vida </span>
          <span className="text-foreground font-medium">en linea</span>
        </p>
        <p>© {new Date().getFullYear()} Daniel Andres Barona Sandoval · Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
