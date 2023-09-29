import Link from "next/link";

type SocialMediaLink = {
  href: string;
  ariaLabel: string;
  src: string;
  alt: string;
};

const SocialMediaLinks: SocialMediaLink[] = [
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
    ariaLabel: "Visit our RSS Feed",
    src: "/icons/ri_rss-fill.svg",
    alt: "RSS Feed logo",
  },
];

export default function SocialSharing() {
  return (
    <div className="flex gap-3">
      {SocialMediaLinks.map((link, index) => (
        <Link key={index} href={link.href} rel="noreferrer noopener">
          <img className="h-full" src={link.src} alt={link.alt} />
        </Link>
      ))}
    </div>
  );
}
