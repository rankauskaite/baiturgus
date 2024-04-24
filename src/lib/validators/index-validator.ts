import { z } from "zod";

// Define the schema for the query validator
export const QueryValidator = z.object({
    sort: z.object({
        // Define sort fields and their types
        // Example:
        createdAt: z.enum(["asc", "desc"]),
        // Add more sort fields as needed
    }).optional(),

    // Add more query parameters as needed
});
