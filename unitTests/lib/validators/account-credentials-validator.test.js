import { AuthCredentialsValidator } from '../../../src/lib/validators/account-credentials-validator'; // Update the path accordingly

describe('AuthCredentialsValidator', () => {
    it('should validate email and password successfully', () => {
      const validCredentials = {
        email: 'test@example.com',
        password: 'Password1!',
      };
  
      expect(() => AuthCredentialsValidator.parse(validCredentials)).not.toThrow();
    });
  
    it('should throw error for invalid email', () => {
      const invalidCredentials = {
        email: 'invalid-email',
        password: 'Password1!',
      };
  
      expect(() => AuthCredentialsValidator.parse(invalidCredentials)).toThrowError(
        /email/,
      );
    });
  
    it('should throw error for invalid password (too short)', () => {
      const invalidCredentials = {
        email: 'test@example.com',
        password: 'invalid',
      };
  
      expect(() => AuthCredentialsValidator.parse(invalidCredentials)).toThrowError(
        /Password must be at least 8 characters long/,
      );
    });

    it('should throw error for invalid password (uppercar letter)', () => {
        const invalidCredentials = {
          email: 'test@example.com',
          password: 'invalid1!',
        };
    
        expect(() => AuthCredentialsValidator.parse(invalidCredentials)).toThrowError(
          /Password must contain at least one uppercase letter./,
        );
    });

    it('should throw error for invalid password (lowercase letter)', () => {
        const invalidCredentials = {
          email: 'test@example.com',
          password: 'INVALID1!',
        };
    
        expect(() => AuthCredentialsValidator.parse(invalidCredentials)).toThrowError(
          /Password must contain at least one lowercase letter./,
        );
    });

    it('should throw error for invalid password (number)', () => {
        const invalidCredentials = {
          email: 'test@example.com',
          password: 'Invalid.!',
        };
    
        expect(() => AuthCredentialsValidator.parse(invalidCredentials)).toThrowError(
          /Password must contain at least one number./,
        );
    });

    it('should throw error for invalid password (special character)', () => {
        const invalidCredentials = {
          email: 'test@example.com',
          password: 'Invalid123',
        };
    
        expect(() => AuthCredentialsValidator.parse(invalidCredentials)).toThrowError(
          /Password must contain at least one special character./,
        );
    });
  });