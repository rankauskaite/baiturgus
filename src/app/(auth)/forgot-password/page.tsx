"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { EmailValidator, TEmailValidator } from "@/lib/validators/account-credentials-validator" // Correct import
import { trpc } from "@/trpc/client"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { ZodError } from "zod"

const Page = () => {
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<TEmailValidator>({
        resolver: zodResolver(EmailValidator),
    })

    const { mutate: checkEmailExistence, isLoading } = trpc.auth.checkEmailExistence.useMutation({
        onError: (err) => {
            if(err.data?.code === "NOT_FOUND") {
                toast.error("This email does not exist.")
                return
            }

            if(err instanceof ZodError) {
                toast.error(err.issues[0].message)
                return
            }

            toast.error('Something went wrong. Please try again.')
        },
        onSuccess: ({sentToEmail}) => {
            toast.success(`You can change ${sentToEmail} password.`)
            router.push('/change-password?to=' + sentToEmail)
        }
    });

    const onSubmit = ({ email }: TEmailValidator) => {
        checkEmailExistence({ email });
    };

    return (
        <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
            <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                <div className='flex h-full flex-col items-center justify-center space-y-1'>
                    <div className='relative mb-4 h-60 w-60 text-muted-foreground'>
                        <Image src="/hippo-email-sent.png" fill alt="hippo email sent image" />
                    </div>
                    <h3 className='font-semibold text-2xl'>Forgot password?</h3>
                    <p className='text-muted-foreground text-center'>
                        Provide Your email to change Your password.
                    </p>
                    <div className='grid gap-6'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid gap-2 mb-52 mt-4'>
                                <div className='grid gap-1 py-2'>
                                    <Label htmlFor="email">Email</Label>
                                    <Input {...register("email")}
                                        className={cn({ 'focus-visible:ring-red-500': errors.email })} placeholder="you@example.com" autoComplete="email" />
                                    {errors?.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
                                </div>
                                <Button>Change password</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page