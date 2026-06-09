import { CoursesSection } from "./components/portafolio/courses-section"
import { EducationSection } from "./components/portafolio/education-section"
import { Footer } from "./components/portafolio/footer"
import { HeroSection } from "./components/portafolio/hero-section"
import { NavBar } from "./components/portafolio/nav-bar"
import { ProjectsSection } from "./components/portafolio/projects-section"
import { WorkExperienceSection } from "./components/portafolio/work-experience"
import { Separator } from "./components/ui/separator"

export default function MyPortafolio() {
    return (
        <>
            <NavBar />
            <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 md:py-8">
                <HeroSection />
                <Separator />
                <EducationSection />
                <Separator />
                <WorkExperienceSection />
                <Separator />
                <CoursesSection />
                <Separator />
                <ProjectsSection />
                <Footer />
            </main>
        </>
    )
}
