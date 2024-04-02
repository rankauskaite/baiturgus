"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAVBOARD_CATEGORIES = exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: 'E-books',
        value: 'e-books',
        href: "/products?category=e-books",
        imageSrc: '/nav/icons/e_books.png',
    },
    {
        label: 'Games',
        value: 'games',
        href: "/products?category=games",
        imageSrc: '/nav/icons/games.jpg',
    },
    {
        label: '3D models',
        value: '3d-models',
        href: "/products?category=3d-models",
        imageSrc: '/nav/icons/3d.jpg',
    },
    {
        label: 'Icons',
        value: 'icons',
        href: "/products?category=icons",
        imageSrc: '/nav/icons/cat.jpg',
    },
    {
        label: 'Music',
        value: 'music',
        href: "/products?category=music",
        imageSrc: '/nav/icons/music.jpg',
    },
    {
        label: 'Templates',
        value: 'templates',
        href: "/products?category=templates",
        imageSrc: '/nav/icons/skull.jpg',
    },
];
var ar = exports.PRODUCT_CATEGORIES;
exports.NAVBOARD_CATEGORIES = [
    {
        label: 'Discover',
        value: 'discover',
        featured: [
            {
                name: 'Sale',
                href: "/products?category=sale",
                imageSrc: '/nav/ui-kits/sale.jpg',
            },
            {
                name: 'New Arrivals',
                href: "/products?category=new-arrivals",
                imageSrc: '/nav/ui-kits/NewArrivals.jpg',
            },
            {
                name: 'Bestsellers',
                href: "/products?category=bestsellers",
                imageSrc: '/nav/ui-kits/bestsell.jpg',
            },
        ],
    },
    {
        label: 'Categories',
        value: 'categories',
        featured: (exports.PRODUCT_CATEGORIES.map(function (category) { return ({
            name: category.label,
            href: category.href,
            imageSrc: category.imageSrc,
        }); }))
    },
];
