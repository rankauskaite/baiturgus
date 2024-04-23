import { z } from "zod";

export const StripeValidator = z.object({
  STRIPE_SECRET_KEY: z.string().min(1)
});

export type TStripeValidator = z.infer<typeof StripeValidator>;