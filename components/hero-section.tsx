import Image from "next/image"
import { Download } from "lucide-react"
import { RESUME_DOWNLOAD_URL } from "@/lib/site-config"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-center px-6 pt-20">
      <svg
        className="pointer-events-none absolute -right-16 top-20 hidden h-[32rem] w-[32rem] text-primary/15 lg:block"
        viewBox="0 0 512 512"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="256" cy="256" r="218" stroke="currentColor" strokeWidth="1" strokeDasharray="5 9" />
        <path d="M256 72C192 142 185 249 256 356C327 249 320 142 256 72Z" stroke="currentColor" strokeWidth="2" />
        <path d="M256 72V356M198 235H314M216 295L154 355H236M296 295L358 355H276M256 356L226 407H286L256 356Z" stroke="currentColor" strokeWidth="2" />
        <circle cx="256" cy="188" r="31" stroke="currentColor" strokeWidth="2" />
        <path d="M117 394H395M256 45V467" stroke="currentColor" strokeWidth="1" strokeDasharray="8 12" />
        <text x="92" y="420" fill="currentColor" fontSize="12" fontFamily="monospace">FLIGHT SYSTEMS // 01</text>
      </svg>

      <svg
        className="pointer-events-none absolute -bottom-8 -left-8 hidden h-56 w-[34rem] text-primary/15 md:block"
        viewBox="0 0 544 224"
        fill="none"
        aria-hidden="true"
      >
        <path d="M30 151H64L91 116L175 91H314L372 111L439 117L493 142L512 169H30V151Z" stroke="currentColor" strokeWidth="2" />
        <path d="M122 114L155 86H274L320 111M372 111L400 145H478M91 116L110 151M60 170H512" stroke="currentColor" strokeWidth="1" />
        <circle cx="139" cy="170" r="38" stroke="currentColor" strokeWidth="2" />
        <circle cx="139" cy="170" r="15" stroke="currentColor" strokeWidth="1" />
        <circle cx="403" cy="170" r="38" stroke="currentColor" strokeWidth="2" />
        <circle cx="403" cy="170" r="15" stroke="currentColor" strokeWidth="1" />
        <path d="M22 201H522M30 55H220" stroke="currentColor" strokeWidth="1" strokeDasharray="5 7" />
        <text x="30" y="45" fill="currentColor" fontSize="12" fontFamily="monospace">VEHICLE DYNAMICS // CONCEPT 01</text>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center md:items-start">
          <div className="flex-1 min-w-0 space-y-6">
          <p className="text-primary font-mono text-sm tracking-wider">
            Mechanical Engineering
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Harsh Vibhuti
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
          I'm a Mechanical Engineering and Mathematics student at WashU with hands-on experience in SolidWorks, GD&amp;T,
          CNC machining, structural FEA, thermal CFD, and electromechanical prototyping. I design, manufacture, and validate
          hardware for rocketry, avionics, robotics, and energy research.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={RESUME_DOWNLOAD_URL}
              download="Harsh Vibhuti - Mechanical Design Engineer.pdf"
              aria-label="Download resume"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Download Resume
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              Get in Touch
            </a>
          </div>
          </div>

          <div className="shrink-0 flex justify-center md:justify-end">
            <Image
              src="/images/harshpic.png"
              alt="Harsh Vibhuti"
              width={280}
              height={360}
              className="rounded-xl shadow-lg object-cover w-full max-w-[280px] h-auto aspect-[7/9]"
              priority
            />
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-12 left-6 hidden lg:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground tracking-wider rotate-90 origin-center translate-y-8">
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
