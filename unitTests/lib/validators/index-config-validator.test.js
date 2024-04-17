import { IndexConfigValidator } from '../../../src/lib/validators/index-config-validator';

describe('Index Config Validator', () => {
  const PRODUCT_CATEGORIES = [
    {
      label: 'E-books',
      value: 'e-books',
      href: `/products?category=e-books`,
      imageSrc: '/nav/icons/e_books.png',
    },
    // Add more product categories as needed
  ];

  const NAVBOARD_CATEGORIES = [
    {
      label: 'Discover',
      value: 'discover',
      featured: [
        {
          name: 'Sale',
          href: `/products?category=sale`,
          imageSrc: '/nav/ui-kits/sale.jpg',
        },
        // Add more featured items as needed
      ],
    },
    // Add more navboard categories as needed
  ];

  it('should validate the index config successfully', () => {
    expect(() => IndexConfigValidator.parse({ PRODUCT_CATEGORIES, NAVBOARD_CATEGORIES })).not.toThrow();
  });

  it('should throw an error if PRODUCT_CATEGORIES is invalid', () => {
    // Modify PRODUCT_CATEGORIES to make it invalid for testing
    const invalidProductCategories = [...PRODUCT_CATEGORIES, { invalidProperty: 'invalidValue' }];

    expect(() => IndexConfigValidator.parse({ PRODUCT_CATEGORIES: invalidProductCategories, NAVBOARD_CATEGORIES })).toThrowError();
  });

  it('should throw an error if NAVBOARD_CATEGORIES is invalid', () => {
    // Modify NAVBOARD_CATEGORIES to make it invalid for testing
    const invalidNavboardCategories = [...NAVBOARD_CATEGORIES, { invalidProperty: 'invalidValue' }];

    expect(() => IndexConfigValidator.parse({ PRODUCT_CATEGORIES, NAVBOARD_CATEGORIES: invalidNavboardCategories })).toThrowError();
  });
});
