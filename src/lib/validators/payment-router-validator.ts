import { z } from "zod";

// Define input and output types using Zod schemas
const CreateSessionInputSchema = z.object({
    productIds: z.array(z.string()),
});

const CreateSessionOutputSchema = z.object({
    url: z.string().nullable(),
});

const PollOrderStatusInputSchema = z.object({
    orderId: z.string(),
});

const PollOrderStatusOutputSchema = z.object({
    isPaid: z.boolean(),
});

// Use Zod schemas for data validation
type CreateSessionInput = z.infer<typeof CreateSessionInputSchema>;
type CreateSessionOutput = z.infer<typeof CreateSessionOutputSchema>;

type PollOrderStatusInput = z.infer<typeof PollOrderStatusInputSchema>;
type PollOrderStatusOutput = z.infer<typeof PollOrderStatusOutputSchema>;

// Validator function for createSession input
function validateCreateSessionInput(data: unknown): CreateSessionInput {
    const result = CreateSessionInputSchema.safeParse(data);
    if (!result.success) {
        throw new Error(result.error.message);
    }
    return result.data;
}

// Validator function for createSession output
function validateCreateSessionOutput(data: unknown): CreateSessionOutput {
    const result = CreateSessionOutputSchema.safeParse(data);
    if (!result.success) {
        throw new Error(result.error.message);
    }
    return result.data;
}

// Validator function for pollOrderStatus input
function validatePollOrderStatusInput(data: unknown): PollOrderStatusInput {
    const result = PollOrderStatusInputSchema.safeParse(data);
    if (!result.success) {
        throw new Error(result.error.message);
    }
    return result.data;
}

// Validator function for pollOrderStatus output
function validatePollOrderStatusOutput(data: unknown): PollOrderStatusOutput {
    const result = PollOrderStatusOutputSchema.safeParse(data);
    if (!result.success) {
        throw new Error(result.error.message);
    }
    return result.data;
}
