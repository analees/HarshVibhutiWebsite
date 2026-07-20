import Image from "next/image"
import { ArrowUpRight, MapPin } from "lucide-react"

const research = [
  {
    id: 1,
    title: "Metallic Glass Research",
    subtitle: "Identify which metal alloys are best to form metallic glasses",
    location: "St. Louis, MO",
    date: "May 2026 - July 2026",
    image: "/images/metallicglass.jpeg",
    description: [
        "Collaborated with PhD students and faculty to apply machine learning techniques for identifying promising metallic glass alloy compositions.",
  "Assisted with experimental validation by preparing and processing alloy samples using specialized laboratory equipment.",
  "Contributed to research aimed at accelerating the discovery of high-performance metallic materials for structural applications."
    ],
    tags: ["Machine Learning", "Alloy Design", "Materials Science"]
  },
    {
    id: 2,
    title: "Mathematics Undergrad Research",
    subtitle: "Gray Paths in Integer Partitions",
    location: "Austin, TX",
    date: "May 2026 - July 2026",
    image: "/images/mathresearch.jpg",
    description: [
        "Explored problems in combinatorics, studying Gray paths through integer partitions", 
        "to formulat and testing hypotheses, then documenting and visualizing the results."
    ],
    tags: ["Combinatorics", "Integer Partitions", "Mathematical Modeling"]
  },
  {
    id: 3,
    title: "Hook's Fellowship",
    subtitle: "Monitoring and Managing Trees in the Wildland-Urban Interface for Climate Resilience",
    location: "Austin,TX",
    date: "May 2025 - July 2026",
    image: "/images/Hooks.jpeg",
    description: [
        "Installed and monitored wireless dendrometers on Texas Live Oak, Red Oak, and Ashe Juniper trees across",
        "Wildland-Urban Interface (WUI) and interior forest", 
        "sites to measure growth patterns and physiological stress indicators, including Tree Water Deficit (TWD)",
        "and Maximum Daily Shrinkage (MDS)."
    ],
    tags: ["Climate Resilience", "Dendrometry", "Forest Ecology"]
  },
  {
    id: 4,
    title: "Ozone & Air-Quality Studies",
    subtitle: "Atmospheric Physics",
    location: "Austin, TX",
    date: "May 2023 - Aug 2025",
    image: "/images/AirQuality.jpg",
    description: [
        "Prepared and launched ozonesondes and analyzed ozone-monitor data to deepen understanding of atmospheric conditions, contributing to state air-quality research."
    ],
    tags: ["Atmospheric Physics", "Ozonesondes", "Air-Quality Analysis"]
  },
]

export function ResearchExperience() {
  return (
    <section id="research" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">04</span>
          <h2 className="text-3xl font-bold mt-2">Research Experience</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">Research and technical experience applying data, engineering, and systems skills to real-world problems.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {research.map((item) => <ExperienceCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ item }: { item: (typeof research)[number] }) {
  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={item.image} alt={`${item.title} workplace`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute bottom-4 left-4 right-4"><span className="text-xs font-mono text-primary">{item.date}</span></div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div><h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{item.title}</h3><p className="text-sm text-muted-foreground">{item.subtitle}</p></div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        </div>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{item.location}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">{item.tags.slice(0, 3).map((tag) => <span key={tag} className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded">{tag}</span>)}</div>
      </div>
    </article>
  )
}
