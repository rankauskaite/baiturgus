import { AuthCredentialsValidator, EmailValidator } from "../lib/validators/account-credentials-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";
import { string, z } from "zod";
import payload from "payload";

export const authRouter = router({
    createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async({input}) => {
        const { email, password } = input
        const payload = await getPayloadClient()

        // check if user already exists
        const {docs: users} = await payload.find({
            collection: "users",
            where: {
                email: {
                    equals: email
                }
            }
        })

        await payload.create({
            collection: "users",
            data: {
                 email,
                 password,
                 role: "user"
            }
        })

        return {success: true, sentToEmail: email}
    }),

    verifyEmail: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async({ input }) => {
        const { token } = input

        const payload = await getPayloadClient()

        const isVerified = await payload.verifyEmail({
            collection: "users",
            token,
        })

        if(!isVerified) throw new TRPCError({ code: 'UNAUTHORIZED' })

        return {success: true}
    }),

    signIn: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({input, ctx}) => {
        const {email, password} = input
        const {res} = ctx

        const payload = await getPayloadClient()
        
        try {
            await payload.login({
                collection: "users",
                data: {
                    email,
                    password,
                },
                res,
            })

            return {success: true}
        } catch (err) {
            throw new TRPCError({code: "UNAUTHORIZED"})
        }
    }),

    checkEmailExistence: publicProcedure
    .input(EmailValidator)
    .mutation(async({input}) => {
        const { email } = input
        const payload = await getPayloadClient()

        const {docs: users} = await payload.find({
            collection: "users",
            where: {
                email: {
                    equals: email
                }
            }
        })

        if (users.length === 0) {
            throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' });
        }

        return {success: true, sentToEmail: email}
    }),

    changePassword: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
        const { email, password } = input;
        const payload = await getPayloadClient();

        try {
            const {docs: users} = await payload.find({
                collection: "users",
                where: {
                    email: {
                        equals: email
                    }
                }
            })

            await payload.update({
                collection: "users",
                id: users[0].id, // Assuming the user document has an _id field
                data: {
                    password: password // Replace 'newPassword' with the new password
                }
            })

            return { success: true, sentToEmail: email };
        } catch (err) {
            // Handle errors
            throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to change password' })
        }
    })
})