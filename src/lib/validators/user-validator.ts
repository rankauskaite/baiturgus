import { z } from "zod";

export const UserValidator = z.object({
  products: z.array(z.string()), // Adjust the schema according to the structure of your products
  product_files: z.array(z.string()), // Adjust the schema according to the structure of your product files
  role: z.enum(["admin", "user"]),
});

export type TUserValidator = z.infer<typeof UserValidator>;
