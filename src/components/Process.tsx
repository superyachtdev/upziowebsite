const steps = [
  {
    number: "01",
    title: "Strategy",
    description:
      "We start with a deep-dive into your goals, audience, and competition. A clear strategy before a single pixel is placed.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "Your vision takes shape fast. From wireframes to final code, we move with speed and precision — no endless revision cycles.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Go live with confidence. We handle deployment, QA, and final polish. Your site is live, fast, and ready to convert.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className="mb-20">
          <div className="label-tag mb-4">
            <span className="w-6 h-px bg-muted-foreground" />
            How We Work
          </div>
          <h2 className="section-heading max-w-xl">
            A proven process.<br />Predictable results.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-border z-0" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative z-10 flex flex-col">
              {/* Step number + line connector */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-foreground bg-background">
                  <span className="text-xs font-black tracking-widest text-foreground">
                    {step.number}
                  </span>
                </div>
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="md:hidden flex-1 h-px bg-border" />
                )}
              </div>

              <div className="pr-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {/* Mobile vertical connector */}
              {i < steps.length - 1 && (
                <div className="md:hidden w-px h-10 bg-border ml-8 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
