"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import NavigationLink from "./NavigationLink";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="flex size-10 items-center justify-center text-[var(--color-warm-white)]"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-[var(--color-border)] bg-[var(--color-graphite)] px-[var(--page-padding)] py-8"
        >
          <div className="flex flex-col gap-6">
            {navigationItems.map((item) => (
              <NavigationLink
                key={item.href}
                label={item.label}
                href={item.href}
                onNavigate={closeMenu}
              />
            ))}

            <a
              href="mailto:wrehan2344@gmail.com"
              onClick={closeMenu}
              className="mt-2 text-sm font-medium text-[var(--color-warm-white)]"
            >
              Let's connect ↗
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
