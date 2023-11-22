import Link from "next/link";

type SocialMediaLink = {
  href: string;
  ariaLabel: string;
  src: string;
  alt: string;
};

const FooterSocialMediaLinks: SocialMediaLink[] = [
  {
    href: "#",
    ariaLabel: "Visit our Instagram page",
    src: "/icons/ri_instagram-line-white.svg",
    alt: "Instagram logo",
  },
  {
    href: "#",
    ariaLabel: "Visit our Twitter page",
    src: "/icons/ri_twitter-fill-white.svg",
    alt: "Twitter logo",
  },
  {
    href: "#",
    ariaLabel: "Visit our YouTube page",
    src: "/icons/ri_youtube-fill-white.svg",
    alt: "YouTube logo",
  },
  {
    href: "#",
    ariaLabel: "Visit our RSS Feed",
    src: "/icons/ri_rss-fill-white.svg",
    alt: "RSS Feed logo",
  },
];

export default function FooterSocialLinks() {
  return (
    <div className="flex gap-3">
      {FooterSocialMediaLinks.map((link, index) => (
        <Link key={index} href={link.href} rel="noreferrer noopener">
          <img className="h-full w-fit" src={link.src} alt={link.alt} />
        </Link>
      ))}
    </div>
  );
}
