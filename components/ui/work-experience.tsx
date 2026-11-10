import Image from "next/image"
import { ArrowUpRight, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "Capital Area Council of Governments",
    role: "Air Quality Intern",
    location: "Austin, TX",
    date: "May 2025 – Aug 2025",
    image: "/images/CAPCOG.jpg",
    description:
      "Automated Texas-wide air-quality data collection with Python, reducing QA time by 95%, then presented findings and recommendations to 200+ regional stakeholders.",
    tags: ["Python", "Selenium", "Pandas", "Data Automation"],
  },

  {
    id: 2,
    company: "St. Edward's University",
    role: "Climate Resiliency Research Intern",
    location: "Austin, TX",
    date: "Jan 2025 – May 2025",
    image: "/images/CLIRES.jpg",
    description:
      "Monitored tree growth, water stress, and microclimate with ePlant wireless dendrometers to assess how freeze and heat events affect species to inform urban-forestry and climate-adaptation guidance.",
    tags: ["Climate Research", "Data Analysis", "Urban Forestry", "Resiliency"],
  },

    {
    id: 3,
    company: "iD Tech Camps",
    role: "STEM Education and Program Management Intern",
    location: "Austin, TX",
    date: "Jun 2024 – Aug 2024",
    image: "/images/idtechimg.jpg",
    description:
      "Utilized Instructional design, technical communication, and problem-solving to lead a Robotics course on BattleBots, simplifying complex mechanical engineering concepts for diverse learners.",
    tags: ["Python", "Machine Learning", "AI", "Education"],
  },
  
  {
    id: 4,
    company: "St. Edward’s University",
    role: "A/V Specialist",
    location: "Austin, TX",
    date: "Jan 2023 – Aug 2024",
    image: "/images/Extron.png",
    description:
      "Engineered and calibrated complex hardware and control systems across 50+ environments, prioritizing mechanical and systems design principles to ensure optimal performance.",
    tags: ["Systems Design", "Hardware", "Calibration", "Troubleshooting"],
  },
]

export function WorkExperience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">03</span>
          <h2 className="text-3xl font-bold mt-2">Work Experience</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Professional experience applying engineering and automation skills to real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-4">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience }: { experience: (typeof experiences)[number] }) {
  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={experience.image}
          alt={`${experience.company} workplace`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-xs font-mono text-primary">{experience.date}</span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {experience.company}
            </h3>
            <p className="text-sm text-muted-foreground">{experience.role}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        </div>

        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {experience.location}
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed">{experience.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {experience.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded">
            
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
