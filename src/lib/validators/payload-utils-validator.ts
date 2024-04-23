import { z } from "zod";

export const ServerSideUserValidator = z.object({
  user: z.object({
    // Define the structure of the User object
    // Adjust the schema according to the structure of your User type
    id: z.string(),
    name: z.string(),
    // Add other properties of the User object
  }).nullable(), // User object can be null if not authenticated
});

export type TServerSideUserValidator = z.infer<typeof ServerSideUserValidator>;
