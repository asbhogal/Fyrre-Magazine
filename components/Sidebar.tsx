import NewsletterSignUp from "./NewsletterSignUp";
import PopularArticles from "./PopularArticles";
import { Button } from "./ui/button";

export default function Sidebar() {
  return (
    <aside>
      <h3 className="uppercase font-semibold mb-2">Printmagazine</h3>
      <p className="text-5xl font-semibold">03/2022</p>
      <img
        className="pt-8 pb-4"
        src="/images/homepage/magazine-cover.jpg"
        alt="A magazine cover"
      />
      <Button>Order</Button>
      <h3 className="uppercase font-semibold mt-16 mb-8">Most Popular</h3>
      <PopularArticles />
      <NewsletterSignUp />
    </aside>
  );
}
