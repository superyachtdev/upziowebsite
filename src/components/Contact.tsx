import { useState } from "react";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="label-tag mb-4">
              <span className="w-6 h-px bg-muted-foreground" />
              Get In Touch
            </div>
            <h2 className="section-heading mb-6">
              Let's build<br />something great.
            </h2>
            <p className="body-large mb-10">
              Tell us about your project. We'll respond within 24 hours with a
              clear plan and transparent pricing.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                  <Mail size={15} className="text-foreground" />
                </div>
                hello@upziomedia.com
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                  <MessageSquare size={15} className="text-foreground" />
                </div>
                Average response time: under 4 hours
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card-elevated">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                  Your Name
                </label>
                <Input
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                  Tell Us About Your Project
                </label>
                <Textarea
                  placeholder="What are you looking to build? Any timeline or budget in mind?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && (
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
