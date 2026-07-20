import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left Side */}
          <div className="space-y-12">

            <div>
              <span className="text-primary font-mono text-sm tracking-[0.3em]">
                01
              </span>

              <h3 className="mt-4 text-3xl md:text-3xl font-bold leading-tight">
                An engineer who likes
                <br />
                problems that are
                <br />
                physical, measurable,
                <br />
                and a little{" "}
                <span className = "relative inline-block">
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-blue-500/40 -z-10 rounded-lg">
                  </span>
                  stubborn
                </span>
              </h3>
            </div>

            <div className="space-y-8 text-lg text-muted-foreground leading-9">

              <p>
                I'm a Mechanical Engineering, Robotics & Mathematics student at
                Washington University in St. Louis, with a mathematics degree
                already behind me from St. Edward's University. That dual
                background is the point—I'm comfortable moving between the
                whiteboard and the workshop, formulating the model, then
                machining, printing, wiring, and testing until the real thing
                behaves like the math said it should.
              </p>

              <p>
                My work spans flight avionics and a soil-sampling rocketry
                payload, bulk-metallic-glass materials research, and Python
                automation that reduced a regional agency's QA workload by 95%.
                Across all of it I've learned to define problems clearly,
                respect constraints, iterate through failure, and communicate
                technical findings to people who don't speak engineering.
              </p>

              <p>
                I'm looking for an engineering or robotics internship where I
                can own a piece of hardware from concept to testing, learn from
                experienced engineers, and leave the team with something that
                actually works.
              </p>

            </div>

          </div>

          {/* Right Side */}
          <div className="lg:sticky lg:top-24">

            <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">

              <div className="flex justify-between items-start px-8 py-6 border-b">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Based In
                </span>

                <span className="font-semibold text-right">
                  St. Louis, MO
                </span>
              </div>

              <div className="flex justify-between items-start px-8 py-6 border-b">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Studying
                </span>

                <div className="text-right">
                  <p className="font-semibold">
                    BS Mechanical Engineering
                  </p>
                  <p className="text-muted-foreground">
                    WashU • 2025–2027
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start px-8 py-6 border-b">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Holds
                </span>

                <div className="text-right">
                  <p className="font-semibold">
                    BS Mathematics
                  </p>
                  <p className="text-muted-foreground">
                    St. Edward's • 2025
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start px-8 py-6 border-b">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Focus
                </span>

                <p className="text-right font-semibold">
                  Robotics • Aerospace
                  <br />
                  CAD • Manufacturing
                </p>
              </div>

              <div className="flex justify-between items-start px-8 py-6 border-b">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Seeking
                </span>

                <p className="text-right font-semibold">
                  Engineering / Robotics Internship
                </p>
              </div>

              <div className="flex justify-between items-start px-8 py-6">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Languages
                </span>

                <p className="text-right font-semibold">
                  English • Hindi
                </p>
              </div>


            </div>

          </div>

        </div>
      </div>
    </section>
  )
}