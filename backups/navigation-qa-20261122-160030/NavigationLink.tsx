import Link from "next/link";

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
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group relative py-2 text-sm text-[var(--color-silver)] transition-colors duration-300 hover:text-[var(--color-warm-white)]"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--color-warm-white)] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
