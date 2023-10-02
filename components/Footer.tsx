import NewsletterTicker from "./NewsletterTicker";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import FooterSocialLinks from "./FooterSocialsLinks";

export default function Footer() {
  return (
    <footer className="bg-black">
      <NewsletterTicker />
      <div className="max-w-[95rem] mx-auto">
        <div className="py-8 xl:py-[128px] grid grid-cols-1 2xl:grid-cols-2 gap-2 xl:gap-32 items-center">
          <h2 className="uppercase text-footer-title">
            Design news to your inbox
          </h2>
          <div className=" flex lg:justify-end gap-3">
            <Input
              className="w-[19.3125rem]"
              type="email"
              placeholder="Email"
            />
            <Button className="w-[6.5rem]" type="submit">
              Sign up
            </Button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between sm:gap-[300px] max-w-[95rem] w-full">
          <img
            className="w-fit"
            src="/logos/FyrreMagazineLogo-White.svg"
            alt="logo in white"
          />
          <div className="flex flex-col lg:flex-row max-w-[63.125rem] w-full">
            <nav className="flex flex-1">
              <ul className="text-white space-y-3">
                <li>Art</li>
                <li>Design</li>
                <li>Architecture</li>
              </ul>
            </nav>
            <nav className="flex flex-1">
              <ul className="text-white space-y-3">
                <li>Magazine</li>
                <li>Podcast</li>
                <li>Authors</li>
              </ul>
            </nav>
            <nav className="flex flex-1">
              <ul className="text-white space-y-3">
                <li>Styleguide</li>
                <li>Licensing</li>
                <li>Changelog</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row justify-between py-3 lg:pt-[6rem] lg:pb-[4.0625rem] w-full">
          <p className="font-regular text-white">
            Designed by{" "}
            <Link href="https://templates.gola.io/templates">Pawel Gola</Link>.
            Developed by Aman Singh Bhogal. All content belongs to their
            respective copyright holders.
          </p>
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
}
