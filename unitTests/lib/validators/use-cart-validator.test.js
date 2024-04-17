import { UseCartValidator } from '../../../src/lib/validators/use-cart-validator'; // Update the path accordingly

describe('UseCartValidator', () => {
  it('should validate the useCart store successfully', () => {
    const validCart = {
      items: [{ product: { id: '1', name: 'Product 1', price: 10 } }],
      addItem: (product) => {},
      removeItem: (id) => {},
      clearCart: () => {},
    };

    expect(() => UseCartValidator.parse(validCart)).not.toThrow();
  });

  it('should throw error for invalid cart with missing items', () => {
    const invalidCart = {
      addItem: (product) => {},
      removeItem: (id) => {},
      clearCart: () => {},
    };

    expect(() => UseCartValidator.parse(invalidCart)).toThrowError();
  });

  it('should throw error for invalid cart with missing functions', () => {
    const invalidCart = {
      items: [{ product: { id: '1', name: 'Product 1', price: 10 } }],
    };

    expect(() => UseCartValidator.parse(invalidCart)).toThrowError();
  });

  // Add more test cases for other scenarios
});
