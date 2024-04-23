import { z } from 'zod';

// Define a validator for the featured items in the NAVBOARD_CATEGORIES
const FeaturedItemValidator = z.object({
  name: z.string(),
  href: z.string(),
  imageSrc: z.string(),
});

// Define a validator for the PRODUCT_CATEGORIES
const ProductCategoryValidator = z.object({
  label: z.string(),
  value: z.string(),
  href: z.string(),
  imageSrc: z.string(),
});

// Define a validator for the NAVBOARD_CATEGORIES
export const NavboardCategoryValidator = z.object({
  label: z.string(),
  value: z.string(),
  featured: z.array(FeaturedItemValidator).optional(),
});

// Define a validator for the PRODUCT_CATEGORIES
export const ProductCategoriesValidator = z.array(ProductCategoryValidator);

// Define a validator for the entire index.ts configuration file
export const IndexConfigValidator = z.object({
  PRODUCT_CATEGORIES: ProductCategoriesValidator,
  NAVBOARD_CATEGORIES: z.array(NavboardCategoryValidator),
});
