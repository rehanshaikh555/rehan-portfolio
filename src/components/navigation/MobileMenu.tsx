"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import NavigationLink from "./NavigationLink";
import ResumeLink from "@/components/resume/ResumeLink";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="flex size-11 items-center justify-center rounded-sm text-[var(--color-warm-white)] transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-warm-white)]"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-[var(--color-border)] bg-[var(--color-graphite)] px-[var(--page-padding)] py-8"
        >
          <div className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <NavigationLink
                key={item.href}
                label={item.label}
                href={item.href}
                onNavigate={closeMenu}
              />
            ))}

            <ResumeLink
              label="Download résumé"
              className="mt-2 border-t border-[var(--color-border)] pt-5 text-sm font-medium text-[var(--color-warm-white)]"
            />

            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-3 text-sm font-medium text-[var(--color-warm-white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-warm-white)]"
            >
              Let's connect ↗
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
