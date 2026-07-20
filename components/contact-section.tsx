import { Mail, Linkedin, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="text-primary font-mono text-sm tracking-wider">06</span>
            <h2 className="text-3xl font-bold mt-2">Get in Touch</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {"Would love to connect with fellow Engineers and Mathemagicians."}
            </p>
          </div>
          
          <div className="md:col-span-7">
            <div className="space-y-4">
              <a
                href="mailto:h.vibhuti@wustl.edu"
                className="group flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">h.vibhuti@wustl.edu</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              
              <a
                href="https://linkedin.com/in/harshvibhuti"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/harshvibhuti</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />

                             </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
