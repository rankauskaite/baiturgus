import { StripeValidator } from '../../../src/lib/validators/stripe-validator'; // Update the path accordingly

describe('StripeValidator', () => {
    it('should validate environment variables successfully', () => {
      const validEnv = {
        STRIPE_SECRET_KEY: "valid_secret_key"
      };
  
      expect(() => StripeValidator.parse(validEnv)).not.toThrow();
    });
  
    it('should throw error for missing or empty STRIPE_SECRET_KEY', () => {
      const invalidEnv = {
        // Missing STRIPE_SECRET_KEY
      };
  
      expect(() => StripeValidator.parse(invalidEnv)).toThrowError();
  
      const emptySecretKeyEnv = {
        STRIPE_SECRET_KEY: ""
      };
  
      expect(() => StripeValidator.parse(emptySecretKeyEnv)).toThrowError();
    });
});
