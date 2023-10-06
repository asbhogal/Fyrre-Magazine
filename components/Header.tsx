import Link from "next/link";
import menuLinks from "@/data/menu";
import SocialSharing from "./SocialSharing";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  return (
    <header className="flex justify-between max-w-[95rem] w-full mx-auto px-4 lg:px-0 lg:pt-16 md:pt-8 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2 border-b border-black">
      <div className="flex flex-1">
        <Link href="/" aria-label="Return to homepage">
          <img
            className="h-full"
            src="/logos/FyrreMagazineLogo-Black.svg"
            alt="logo"
          />
        </Link>
      </div>
      <Sheet>
        <SheetTrigger>
          <img
            className="md:hidden"
            src="/icons/menu.svg"
            alt="hamburger menu icon"
          />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="w-full pt-14"
          aria-label="Menu Toggle"
        >
          <nav className="flex flex-col flex-1 justify-end gap-6">
            {menuLinks.map((menuItem, index) => (
              <Link key={index} href={menuItem.href}>
                {menuItem.label}
              </Link>
            ))}
            <img className="w-fit" src="/icons/line.svg" alt="line" />
            <SocialSharing />
          </nav>
        </SheetContent>
      </Sheet>
      <nav className="flex-1 justify-end gap-6 hidden md:flex">
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
