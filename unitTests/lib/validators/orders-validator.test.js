// orders-validator.test.ts
import { OrdersValidator } from '../../../src/lib/validators/orders-validator'; // Update the path accordingly

describe('OrdersValidator', () => {
  it('should validate orders successfully', () => {
    const validOrder = {
      user: { id: "user_id", role: "user" },
      _isPaid: true,
      products: ["product_id1", "product_id2"],
    };

    expect(() => OrdersValidator.parse(validOrder)).not.toThrow();
  });

  it('should throw error for invalid order', () => {
    const invalidOrder = {
      // Missing user
      _isPaid: true,
      products: ["product_id1", "product_id2"],
    };

    expect(() => OrdersValidator.parse(invalidOrder)).toThrowError();

    // Add more test cases for other invalid scenarios
  });
});
