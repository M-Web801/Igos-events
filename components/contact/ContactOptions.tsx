import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

const contacts = [
  {
    title: "Call Us",
    value: "+234 916 249 9055",
    href: "tel:+2349162499055",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: "Start a Conversation",
    href: "https://wa.me/2348155870098",
    icon: MessageCircle,
  },
  {
    title: "Email",
    value: "info@igosevents.com.ng",
    href: "mailto:info@igosevents.com.ng",
    icon: Mail,
  },
 {
  title: "Instagram",
  value: "@igos.events",
  href: "https://www.instagram.com/igos.events?igsh=MmlsYnZ1c3k0NjU3&utm_source=qr",
  icon: FaInstagram,
}
];

export default function ContactOptions() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            GET IN TOUCH
          </p>

          <h2 className="font-heading text-[28px] md:text-[34px] lg:text-[42px]">
            Choose Your Preferred Way To Connect
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <Link
                key={contact.title}
                href={contact.href}
                target="_blank"
                className="group rounded-2xl border border-primary/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mb-2 font-heading text-xl">
                  {contact.title}
                </h3>

                <p className="text-sm text-secondary">
                  {contact.value}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}