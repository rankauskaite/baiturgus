import { z } from "zod";

export const UtilsValidator = z.object({
  // Schema for cn function inputs
  cnInputs: z.array(z.string()),

  // Schema for formatPrice function inputs
  formatPrice: z.object({
    price: z.union([z.number(), z.string()]),
    options: z.object({
      currency: z.optional(z.enum(["USD", "EUR", "GBP", "BDT"])),
      notation: z.optional(z.enum(["compact", "standard", "scientific", "engineering"])),
    }),
  }),

  // Schema for constructMetadata function inputs
  constructMetadata: z.object({
    title: z.optional(z.string()),
    description: z.optional(z.string()),
    image: z.optional(z.string()),
    icons: z.optional(z.string()),
    noIndex: z.optional(z.boolean()),
  }),
});

// Type alias for the inferred type of UtilsValidator
export type TUtilsValidator = z.infer<typeof UtilsValidator>;
