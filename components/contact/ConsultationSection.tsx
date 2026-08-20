"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

export default function ConsultationSection() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent double submission
    if (isSending) return;

    setIsSending(true);
    setStatus("idle");

    const form = e.currentTarget;

    const templateParams = {
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      eventType: form.eventType.value,
      eventDate: form.eventDate.value,
      location: form.location.value,
      budget: form.budget.value,
      message: form.message.value,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="consultation"
      className="bg-background py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">

        {/* ================================
            FORM
        ================================= */}

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            CONSULTATION
          </p>

          <h2 className="font-heading text-[28px] leading-tight text-foreground md:text-[34px] lg:text-[42px]">
            Tell Us About Your Event
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-secondary md:text-base">
            Fill out the form below and we&apos;ll get back to you shortly.
          </p>
 
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* Full Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                className="w-full rounded-2xl border border-primary/10 bg-surface-variant px-5 py-4 text-[15px] text-foreground placeholder:text-secondary/60 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full rounded-2xl border border-primary/10 bg-surface-variant px-5 py-4 text-[15px] text-foreground placeholder:text-secondary/60 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            {/* Phone + Event Type */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* Phone Number */}
              <div className="flex w-full overflow-hidden rounded-2xl border border-primary/10 bg-surface-variant focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                <span className="flex shrink-0 items-center border-r border-primary/10 px-4 text-sm text-secondary">
                  +234
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="801 234 5678"
                  required
                  className="min-w-0 w-full bg-transparent px-4 py-4 text-[15px] text-foreground placeholder:text-secondary/60 outline-none"
                />
              </div>

              <select
                name="eventType"
                defaultValue=""
                required
                className="w-full rounded-2xl border border-primary/10 bg-surface-variant px-5 py-4 text-[15px] text-secondary outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                <option value="" disabled>
                  Select Event Type
                </option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Proposal</option>
                <option>Corporate Event</option>
                <option>Engagement</option>
                <option>Bridal Shower</option>
                <option>Baby Shower</option>
                <option>Anniversary</option>
                <option>Themed Party</option>
                <option>Other</option>
              </select>
            </div>

            {/* Event Date + Location */}
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="date"
                name="eventDate"
                required
                className="w-full rounded-2xl border border-primary/10 bg-surface-variant px-5 py-4 text-[15px] text-secondary outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10"
              />

              <input
                type="text"
                name="location"
                placeholder="Event Location"
                required
                className="w-full rounded-2xl border border-primary/10 bg-surface-variant px-5 py-4 text-[15px] text-foreground placeholder:text-secondary/60 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            {/* Budget */}
            <select
              name="budget"
              defaultValue=""
              className="w-full rounded-2xl border border-primary/10 bg-surface-variant px-5 py-4 text-[15px] text-secondary outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10"
            >
              <option value="">
                Estimated Budget (Optional)
              </option>
              <option>Below ₦500,000</option>
              <option>₦500,000 – ₦1 Million</option>
              <option>₦1 Million – ₦3 Million</option>
              <option>₦3 Million – ₦5 Million</option>
              <option>Above ₦5 Million</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              rows={8}
              placeholder="Tell us about your event..."
              required
              className="w-full resize-none rounded-2xl border border-primary/10 bg-surface-variant px-5 py-4 text-[15px] text-foreground placeholder:text-secondary/60 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#755924] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Enquiry"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-sm font-medium text-primary">
                Thank you. Your enquiry has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm font-medium text-red-600">
                Something went wrong. Please try again or contact us on
                WhatsApp.
              </p>
            )}
          </form>
        </div>

        {/* ================================
            CONTACT INFORMATION
        ================================= */}

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            CONTACT
          </p>

          <h2 className="font-heading text-[28px] leading-tight text-foreground md:text-[30px]">
            Other Ways To Reach Us
          </h2>

          <p className="mt-4 text-sm leading-7 text-secondary">
            Reach out through any of these channels.
          </p>

          <div className="mt-10 space-y-8">

            {/* Phone */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Phone
                  size={18}
                  strokeWidth={1.7}
                  className="text-primary"
                />

                <h3 className="font-heading text-xl text-foreground">
                  Phone
                </h3>
              </div>

              <div className="space-y-1 text-sm text-secondary">
                <a
                  href="tel:+2349162499055"
                  className="block transition-colors hover:text-primary"
                >
                  +234 916 249 9055
                </a>

                <a
                  href="tel:+2349027868319"
                  className="block transition-colors hover:text-primary"
                >
                  +234 902 786 8319
                </a>
              </div>
            </div>

            <div className="border-t border-primary/10" />

            {/* Email */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Mail
                  size={18}
                  strokeWidth={1.7}
                  className="text-primary"
                />

                <h3 className="font-heading text-xl text-foreground">
                  Email
                </h3>
              </div>

              <a
                href="mailto:igosevents1@gmail.com"
                className="text-sm text-secondary transition-colors hover:text-primary"
              >
                igosevents1@gmail.com
              </a>
            </div>

            <div className="border-t border-primary/10" />

            {/* Office */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.7}
                  className="text-primary"
                />

                <h3 className="font-heading text-xl text-foreground">
                  Office
                </h3>
              </div>

              <p className="text-sm leading-6 text-secondary">
                Abuja, Nigeria
              </p>
            </div>

            <div className="border-t border-primary/10" />

            {/* Business Hours */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Clock3
                  size={18}
                  strokeWidth={1.7}
                  className="text-primary"
                />

                <h3 className="font-heading text-xl text-foreground">
                  Business Hours
                </h3>
              </div>

              <div className="space-y-2 text-sm leading-6 text-secondary">
                <p>
                  <span className="font-medium text-foreground">
                    Monday – Friday:
                  </span>{" "}
                  9:00 AM – 6:00 PM
                </p>

                <p>
                  <span className="font-medium text-foreground">
                    Saturday:
                  </span>{" "}
                  10:00 AM – 4:00 PM
                </p>

                <p>
                  <span className="font-medium text-foreground">
                    Sunday:
                  </span>{" "}
                  By Appointment
                </p>
              </div>
            </div>

            <div className="border-t border-primary/10" />

            {/* Social Media */}
            <div>
              <h3 className="mb-5 font-heading text-xl text-foreground">
                Connect With Us
              </h3>

              <div className="flex items-center gap-3">

                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/igos.events?igsh=MmlsYnZ1c3k0NjU3&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <FaInstagram
                    size={20}
                    className="text-[#E4405F]"
                  />
                </Link>

                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/share/1CyxcQ85vu/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <FaFacebookF
                    size={18}
                    className="text-[#1877F2]"
                  />
                </Link>

                {/* TikTok */}
                <Link
                  href="https://www.tiktok.com/@igosevents?_r=1&_t=ZS-93IS1SyiTUz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <FaTiktok
                    size={18}
                    className="text-black"
                  />
                </Link>

                {/* WhatsApp */}
                <Link
                  href="https://wa.me/2348155870098"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#25D366]/20 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <FaWhatsapp
                    size={20}
                    className="text-[#25D366]"
                  />
                </Link>

              </div>
            </div>

            <div className="border-t border-primary/10" />

            {/* WhatsApp CTA */}
            <div>
              <h3 className="font-heading text-xl text-foreground">
                Need a Quicker Response?
              </h3>

              <p className="mt-2 text-sm leading-6 text-secondary">
                Chat with our team on WhatsApp.
              </p>

              <Link
                href="https://wa.me/2348155870098"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1EBE5D]"
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}