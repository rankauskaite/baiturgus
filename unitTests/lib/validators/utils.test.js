import { UtilsValidator } from '../../../src/lib/validators/utils-validator'; // Update the path accordingly

describe('UtilsValidator', () => {
    it('should validate input data successfully', () => {
      const validData = {
        cnInputs: ['text-red-500', 'bg-blue-500', 'p-4'],
        formatPrice: {
          price: 1000.5,
          options: { currency: 'USD', notation: 'compact' }
        },
        constructMetadata: {
          title: 'Test Title',
          description: 'Test Description',
          image: '/test-image.png',
          icons: '/test-icon.ico',
          noIndex: true
        }
      };
  
      expect(() => UtilsValidator.parse(validData)).not.toThrow();
    });
  
    it('should throw error for invalid input data', () => {
      const invalidData = {
        // Invalid cnInputs
        cnInputs: ['text-red-500', { 'bg-blue-500': true }, 'p-4'],
        // Invalid formatPrice
        formatPrice: {
          price: '2000.75',
          options: { currency: 'EUR', notation: 'invalid' }
        },
        // Invalid constructMetadata
        constructMetadata: {
          title: 'Test Title',
          description: 'Test Description',
          image: '/test-image.png',
          icons: '/test-icon.ico',
          noIndex: 'true' // Should be a boolean, not a string
        }
      };
  
      expect(() => UtilsValidator.parse(invalidData)).toThrowError();
    });



    
});
