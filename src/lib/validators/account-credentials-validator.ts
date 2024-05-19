import {z} from "zod"

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z.string()
    .min(8, {message: "Password must be at least 8 characters long."})
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "Password must contain at least one special character." })
})

export type TAuthCredentialsValidator = z.infer<typeof  AuthCredentialsValidator>

export const EmailValidator = z.object({
    email: z.string().email(),
});

export type TEmailValidator = z.infer<typeof EmailValidator>;