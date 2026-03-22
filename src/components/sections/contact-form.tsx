"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  gst: string;
  state: string;
  wasteVolume: string;
  message: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  gst: "",
  state: "",
  wasteVolume: "",
  message: "",
};

const fieldClass =
  "w-full border border-border rounded-xl bg-input px-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up submission
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">
      <h2 className="mb-6 font-heading text-xl font-bold text-heading">
        Send us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Full Name + Email */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-heading">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className={fieldClass}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-heading">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={fieldClass}
            />
          </div>
        </div>

        {/* Row 2: Company + Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-heading">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Your company name"
              className={fieldClass}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-heading">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className={fieldClass}
            />
          </div>
        </div>

        {/* Row 3: GST + State */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-heading">
              GST Number
            </label>
            <input
              type="text"
              name="gst"
              value={form.gst}
              onChange={handleChange}
              placeholder="Your GST number"
              className={fieldClass}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-heading">
              State
            </label>
            <input
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="Your state"
              className={fieldClass}
            />
          </div>
        </div>

        {/* Waste Volume */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-heading">
            Estimated Waste Volume (tonnes/day)
          </label>
          <input
            type="text"
            name="wasteVolume"
            value={form.wasteVolume}
            onChange={handleChange}
            placeholder="e.g. 5"
            className={fieldClass}
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-heading">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your facility and waste management needs..."
            className={fieldClass}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          Send Message
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
