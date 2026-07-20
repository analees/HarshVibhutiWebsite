import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { WorkExperience } from "@/components/ui/work-experience"
import { ResearchExperience } from "@/components/ui/ResearchExperience"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WorkExperience />
      <ResearchExperience />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
