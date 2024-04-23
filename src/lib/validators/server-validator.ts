import { z } from 'zod';

// Define a validator for the WebhookRequest type
const WebhookRequestValidator = z.object({
  rawBody: z.string(),
});

// Define a validator for the ExpressContext type
export const ExpressContextValidator = z.object({
  req: z.unknown().optional(),
  res: z.unknown().optional(),
});

// Define a validator for the start function
export const StartFunctionValidator = z.function();

// Define a validator for the entire configuration
export const ExpressAppValidator = z.object({
  PORT: z.number().optional(),
  createContext: ExpressContextValidator.optional(),
  WebhookRequest: WebhookRequestValidator.optional(),
  start: StartFunctionValidator.optional(),
});
