import NewsletterSignUp from "./NewsletterSignUp";
import PopularArticles from "./PopularArticles";
import { Button } from "./ui/button";

export default function Sidebar() {
  return (
    <aside>
      <h3 className="uppercase font-semibold mb-2">Printmagazine</h3>
      <p className="text-5xl font-semibold">03/2022</p>
      <img
        className="w-[20rem] pt-8 pb-4"
        src="/images/homepage/magazine-cover.jpg"
        alt="A rust-colored magazine cover, showing a sculpture of a man, the words 'FYRRE MAGAZIN' on the top left and '03/2022' on the bottom right, a gold badge just above with 'EXCLUSIVE JAKOB GRONBERG INTERVIEW' printed on it, and an arrow pointing in the bottom right corner"
      />
      <Button>Order</Button>
      <h3 className="uppercase font-semibold mt-16 mb-8">Most Popular</h3>
      <PopularArticles />
      <NewsletterSignUp />
    </aside>
  );
}
