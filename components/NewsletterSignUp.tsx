import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TSubscribeNewsletterSchema,
  subscribeNewsletterSchema,
} from "@/lib/types";

type SubscribeProps = {
  formClassName?: string;
  formFieldsClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
};

export default function NewsletterSignUp({
  formClassName,
  formFieldsClassName,
  inputClassName,
  buttonClassName,
}: SubscribeProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TSubscribeNewsletterSchema>({
    resolver: zodResolver(subscribeNewsletterSchema),
  });

  const onSubmit = async (data: TSubscribeNewsletterSchema) => {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email: data.email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      alert("Email subscription form failed");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else {
        alert("Something went wrong");
      }
    }
    // reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${formClassName}`}>
      <div className={`${formFieldsClassName}`}>
        <Input
          {...register("email")}
          className={`mb-2 ${inputClassName}`}
          type="text"
          placeholder="Email Address"
          name="email"
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          className={`disabled:cursor-none ${buttonClassName}`}
        >
          Sign Up
        </Button>
      </div>
      {errors.email && (
        <p className="text-red-500 mb-2">{`${errors.email.message}`}</p>
      )}
    </form>
  );
}
