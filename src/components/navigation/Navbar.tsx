import Link from "next/link";
import NavBrand from "./NavBrand";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";
import ResumeLink from "@/components/resume/ResumeLink";
import "./navigation.css";

export default function Navbar() {
  return (
    <header className="site-header relative z-50 w-full bg-[var(--color-graphite)]">
      <div className="container-main flex h-20 items-center justify-between">
        <NavBrand />
        <DesktopNavigation />

        <div className="flex items-center gap-3">
          <ResumeLink className="header-action header-resume hidden md:inline-flex" />

          <Link href="/contact" className="header-action hidden md:inline-flex">
            Let's connect
            <span className="header-action__arrow" aria-hidden="true">↗</span>
          </Link>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
