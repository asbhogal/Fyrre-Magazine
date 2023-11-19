import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TSubscribeNewsletterSchema,
  subscribeNewsletterSchema,
} from "@/lib/types";

export default function NewsletterSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSubscribeNewsletterSchema>({
    resolver: zodResolver(subscribeNewsletterSchema),
  });

  const onSubmit = async (data: TSubscribeNewsletterSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className="bg-[#f8f8f8] p-[1.88rem] mt-16">
      <h3 className="uppercase font-semibold mb-2">Newsletter</h3>
      <p className="heading3-title mb-4">Design News to your Inbox</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          className="mb-2"
          type="text"
          placeholder="Email Address"
          name="email"
        />
        {errors.email && (
          <p className="text-red-500 mb-2">{`${errors.email.message}`}</p>
        )}
        <Button
          disabled={isSubmitting}
          type="submit"
          className="disabled:cursor-none"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
