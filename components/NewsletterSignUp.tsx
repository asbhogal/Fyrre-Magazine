"use client";

import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsletterSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset(data);
  };

  return (
    <div className="bg-[#f8f8f8] p-[1.88rem] mt-16">
      <h3 className="uppercase font-semibold mb-2">Newsletter</h3>
      <p className="heading3-title mb-4">Design News to your Inbox</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", {
            required: "An email address is required",
            minLength: {
              value: 5,
              message:
                "Please enter an email address more than 5 characters long",
            },
            maxLength: {
              value: 40,
              message:
                "Please enter an email address less than 40 characters long",
            },
          })}
          className="mb-2"
          type="text"
          placeholder="Email Address"
          name="email address"
          required
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
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
