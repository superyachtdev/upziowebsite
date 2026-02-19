export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-padding border-t border-border bg-background py-10">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="text-base font-black tracking-tight text-foreground">Upzio</span>
            <span className="text-base font-black tracking-tight text-muted-foreground">Media</span>
          </div>

          <nav className="flex items-center gap-8">
            {["Services", "Process", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">
            © {year} UpzioMedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
