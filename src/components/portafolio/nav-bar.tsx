"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Estudios", href: "#estudios" },
  { label: "Trabajos", href: "#works" },
  { label: "Cursos", href: "#cursos" },
  { label: "Proyectos", href: "#proyectos" },
]

export function NavBar() {
  const [active, setActive] = useState("#sobre-mi")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navItems.map((item) => item.href.replace("#", ""))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border/70 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-center px-4 sm:px-6">
        <nav aria-label="Navegación principal" className="flex w-full justify-center">
          <ul className="flex max-w-full items-center justify-center gap-1 overflow-x-auto rounded-full border border-border/70 bg-card/85 p-1.5 shadow-lg shadow-foreground/5 backdrop-blur-xl">
            {navItems.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  className={cn(
                    "block rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 sm:px-4",
                    active === item.href
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                  onClick={() => setActive(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
