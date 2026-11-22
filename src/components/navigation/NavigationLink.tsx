"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationLinkProps = {
  label: string;
  href: string;
  onNavigate?: () => void;
};

export default function NavigationLink({
  label,
  href,
  onNavigate,
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className="site-navigation__link"
    >
      <span>{label}</span>
      <span className="site-navigation__indicator" aria-hidden="true" />
    </Link>
  );
}
