import Link from "next/link";

export default function SocialSharing() {
  return (
    <div>
      <Link
        href="#"
        rel="noreferrer noopener"
        aria-label="Visit our Instagram page"
      >
        <img src="/icons/ri_instagram-line.svg" alt="Instagram logo" />
      </Link>
    </div>
  );
}
