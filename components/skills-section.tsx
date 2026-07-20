import { Code, Cpu, Settings } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: [
      "Python (Pandas, NumPy)",
      "Jupyter",
      "Java",
      "HTML",
      "Git/GitHub",
      "Scripting",
      "Basic Data Structures",
      "QA Automation",
      "Unit & Performance Testing",
      "Microsoft Office"
    ]
  },
  {
    title: "Mechanical",
    icon: Settings,
    skills: [
      "SolidWorks",
      "FEA",
      "COMSOL Multiphysics",
      "CFD (Ansys Fluent)",
      "3D Printing",
      "Prototyping",
      "Machining"
    ]
  },
  {
    title: "Electrical",
    icon: Cpu,
    skills: [
      "LTspice",
      "Microcontrollers (Arduino)",
      "Controls System Wiring",
      "Instrumentation",
      "PID Controller Tuning",
      "Dynamic System Modeling",
      "Breadboard Prototyping",
      "Gate-Level Logic"
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">05</span>
          <h2 className="text-3xl font-bold mt-2">Skills</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Technical competencies spanning software development, mechanical design, and electrical systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Tools Grid */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="font-mono text-sm text-muted-foreground mb-6 tracking-wider">
            PRIMARY TOOLS
          </h3>
          <div className="flex flex-wrap gap-3">
            {["SolidWorks", "Python", "COMSOL", "Ansys Fluent", "Arduino", "Git", "LTspice", "FEA"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-secondary text-secondary-foreground font-mono text-sm rounded-lg"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
