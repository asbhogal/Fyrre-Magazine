"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsletterSignUp() {
  const [emailAddress, setEmailAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    e.preventDefault();
    setIsSubmitting(true);

    if (!regex.test(emailAddress)) {
      setErrors(["Email address must be the correct format"]);
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setEmailAddress("");

    setIsSubmitting(false);
  };

  return (
    <div className="bg-[#f8f8f8] p-[1.88rem] mt-16">
      <h3 className="uppercase font-semibold mb-2">Newsletter</h3>
      <p className="heading3-title mb-4">Design News to your Inbox</p>
      <form onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <ul>
            {errors.map((error) => (
              <li key={error} className="text-red-500">
                {error}
              </li>
            ))}
          </ul>
        )}
        <Input
          className="mb-2"
          type="text"
          placeholder="Email Address"
          name="email address"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.currentTarget.value)}
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="disabled:cursor-none"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
