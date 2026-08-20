import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/20 bg-[#1F1B18] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/igos-logo.png"
            alt="IGOS Events"
            width={90}
            height={90}
            className="drop-shadow-lg"
          />
        </div>

        <div className="my-8 border-t border-[#D4AF37]/15" />

        {/* Explore & Contact */}
        <div className="grid grid-cols-2 gap-10 text-center md:text-left">

          {/* Explore */}
          <div>
            <h3 className="mb-5 font-heading text-xl tracking-wide text-[#D4AF37]">
              Explore
            </h3>

            <ul className="space-y-3 text-[#B9ADA1]">
              <li>
                <Link href="/" className="transition hover:text-[#D4AF37]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-[#D4AF37]">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services" className="transition hover:text-[#D4AF37]">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="transition hover:text-[#D4AF37]">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-[#D4AF37]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-heading text-xl tracking-wide text-[#D4AF37]">
              Contact
            </h3>

            <div className="space-y-5 text-[#B9ADA1]">

              <div className="flex items-start justify-center gap-2 md:justify-start">
                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0 text-[#D4AF37]"
                />

                <span className="text-sm leading-6">
                  No. 1 Peshe Road
                  <br />
                  Karu Site
                  <br />
                  Abuja, Nigeria
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Mail size={18} className="text-[#D4AF37]" />

                <a
                  href="mailto:igosevents1@gmail.com"
                  className="transition hover:text-[#D4AF37]"
                >
                  igosevents1@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Phone size={18} className="text-[#D4AF37]" />

                <a
                  href="tel:+2349162499055"
                  className="transition hover:text-[#D4AF37]"
                >
                  +234 916 249 9055
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Phone size={18} className="text-[#D4AF37]" />

                <a
                  href="tel:+2349027868319"
                  className="transition hover:text-[#D4AF37]"
                >
                  +234 902 786 8319
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-[#D4AF37]/15" />

        {/* Follow */}
        <div className="text-center">

          <h3 className="mb-3 font-heading text-xl tracking-wide text-[#D4AF37]">
            Follow Our Journey
          </h3>

          <p className="mb-6 text-sm text-[#8F8377]">
            Stay connected and get daily event inspiration.
          </p>

          <div className="flex justify-center gap-4">

            <a
              href="https://www.instagram.com/igos.events?igsh=MmlsYnZ1c3k0NjU3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#D4AF37]/30 p-3 text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-[#1F1B18]"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/share/1CyxcQ85vu/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#D4AF37]/30 p-3 text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-[#1F1B18]"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@igosevents?_r=1&_t=ZS-93IS1SyiTUz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#D4AF37]/30 p-3 text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-[#1F1B18]"
            >
              <FaTiktok size={20} />
            </a>

            <a
              href="https://wa.me/2348155870098"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#D4AF37]/30 p-3 text-[#D4AF37] transition duration-300 hover:bg-[#25D366] hover:text-white"
            >
              <FaWhatsapp size={20} />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-[#D4AF37]/15" />

        {/* Brand Values */}
        <div className="flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.35em] text-[#B9ADA1]">
          <span>Aesthetics</span>
          <span>•</span>
          <span>Competence</span>
          <span>•</span>
          <span>Excellence</span>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-[#D4AF37]/15" />

        {/* Copyright */}
        <div className="text-center text-sm text-[#8F8377]">
          &copy; 2026 IGOS Events. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}