import Link from "next/link";
import menuLinks from "@/data/menu";
import SocialSharing from "./SocialSharing";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  return (
    <header className="flex flex-col justify-between max-w-[95rem] w-full mx-auto px-4 md:pt-8 pt-4 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <div className="flex">
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
              <SocialSharing
                links={[
                  {
                    href: "#",
                    ariaLabel: "Visit our Instagram page",
                    src: "/icons/ri_instagram-line.svg",
                    alt: "Instagram logo",
                  },
                  {
                    href: "#",
                    ariaLabel: "Visit our Twitter page",
                    src: "/icons/ri_twitter-fill.svg",
                    alt: "Twitter logo",
                  },
                ]}
              />
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
          <SocialSharing
            links={[
              {
                href: "#",
                ariaLabel: "Visit our Instagram page",
                src: "/icons/ri_instagram-line.svg",
                alt: "Instagram logo",
              },
              {
                href: "#",
                ariaLabel: "Visit our Twitter page",
                src: "/icons/ri_twitter-fill.svg",
                alt: "Twitter logo",
              },
              {
                href: "#",
                ariaLabel: "Visit our YouTube page",
                src: "/icons/ri_youtube-fill.svg",
                alt: "YouTube logo",
              },
              {
                href: "#",
                ariaLabel: "Visit our RSS feed",
                src: "/icons/ri_rss-fill.svg",
                alt: "RSS feed logo",
              },
            ]}
          />
        </nav>
      </div>
      <hr className="border-black border-t-0 border mt-4" />
    </header>
  );
}
