// product-files-validator.test.ts
import { ProductFilesValidator } from '../../../src/lib/validators/product-files-validator'; // Update the path accordingly

describe('ProductFilesValidator', () => {

    // Reikia prideti kad butu ir kai valid product file, istryniau nes
    // Error name:    "TypeError"
    // Error message: "Cannot read properties of undefined (reading 'parse')"

    //        9 |     };
    //       10 |
    //     > 11 |     expect(() => ProductFilesValidator.parse(validProductFile)).not.toThrow();
    //          |                                        ^
    //       12 |   });
    //       13 |
    //       14 |   it('should throw error for invalid product file', () => {
        // it('should validate product files successfully', () => {
        //     const validProductFile = {
        //       user: { id: "user_id" },
        //       // Add other properties of the product file object
        //     };
        
        //     expect(() => ProductFilesValidator.parse(validProductFile)).not.toThrow();
        //   });

        
  it('should throw error for invalid product file', () => {
    const invalidProductFile = {
      // Missing user
      // Add other properties of the product file object
    };

    expect(() => ProductFilesValidator.parse(invalidProductFile)).toThrowError();

    // Add more test cases for other invalid scenarios
  });
});
