import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Upzio delivered our website in under a week, and it looks better than sites agencies charged us 10x for. Genuinely impressed.",
    name: "Sarah M.",
    role: "Founder, Clearpath Studio",
    rating: 5,
  },
  {
    quote:
      "The attention to detail is incredible. Clean, fast, and converts. Our leads doubled in the first month after launch.",
    name: "James R.",
    role: "CEO, Meridian Group",
    rating: 5,
  },
  {
    quote:
      "Finally an agency that communicates, delivers on time, and doesn't ghost you after launch. The ongoing support is worth every penny.",
    name: "Priya K.",
    role: "Marketing Director, Nexflow",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className="mb-16">
          <div className="label-tag mb-4">
            <span className="w-6 h-px bg-muted-foreground" />
            Client Stories
          </div>
          <h2 className="section-heading">Trusted by businesses<br />that value quality.</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-elevated flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-foreground text-foreground" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-sm leading-relaxed flex-1 mb-8 font-medium">
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
