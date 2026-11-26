import Link from "next/link";

export default function NavBrand() {
  return (
    <Link
      href="/"
      aria-label="REHAN — Home"
      className="nav-brand"
    >
      <span className="nav-brand__word">REHAN</span>
    </Link>
  );
}
