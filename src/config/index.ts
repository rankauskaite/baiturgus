export const PRODUCT_CATEGORIES = [
    {
        label: 'E-books',
        value: 'e-books' as const,
        href: `/products?category=e-books`,
        imageSrc: '/nav/icons/picks.jpg',
    },
    {
        label: 'Games',
        value: 'games' as const,
        href: `/products?category=games`,
        imageSrc: '/nav/icons/picks.jpg',
    },
    {
        label: '3D models',
        value: '3d-models' as const,
        href: `/products?category=3d-models`,
        imageSrc: '/nav/icons/picks.jpg',
    },
    {
        label: 'Icons',
        value: 'icons' as const,
        href: `/products?category=icons`,
        imageSrc: '/nav/icons/picks.jpg',
    },
    {
        label: 'Music',
        value: 'music' as const,
        href: `/products?category=music`,
        imageSrc: '/nav/icons/picks.jpg',
    },
    {
        label: 'Templates',
        value: 'templates' as const,
        href: `/products?category=templates`,
        imageSrc: '/nav/icons/picks.jpg',
    },
]

const ar = PRODUCT_CATEGORIES

export const NAVBOARD_CATEGORIES = [
    {
        label: 'Discover',
        value: 'discover' as const,
        featured: [
            {
                name: 'Sale',
                href: `/products?category=sale`,
                imageSrc: '/nav/ui-kits/sale.jpg',
            },
            {
                name: 'New Arrivals',
                href: `/products?category=new-arrivals`,
                imageSrc: '/nav/ui-kits/NewArrivals.jpg',
            },
            {
                name: 'Bestsellers',
                href: `/products?category=bestsellers`,
                imageSrc: '/nav/ui-kits/bestsell.jpg',
            },
        ],
    },
    {
        label: 'Categories',
        value: 'categories' as const,
        featured: (
            PRODUCT_CATEGORIES.map(category => ({
                name: category.label,
                href: category.href,
                imageSrc: category.imageSrc,
            }))
        )
    },
]