import { navigationItems } from "@/data/navigation";
import NavigationLink from "./NavigationLink";

export default function DesktopNavigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="site-navigation hidden md:flex"
    >
      {navigationItems.map((item) => (
        <NavigationLink
          key={item.href}
          label={item.label}
          href={item.href}
        />
      ))}
    </nav>
  );
}
