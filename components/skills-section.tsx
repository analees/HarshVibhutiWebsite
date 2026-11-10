import { Code, Cpu, Settings } from "lucide-react"

const skillCategories = [
  {
    title: "Design & Analysis",
    icon: Code,
    skills: ["SolidWorks (CSWP)", "3D & Assembly Modeling", "Structural FEA", "ANSYS Fluent & Icepak", "COMSOL Multiphysics", "Tolerance Stack-up", "Thermal Optimization", "Hardware Validation", "Vibration & Environmental Testing"],
  },
  {
    title: "Manufacturing",
    icon: Settings,
    skills: ["DFM/DFA", "GD&T & 2D Drawings", "FeatureCAM", "3-axis & 4-axis CNC", "SLA/FDM 3D Printing", "Sheet Metal & Injection Molding", "BOM Creation & ECO", "Failure Analysis & RCCA", "PLM/PDM", "Vendor Coordination"],
  },
  {
    title: "Electromechanical & Software",
    icon: Cpu,
    skills: ["PCB Layouts", "Servo & Actuator Integration", "Cable Routing & Rack Integration", "EMI/EMC & Safety Compliance", "Arduino & Raspberry Pi", "Python (NumPy, Pandas, SciPy)", "MATLAB", "C++", "HTML", "Data Center Hardware"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-wider">05</span>
          <h2 className="text-3xl font-bold mt-2">Skills</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">Technical competencies spanning product design, analysis, manufacturing, and electromechanical systems.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg"><category.icon className="h-5 w-5 text-primary" /></div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="font-mono text-sm text-muted-foreground mb-6 tracking-wider">PRIMARY TOOLS</h3>
          <div className="flex flex-wrap gap-3">
            {["SolidWorks", "ANSYS Fluent", "Icepak", "COMSOL", "FeatureCAM", "Python", "MATLAB", "Arduino", "FEA", "CNC"].map((tool) => <span key={tool} className="px-4 py-2 bg-secondary text-secondary-foreground font-mono text-sm rounded-lg">{tool}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
