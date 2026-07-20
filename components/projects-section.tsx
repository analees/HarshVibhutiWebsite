import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "WashU Design Build Fly",
    subtitle: "Avionics Subteam Member",
    location: "St. Louis, MO",
    date: "September 2025 – Present",
    image: "/images/avionics-project.jpg",
    description: [
      "Integrated and calibrated servo motors with the aircraft's primary control systems, debugged transmitter/receiver firmware."
    ],
    tags: ["SolidWorks", "FEA", "Servo Integration", "Firmware Debugging"]
  },
  {
    id: 2,
    title: "WashU Rocketry",
    subtitle: "Structures and Payload Subteam Member",
    location: "St. Louis, MO",
    date: "September 2025 – Present",
    image: "/images/rocketry.jpg",
    description: [
      "Designed and manufactured a high-precision, 3D-printed payload housing for a high-powered competition rocket."
    ],
    tags: ["3D Printing", "SolidWorks", "FEA", "Payload Systems"]
  },
  {
    id: 3,
    title: "Engineering without Borders",
    subtitle: "Vice President",
    location: "Austin,TX",
    date: "May 2026 - July 2026",
    image: "/images/EWB.png",
    description: [
        "Collaborated with PhD students and faculty to apply machine learning techniques for identifying promising metallic glass alloy compositions.",
  "Assisted with experimental validation by preparing and processing alloy samples using specialized laboratory equipment.",
  "Contributed to research aimed at accelerating the discovery of high-performance metallic materials for structural applications."
    ],
    tags: [  "Machine Learning",
  "Materials Science",
  "Metallic Glasses",
  "Vacuum Processing",
  "Research"]
  },
  {
    id: 4,
    title: "Circuit-Based Digital Locker",
    subtitle: "Electromagnetism Project",
    location: "",
    date: "April 2023",
    image: "/images/circuit-project.jpg",
    description: [
      "Applied gate-level logic principles and hands-on prototyping skills to implement a hardware-based PIN verification mechanism."
    ],
    tags: ["MOSFETs", "Gate Logic", "Breadboard Prototyping", "LED Control"]
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">02</span>
          <h2 className="text-3xl font-bold mt-2">Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Selected engineering projects showcasing expertise in avionics, rocketry, and electronic systems design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-xs font-mono text-primary">{project.date}</span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {project.description[0]}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
