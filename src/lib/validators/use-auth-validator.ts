import { z } from 'zod';

export const UseAuthValidator = z.object({
  signOut: z.function(z.tuple([]), z.unknown()),
});

export type TUseAuthValidator = z.infer<typeof UseAuthValidator>;
