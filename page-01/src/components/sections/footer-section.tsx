"use client";

import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "Products", href: "#products" },
    { label: "Technology", href: "#technology" },
    { label: "Gallery", href: "#gallery" },
    { label: "Accessories", href: "#accessories" },
  ],
  about: [
    { label: "Our Story", href: "#" },
    { label: "Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  service: [
    { label: "FAQ", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Warranty", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30">
      {/* Main Footer Content */}
      <div className="border-t border-border/60 px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 gap-y-16 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link
              href="#hero"
              className="inline-block font-antihero text-2xl font-light tracking-widest text-foreground transition-opacity hover:opacity-70"
            >
              MONO
              <span className="ml-1 text-muted-foreground">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Sustainable design homes combining contemporary aesthetics with
              energy efficiency and eco-friendly materials.
            </p>
            {/* Decorative line */}
            <div className="mt-6 h-px w-12 bg-gradient-to-r from-foreground/30 to-transparent" />
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              About
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              Service
            </h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40 bg-muted/20 px-6 py-6 backdrop-blur-sm md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Jose Lara. All rights reserved.
          </p>

          {/* Divider */}
          <div className="hidden h-4 w-px bg-border/40 md:block" />

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground/50 transition-all duration-200 hover:text-foreground hover:tracking-widest"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground/50 transition-all duration-200 hover:text-foreground hover:tracking-widest"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground/50 transition-all duration-200 hover:text-foreground hover:tracking-widest"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}