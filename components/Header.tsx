import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <img src="/logos/FyrreMagazineLogo-Black.svg" alt="logo" />
        </Link>
      </div>
      <div></div>
    </header>
  );
}
