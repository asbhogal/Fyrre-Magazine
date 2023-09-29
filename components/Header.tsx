import Link from "next/link";
import menuLinks from "@/data/menu";
import SocialSharing from "./SocialSharing";

export default function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex flex-1">
        <Link href="/" aria-label="Return to homepage">
          <img
            className="h-full"
            src="/logos/FyrreMagazineLogo-Black.svg"
            alt="logo"
          />
        </Link>
      </div>
      <nav className="flex flex-1 justify-end gap-6">
        {menuLinks.map((menuItem, index) => (
          <Link key={index} href={menuItem.href}>
            {menuItem.label}
          </Link>
        ))}
        <img className="w-fit" src="/icons/line.svg" alt="line" />
        <SocialSharing />
      </nav>
    </header>
  );
}
