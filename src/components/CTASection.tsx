import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="section-padding bg-dark-surface">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="label-tag mb-6" style={{ color: "hsl(0 0% 50%)" }}>
              <span className="w-6 h-px" style={{ background: "hsl(0 0% 50%)" }} />
              Ready to start?
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4"
              style={{ color: "hsl(var(--dark-surface-foreground))" }}
            >
              Your next website
              <br />
              starts today.
            </h2>
            <p style={{ color: "hsl(0 0% 55%)" }} className="text-lg leading-relaxed">
              Stop waiting months. Get a premium website built in days — with the
              quality your brand deserves.
            </p>
          </div>

          <div className="flex flex-col gap-4 min-w-[200px]">
            <Button
              size="lg"
              variant="secondary"
              className="group w-full text-foreground font-semibold"
              asChild
            >
              <a href="#contact">
                Start Your Project
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </Button>
            <p className="text-xs text-center" style={{ color: "hsl(0 0% 45%)" }}>
              No commitment. Free consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
