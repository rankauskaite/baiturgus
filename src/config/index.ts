export const NAVBOARD_CATEGORIES = [
    {
        label: 'Discover',
        value: 'discover' as const,
        featured: [
            {
                name: 'Sale',
                href:'#',
                imageSrc: '/nav/ui-kits/sale.jpg',
            },
            {
                name: 'New Arrivals',
                href:'#',
                imageSrc: '/nav/ui-kits/NewArrivals.jpg',
            },
            {
                name: 'Bestsellers',
                href:'#',
                imageSrc: '/nav/ui-kits/bestsell.jpg',
            },
        ],
    },
    {
        label: 'Categories',
        value: 'categories' as const,
        featured: [
            {
                name: 'E-books',
                href:'#',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Games',
                href:'#',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Music',
                href:'#',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Icons',
                href:'#',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: '3D models',
                href:'#',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Templates',
                href:'#',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
        ],
    },
]

export const PRODUCT_CATEGORIES = [
    {
        label: 'E-books',
        value: 'e-books' as const,
        // featured: [
        //     {
        //         name: 'Sale',
        //         href:'#',
        //         imageSrc: '/nav/ui-kits/sale.jpg',
        //     },
        //     {
        //         name: 'New Arrivals',
        //         href:'#',
        //         imageSrc: '/nav/ui-kits/NewArrivals.jpg',
        //     },
        //     {
        //         name: 'Bestsellers',
        //         href:'#',
        //         imageSrc: '/nav/ui-kits/bestsell.jpg',
        //     },
        // ],
    },
    {
        label: 'Games',
        value: 'games' as const,
        // featured: [
        //     {
        //         name: 'Favorite Icon Pics',
        //         href:'#',
        //         imageSrc: '/nav/icons/picks.jpg',
        //     },
        //     {
        //         name: 'New Arrivals',
        //         href:'#',
        //         imageSrc: '/nav/icons/new.jpg',
        //     },
        //     {
        //         name: 'Bestselling Icons',
        //         href:'#',
        //         imageSrc: '/nav/icons/bestsellers.jpg',
        //     },
        // ],
    },
    {
        label: '3D models',
        value: '3d-models' as const
    },
    {
        label: 'Icons',
        value: 'icons' as const
    },
    {
        label: 'Music',
        value: 'music' as const
    },
    {
        label: 'Templates',
        value: 'templates' as const
    },
]