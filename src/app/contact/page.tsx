import type { Metadata } from "next";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = { title: "Contact" };

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@polymerenergy.in",
    href: "mailto:info@polymerenergy.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXX-XXXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India-Based Operations",
    href: null,
  },
] as const;

const whyChooseUs = [
  "Modular & portable systems",
  "Made in India technology",
  "Rapid deployment",
  "Local support & maintenance",
] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <FadeIn>
          <div className="mb-16 text-center">
            <Badge>Get in Touch</Badge>
            <h1 className="mt-5 font-heading text-4xl font-bold text-heading md:text-5xl">
              Ready to Transform Your Waste?
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-center text-lg text-muted">
              Contact our team for a consultation on bringing modular pyrolysis
              to your facility.
            </p>
          </div>
        </FadeIn>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left: contact info */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            {contactInfo.map((item, i) => (
              <FadeIn key={item.label} delay={0.1 + i * 0.1}>
                <div className="flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card">
                  <div className="inline-flex shrink-0 rounded-xl bg-brand/10 p-2.5">
                    <item.icon className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 text-sm font-semibold text-heading hover:text-brand transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-semibold text-heading">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Why Choose Us */}
            <FadeIn delay={0.4}>
              <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
                <h3 className="mb-4 font-heading text-base font-bold text-heading">
                  Why Choose Us?
                </h3>
                <ul className="space-y-2.5">
                  {whyChooseUs.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span className="text-sm text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right: contact form */}
          <FadeIn delay={0.15} className="lg:col-span-2">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
