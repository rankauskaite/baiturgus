import { AuthCredentialsValidator } from './account-credentials-validator'; // Import your validation schemas

import { publicProcedure, router } from "../../trpc/trpc";
import { getPayloadClient } from "../../get-payload";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import payload from "payload";

export const authRouter = router({
    createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator) // Validate input using AuthCredentialsSchema
    .mutation(async({input}) => {
        // Your procedure implementation
    }),

    verifyEmail: publicProcedure
    .input(AuthCredentialsValidator) // Validate input using EmailVerificationTokenSchema
    .query(async({ input }) => {
        // Your procedure implementation
    }),

    signIn: publicProcedure
    .input(AuthCredentialsValidator) // Validate input using AuthCredentialsSchema
    .mutation(async ({input, ctx}) => {
        // Your procedure implementation
    })
});
