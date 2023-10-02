import NewsletterTicker from "./NewsletterTicker";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="bg-black">
      <NewsletterTicker />
      <div className="max-w-[95rem] py-[128px] mx-auto grid grid-cols-1 2xl:grid-cols-2 gap-32 items-center">
        <h2 className="uppercase text-footer-title">
          Design news to your inbox
        </h2>
        <div className=" flex lg:justify-end gap-3">
          <Input className="w-[19.3125rem]" type="email" placeholder="Email" />
          <Button className="w-[6.5rem]" type="submit">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
