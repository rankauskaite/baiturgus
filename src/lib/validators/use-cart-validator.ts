import { z } from 'zod';

// Mock Product type for testing
const Product = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
});

export const CartItemValidator = z.object({
  product: Product,
});

export const UseCartValidator = z.object({
  items: z.array(CartItemValidator),
  addItem: z.function(z.tuple([Product]), z.void()),
  removeItem: z.function(z.tuple([z.string()]), z.void()),
  clearCart: z.function(z.tuple([]), z.void()),
});
