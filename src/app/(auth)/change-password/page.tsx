"use client"

import { Icons } from "@/components/Icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator"
import { trpc } from "@/trpc/client"
import { toast } from "sonner"
import { ZodError } from "zod"
import { useRouter } from "next/navigation"

interface PageProps {
    searchParams: {[key: string]: string }
}

const Page = ({searchParams}: PageProps) => {
    const toEmail = searchParams.to

    const { register, handleSubmit, formState: {errors},} = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    })

    const router = useRouter()

    const {mutate, isLoading} = trpc.auth.changePassword.useMutation({
        onError: (err) => {
            if(err.data?.code === "INTERNAL_SERVER_ERROR") {
                toast.error("Failed to change password.")
                return
            }

            if(err instanceof ZodError) {
                toast.error(err.issues[0].message)
                return
            }

            toast.error('Something went wrong. Please try again.')
        },
        onSuccess: ({sentToEmail}) => {
            toast.success(`${sentToEmail} password changed successfully.`)
            router.push('/sign-in')
        }
    })

    const onSubmit = ({password}: TAuthCredentialsValidator) => {
        mutate({
            email: toEmail,
            password
        })
    }

    return <>
    <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col items-center space-y-2 text-center'>
                <Icons.logo className='h-20 w-20' />
                <h3 className='font-semibold text-2xl'>Change password</h3>
                    {toEmail ? <p className='text-muted-foreground text-center'>
                        Provide Your password for <span className='font-semibold'>{toEmail}</span>.
                        </p> : <p className='text-muted-foreground text-center'>
                            Provide Your password.
                        </p>}

                <Link className={buttonVariants({variant: 'link', className: 'text-muted-foreground gap-1.5'})} href='/sign-in'>
                    Already have an account? Sign-in
                    <ArrowRight className='h-4 w-4' />
                </Link>
            </div>
            <div className='grid gap-6'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid gap-2 mb-52'>
                        <div className='grid gap-1 py-2'>
                            <Label htmlFor="email">Email</Label>
                            <Input {...register("email")}
                            value={toEmail}
                            readOnly
                            className={cn({ 'focus-visible:ring-red-500': errors.email })} />
                            {errors?.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className='grid gap-1 py-2'>
                            <Label htmlFor="password">Password</Label>
                            <Input {...register("password")}
                            type="password"
                             className={cn({'focus-visible:ring-red-500': errors.password,})} placeholder="Password" />
                             {errors?.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
                        </div>
                        <Button>Change password</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
}
export default Page