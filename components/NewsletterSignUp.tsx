import { useForm, type FieldValues } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsletterSignUp() {
  const REGEX_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    reset,
    getValues,
  } = useForm();

  const validateEmail = (value: string) => {
    return REGEX_PATTERN.test(value) || "Please enter a valid email address";
  };

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <div className="bg-[#f8f8f8] p-[1.88rem] mt-16">
      <h3 className="uppercase font-semibold mb-2">Newsletter</h3>
      <p className="heading3-title mb-4">Design News to your Inbox</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", {
            required: "Please enter a valid email address to subscribe",
            pattern: {
              value: REGEX_PATTERN,
              message: "Please enter a valid email address",
            },
            validate: validateEmail,
            minLength: {
              value: 5,
              message: "Please enter an email address longer than 5 characters",
            },
            maxLength: {
              value: 40,
              message:
                "Please enter an email address shorter than 40 characters",
            },
          })}
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
