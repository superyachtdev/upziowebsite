import { Globe, Code2, Headphones } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Pixel-perfect, conversion-focused designs that make your brand unforgettable. Every element crafted with intention and precision.",
    features: ["Brand-aligned UI", "Mobile-first design", "Figma prototypes"],
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Clean, performant code built on modern stacks. Fast load times, SEO-optimized, and built to scale with your business.",
    features: ["Lightning-fast builds", "SEO-optimized", "CMS integration"],
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Real humans, real support. We handle updates, performance monitoring, and improvements so your site stays sharp.",
    features: ["24/7 monitoring", "Monthly updates", "Priority support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="label-tag mb-4">
              <span className="w-6 h-px bg-muted-foreground" />
              What We Do
            </div>
            <h2 className="section-heading">Services built for<br />modern businesses.</h2>
          </div>
          <p className="body-large max-w-xs md:text-right">
            Everything you need to launch and grow your digital presence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-elevated group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-foreground" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
