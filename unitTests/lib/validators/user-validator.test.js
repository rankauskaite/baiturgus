import { UserValidator } from '../../../src/lib/validators/user-validator'; // Update the path accordingly

describe('UserValidator', () => {
    it('should validate user data successfully', () => {
      const validUserData = {
        products: ['product1', 'product2'],
        product_files: ['file1', 'file2'],
        role: 'admin',
      };
  
      expect(() => UserValidator.parse(validUserData)).not.toThrow();
    });
  
    it('should throw error for invalid user data', () => {
      const invalidUserData = {
        // Missing products
        product_files: ['file1', 'file2'],
        role: 'user',
      };
  
      expect(() => UserValidator.parse(invalidUserData)).toThrowError();
    });
});
