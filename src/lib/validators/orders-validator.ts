// orders-validator.ts
import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  role: z.string(),
  // Add other properties of the User object
});

export const OrdersValidator = z.object({
  user: UserSchema,
  _isPaid: z.boolean(),
  products: z.array(z.string()), // Adjust the schema based on the structure of your products
});

export type TOrdersValidator = z.infer<typeof OrdersValidator>;
