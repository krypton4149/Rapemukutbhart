"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/campaigns", label: "Campaigns" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function BrandLockup() {
  return (
    <Link
      href="/"
      className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 rounded-sm"
    >
      <Image
        src="/image/Logo.png"
        alt="Rape Mukt Bharat Foundation"
        width={2172}
        height={724}
        priority
        className="h-12 w-auto shrink-0 object-contain sm:h-14"
      />
    </Link>
  );
}

function DonateButton({ className = "inline-flex" }: { className?: string }) {
  return (
    <Link
      href="/get-involved"
      className={`h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-bold text-white shadow-brand-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_16px_36px_rgba(225,29,46,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 ${className}`}
    >
      <span className="font-devanagari">दान करें</span>
      <span aria-hidden="true" className="mx-1.5 font-semibold">
        •
      </span>
      Donate
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-header" : ""}`}>
      <div className="h-1 bg-gradient-to-r from-brand via-brand-dark to-brand" />
      <header className={`border-b transition-all duration-300 ${scrolled ? "border-black/[0.06] bg-white/90 shadow-header backdrop-blur-xl" : "border-transparent bg-white/80 backdrop-blur-md"}`}>
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <BrandLockup />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-semibold tracking-tight transition-all duration-200 xl:px-3.5 xl:text-[0.9375rem] ${
                    active
                      ? "bg-brand text-white shadow-brand-glow"
                      : "text-ink hover:bg-zinc-100 hover:text-brand"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <DonateButton className="hidden sm:inline-flex" />
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className="relative block size-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition ${
                    open ? "top-2 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 block h-0.5 w-5 rounded-full bg-current transition ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition ${
                    open ? "top-2 -rotate-45" : "top-[0.875rem]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-nav"
            className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-black/[0.06] bg-white lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-4 sm:px-6"
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-md px-3 py-3 text-base font-semibold ${
                      active
                        ? "bg-brand-soft text-brand"
                        : "text-ink hover:bg-zinc-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <DonateButton className="mt-3 sm:hidden" />
            </nav>
          </div>
        ) : null}
      </header>
    </div>
  );
}
