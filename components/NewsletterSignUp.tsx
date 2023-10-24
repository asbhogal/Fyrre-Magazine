import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsletterSignUp() {
  return (
    <div className="bg-[#f8f8f8] p-[1.88rem] mt-16">
      <h3 className="uppercase font-semibold mb-2">Newsletter</h3>
      <p className="heading3-title mb-4">Design News to your Inbox</p>
      <div>
        <Input className="mb-2" placeholder="Email" />
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
