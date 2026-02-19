import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding pt-28">

      <div className="container-max relative">
        {/* Label */}
        <div className="label-tag mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="w-6 h-px bg-muted-foreground" />
          Premium Web Agency
        </div>

        {/* Headline */}
        <h1
          className="display-heading mb-8 max-w-5xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Websites Built Fast.
          <br />
          <span className="text-muted-foreground">Designed to Convert.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="body-large max-w-xl mb-12 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          High-quality websites delivered in days, not months. Affordable pricing,
          fast turnaround, and real ongoing support — so you can focus on growing
          your business.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button size="lg" variant="default" className="group" asChild>
            <a href="#contact">
              Start Your Project
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#services">View Services</a>
          </Button>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-12 mt-20 pt-12 border-t border-border animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { value: "48h", label: "Average delivery" },
            { value: "100+", label: "Projects launched" },
            { value: "5★", label: "Client rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <ChevronDown size={18} className="text-foreground" />
      </div>
    </section>
  );
}
