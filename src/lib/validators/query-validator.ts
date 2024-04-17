// Import Zod package
import { z } from "zod";

// Define the QueryValidator schema
export const QueryValidator = z.object({
    category: z.string().optional(),
    sort: z.enum(["asc", "desc"]).optional(),
    limit: z.number().nonnegative().int().optional() // Enforce non-negative integers
});

// Export the TypeScript type inferred from the schema
export type TQueryValidator = z.infer<typeof QueryValidator>;