"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Atomization Chamber",
    subtitle: "Mechanical Design Project · Dr. Friend Lab",
    date: "Aug 2026 – Present",
    images: [
      "/images/atomization-chamber-cad.png",
      "/images/atomization-chamber-exploded.png",
      "/images/atomization-chamber-prototype-lab.png",
      "/images/atomization-chamber-prototype.png",
    ],
    description: "Designed a reusable methanol atomization enclosure and validated its flow, thermal, sealing, and pressure performance through simulation and prototyping.",
    tags: ["SolidWorks", "ANSYS Fluent", "Icepak", "GD&T"],
  },
  {
    id: 2,
    title: "Autonomous LLM Robot",
    subtitle: "Personal Robotics Project",
    date: "Aug 2026 – Present",
    images: [
      "/images/autonomous-robot-front.jpeg",
      "/images/autonomous-robot-closeup.jpeg",
      "/images/autonomous-robot-side.jpeg",
    ],
    description: "Built an assistive mobile robot combining Arduino controls, sensors, DC actuators, and a Python-to-Arduino interface for natural-language tasks.",
    tags: ["Arduino", "Python", "LLM Integration", "Raspberry Pi"],
  },
  {
    id: 3,
    title: "WashU Rocketry",
    subtitle: "Mechanical Design and Test Engineer",
    date: "Sep 2025 – Present",
    images: ["/images/rocketry.jpg"],
    description: "Designed and tested rocket bulkheads, assemblies, and resin bearings for NASA USLI, achieving a 44% mass reduction and 4× strength improvement.",
    tags: ["SolidWorks", "FEA", "FeatureCAM", "CNC Machining"],
  },
  {
    id: 4,
    title: "WashU Design Build Fly",
    subtitle: "Avionics System Co-lead",
    date: "Sep 2025 – Present",
    images: ["/images/avionics-project.jpg"],
    description: "Designed modular avionics enclosures, trays, and servo brackets while leading a 12-member team integrating actuators, controls, and cable routing.",
    tags: ["SolidWorks", "DFM/DFA", "Servo Integration", "Cable Routing"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">02</span>
          <h2 className="text-3xl font-bold mt-2">Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Selected work in mechanical design, simulation, manufacturing, avionics, and robotics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (project.images.length < 2) return

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % project.images.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [project.images.length])

  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className={`relative aspect-[4/3] overflow-hidden ${project.id === 1 ? "bg-white" : ""}`}>
        {project.images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={index === activeImage ? `${project.title} project` : ""}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className={`${project.id === 1 ? "object-contain p-2" : "object-cover"} transition-all duration-700 group-hover:scale-105 ${
              index === activeImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute bottom-4 left-4 right-4"><span className="text-xs font-mono text-primary">{project.date}</span></div>
        {project.images.length > 1 && (
          <div className="absolute right-3 top-3 flex gap-1.5" aria-label={`Image ${activeImage + 1} of ${project.images.length}`}>
            {project.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`h-1.5 rounded-full transition-all ${index === activeImage ? "w-5 bg-primary" : "w-1.5 bg-white/70"}`}
                aria-label={`Show ${project.title} image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => <span key={tag} className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded">{tag}</span>)}
        </div>
      </div>
    </article>
  )
}
