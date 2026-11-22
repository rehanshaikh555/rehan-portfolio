import Link from "next/link";

export default function NavBrand() {
  return (
    <Link
      href="/"
      aria-label="REHAN — Home"
      className="nav-brand font-display font-bold tracking-[-0.065em]"
      style={{ fontSize: "clamp(30px, 3vw, 42px)" }}
    >
      REHAN
    </Link>
  );
}
