import { z } from "zod";

export const subscribeNewsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export type TSubscribeNewsletterSchema = z.infer<
  typeof subscribeNewsletterSchema
>;
