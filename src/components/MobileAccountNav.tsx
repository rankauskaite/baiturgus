'use client'

import { NAVBOARD_CATEGORIES } from '@/config'
import { useAuth } from '@/hooks/use-auth'
import { User } from '@/payload-types'
import { Menu, ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useCart } from '@/hooks/use-cart'

const MobileAccountNav = ({user}: {user: User}) => {
    const {signOut} = useAuth()

    const {items} = useCart()
    const itemCount = items.length

    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const pathname = usePathname()

    // whenever we click an item in the menu and navigate away, we want to close the menu
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // when we click the path we are currently on, we still want the mobile menu to close,
    // however we cant rely on the pathname for it because that won't change (we're already there)
    const closeOnCurrent = (href: string) => {
        if (pathname === href) {
        setIsOpen(false)
        }
    }

    // remove second scrollbar when mobile menu is open
    useEffect(() => {
        if (isOpen)
        document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden')
    }, [isOpen])

    if (!isOpen) 
        return (
        <button
            type='button'
            onClick={() => setIsOpen(true)}
            className='lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-pink-500'>
            <Menu className='h-6 w-6' aria-hidden='true' />
        </button>
        )

        return (
        <div>
        <div className='relative z-40 lg:hidden'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
        </div>

        <div className='lg:hidden fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex'>
            <div className='w-4/5'>
            <div className='relative flex w-full max-w-sm flex-col overflow-y-auto bg-pink-50 pb-12 shadow-xl'>
                <div className='flex px-4 pb-2 pt-5'>
                <button
                    type='button'
                    onClick={() => setIsOpen(false)}
                    className='relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-pink-500'>
                    <X className='h-6 w-6' aria-hidden='true' />
                </button>
                </div>

                <div className='px-4 pb-8 pt-5 bg-pink-100'>
                    <p className='text-muted-foreground text-sm'>Account</p>
                    <div className='flex items-center justify-end'>
                        <p className='font-medium text-sm text-black mr-auto'>
                            {user.email}
                        </p>
                        <span className='h-6 w-px mr-10 ml-5 bg-pink-400' aria-hidden='true'/>
                        <Link onClick={() => closeOnCurrent('/cart')} href='/cart'>
                            <ShoppingCart aria-hidden='true' className='h-6 w-6 mr-2 flex-shrink-0 text-pink-500 group-hover:text-pink-600'/>
                        </Link>
                        <span className='text-sm font-medium text-gray-700 group-hover:text-gray-800 pr-5'>
                            {isMounted ? itemCount : 0}
                        </span>
                    </div>

                </div>

                <div className='mt-2'>
                <ul>
                    {NAVBOARD_CATEGORIES.map((category) => (
                    <li
                        key={category.label}
                        className='space-y-5 px-4 pb-8 pt-5'>
                        <div className='border-b border-pink-300'>
                        <div className='-mb-px flex'>
                            <p className='border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 py-4 text-base font-medium'>
                            {category.label}
                            </p>
                        </div>
                        </div>

                        <div className='grid grid-cols-2 gap-y-10 gap-x-4'>
                        {category.featured.map((item) => (
                            <div
                            key={item.name}
                            className='group relative text-sm'>
                            <div className='relative aspect-square overflow-hidden rounded-lg group-hover:opacity-75'>
                                <Image
                                fill
                                src={item.imageSrc}
                                alt='product category image'
                                className='object-cover object-center'
                                />
                            </div>
                            <Link
                                href={item.href}
                                className='mt-6 block font-medium text-gray-900'>
                                {item.name}
                            </Link>
                            </div>
                        ))}
                        </div>
                    </li>
                    ))}
                </ul>
                </div>

                <div className='space-y-6 border-t border-pink-300 px-4 py-6 bg-pink-100'>
                <div className='flow-root'>
                    <Link
                    onClick={() => closeOnCurrent('/sell')}
                    href='/sell'
                    className='-m-2 block p-2 font-medium text-gray-900'>
                    Seller Dashboard
                    </Link>
                </div>
                <div className='flow-root'>
                    <Button onClick={signOut} variant='default' size='default' className='w-full font-medium bg-pink-300 text-gray-700'>
                        Log out
                    </Button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
  )
}

export default MobileAccountNav