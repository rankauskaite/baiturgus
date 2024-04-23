// product-files-validator.ts
import { z } from "zod";

const ProductFilesValidator = z.object({
  user: z.object({
    id: z.string(),
    // Add other properties of the User object
  }),
});

export type TProductFilesValidator = z.infer<typeof ProductFilesValidator>;
