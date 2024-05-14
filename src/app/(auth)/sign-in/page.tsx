"use client"

import { Icons } from "@/components/Icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator"
import { trpc } from "@/trpc/client"
import { toast } from "sonner"
import { ZodError } from "zod"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const Page = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const isSeller = searchParams.get('as') === 'seller'
    const origin = searchParams.get('origin')

    const [showPassword, setShowPassword] = useState(false);

    const revealPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const continueAsSeller = () => {
        router.push("?as=seller")
    }
    const continueAsBuyer = () => {
        router.replace('/sign-in', undefined)
    }

    const { register, handleSubmit, formState: {errors},} = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    })

    const {mutate: signIn, isLoading} = trpc.auth.signIn.useMutation({
        onSuccess: () => {
            toast.success("Signed in successfully")

            router.refresh()

            if(origin) {
                router.push(`/${origin}`)
            }

            if(isSeller) {
                router.push('/sell')
            }

            router.push('/')
        },
        onError: (err) => {
            if(err.data?.code === "UNAUTHORIZED") {
                toast.error("Invalid email or password.")
            }
        }
    })

    const onSubmit = ({email, password}: TAuthCredentialsValidator) => {
        signIn({
            email, password
        })
    }

    return <>
    <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col items-center space-y-2 text-center'>
                <Icons.logo className='h-20 w-20' />
                <h1 className='text-2xl font-bold'>
                    Sign in to Your {isSeller ? "seller" : ''} {' '}account
                </h1>

                <Link className={buttonVariants({variant: 'link', className: 'text-muted-foreground gap-1.5'})} href='/sign-up'>
                    Don&apos;t have an account?
                    <ArrowRight className='h-4 w-4' />
                </Link>
            </div>
            <div className='grid gap-6'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid gap-2'>
                        <div className='grid gap-1 py-2'>
                            <Label htmlFor="email">Email</Label>
                            <Input {...register("email")}
                             className={cn({'focus-visible:ring-red-500': errors.email,})} placeholder="you@example.com" />
                             {errors?.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className='relative grid gap-1 py-2'>
                            <Label htmlFor='password'>Password</Label>
                            <Input
                                {...register('password')}
                                type={showPassword ? 'text' : 'password'}
                                className={cn({ 'focus-visible:ring-red-500': errors.password })}
                                placeholder='Password'
                            />
                            {errors?.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
                            <div className='absolute w-5 h-5 top-8 right-3 transform translate-y-0.5' onClick={revealPassword}>
                                {showPassword ? <Eye className='text-pink-500' /> : <EyeOff className='text-pink-400' />}
                            </div>
                        </div>
                        <Link href={"/forgot-password"} className='hidden text-right text-sm font-medium text-pink-600 hover:text-pink-500 md:block'>
                            Forgot password? <span aria-hidden='true'>&rarr;</span>
                        </Link>
                        <Button>Sign in</Button>
                    </div>
                </form>
                <div className='relative'>
                    <div aria-hidden='true' className='absolute inset-0 flex items-center'>
                        <span className='w-full border-t' />
                    </div>
                    <div className='relative flex justify-center text-xs uppercase'>
                        <span className='bg-background px-2 text-muted-foreground'>
                            or
                        </span>
                    </div>
                </div>
                {isSeller ? (
                    <Button onClick={continueAsBuyer} variant='secondary' disabled={isLoading}>
                        Continue as customer
                    </Button>
                ) : (
                    <Button onClick={continueAsSeller} variant='secondary' disabled={isLoading}>
                        Continue as seller
                    </Button>
                )}
            </div>
        </div>
    </div>
    </>
}
export default Page