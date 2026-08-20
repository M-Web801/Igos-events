"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ================================
          MAIN NAVBAR
      ================================= */}

      <header className="fixed left-0 top-0 z-[9999] w-full border-b border-white/10 bg-[rgba(43,38,34,0.88)] backdrop-blur-md">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/igos-logo.png"
              alt="IGOS Events"
              width={70}
              height={70}
              priority
              className="h-14 w-auto md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`font-body text-sm font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent md:inline-flex"
          >
            Book Your Event
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-white md:hidden"
            aria-label="Open Menu"
            aria-expanded={isOpen}
          >
            <Menu
              size={30}
              strokeWidth={1.7}
            />
          </button>
        </nav>
      </header>

      {/* ================================
          MOBILE FULL-SCREEN MENU
      ================================= */}

      {isOpen && (
        <div className="fixed inset-0 z-[100000] h-[100dvh] w-full overflow-hidden bg-[rgba(43,38,34,0.98)] md:hidden">

          {/* Menu Header */}
          <div className="flex h-20 items-center justify-between px-5 sm:px-6">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/images/igos-logo.png"
                alt="IGOS Events"
                width={70}
                height={70}
                priority
                className="h-14 w-auto"
              />
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-11 items-center justify-center text-white"
              aria-label="Close Menu"
            >
              <X
                size={30}
                strokeWidth={1.7}
              />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex h-[calc(100dvh-5rem)] flex-col items-center justify-center px-6">

            <nav className="flex flex-col items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-heading text-[32px] leading-none transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-12 inline-flex rounded-full bg-primary px-8 py-4 font-body text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-accent"
            >
              Book Your Event
            </Link>

          </div>
        </div>
      )}
    </>
  );
} 