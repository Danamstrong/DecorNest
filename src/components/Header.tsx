"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-sm tracking-wide transition-colors duration-200 ease-soft hover:text-terracotta ${
                  active ? "text-terracotta" : "text-charcoal"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-terracotta" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full border border-charcoal/15 px-5 py-2 text-sm tracking-wide text-charcoal transition-colors duration-200 ease-soft hover:border-terracotta hover:text-terracotta"
          >
            Say hello
          </Link>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
            <line
              x1="1"
              y1="1"
              x2="21"
              y2="1"
              stroke="#2C2C2C"
              strokeWidth="1.6"
              strokeLinecap="round"
              className={`origin-center transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <line
              x1="1"
              y1="8"
              x2="21"
              y2="8"
              stroke="#2C2C2C"
              strokeWidth="1.6"
              strokeLinecap="round"
              className={`transition-opacity duration-150 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <line
              x1="1"
              y1="15"
              x2="21"
              y2="15"
              stroke="#2C2C2C"
              strokeWidth="1.6"
              strokeLinecap="round"
              className={`origin-center transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-charcoal/10 bg-cream px-5 pb-6 pt-2 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-charcoal/5">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-charcoal hover:text-terracotta"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
