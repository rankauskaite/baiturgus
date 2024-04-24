import { AuthCredentialsValidator } from '../../../src/lib/validators/account-credentials-validator';
import { z } from "zod";

describe('AuthCredentialsValidator', () => {

  it('should throw error for missing email and password', () => {
    const invalidCredentials = {};

    expect(() => {
      AuthCredentialsValidator.parse(invalidCredentials);
    }).toThrow(z.ZodError);
  });

  it('should throw error for empty email and password', () => {
    const invalidCredentials = {
      email: '',
      password: ''
    };

    expect(() => {
      AuthCredentialsValidator.parse(invalidCredentials);
    }).toThrow(z.ZodError);
  });

  it('should throw error for null email and password', () => {
    const invalidCredentials = {
      email: null,
      password: null
    };

    expect(() => {
      AuthCredentialsValidator.parse(invalidCredentials);
    }).toThrow(z.ZodError);
  });

  it('should throw error for invalid email and valid password', () => {
    const invalidCredentials = {
      email: 'invalidemail',
      password: 'StrongPassword123'
    };

    expect(() => {
      AuthCredentialsValidator.parse(invalidCredentials);
    }).toThrow(z.ZodError);
  });

  it('should throw error for valid email and invalid password', () => {
    const invalidCredentials = {
      email: 'example@example.com',
      password: 'weak'
    };

    expect(() => {
      AuthCredentialsValidator.parse(invalidCredentials);
    }).toThrow(z.ZodError);
  });

  it('should throw error for invalid email and invalid password', () => {
    const invalidCredentials = {
      email: 'invalidemail',
      password: 'weak'
    };

    expect(() => {
      AuthCredentialsValidator.parse(invalidCredentials);
    }).toThrow(z.ZodError);
  });

  it('should throw error for email of excessive length', () => {
    const invalidCredentials = {
      email: 'a'.repeat(255) + '@example.com',
      password: 'StrongPassword123'
    };

    expect(() => {
      AuthCredentialsValidator.parse(invalidCredentials);
    }).toThrow(z.ZodError);
  });

  it('should throw error for password of excessive length', () => {
    const invalidCredentials = {
      email: 'example@example.com',
      password: 'a'.repeat(256)
    };

    expect(() => {
      AuthCredentialsValidator.parse(invalidCredentials);
    }).toThrow(z.ZodError);
  });

  it('should throw error for email containing leading/trailing spaces', () => {
    const invalidCredentials = {
      email: '  example@example.com  ',
      password: 'StrongPassword123'
    };

    expect(() => {
      AuthCredentialsValidator.parse(invalidCredentials);
    }).toThrow(z.ZodError);
  });
});
