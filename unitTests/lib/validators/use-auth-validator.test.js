const { UseAuthValidator } = require('../../../src/lib/validators/use-auth-validator'); // Update the path accordingly

describe('UseAuthValidator', () => {
  it('should validate the useAuth function successfully', () => {
    const validUseAuth = {
      signOut: () => {},
    };

    expect(() => UseAuthValidator.parse(validUseAuth)).not.toThrow();
  });

  it('should throw error for missing signOut function', () => {
    const invalidUseAuth = {};

    expect(() => UseAuthValidator.parse(invalidUseAuth)).toThrowError();
  });

  it('should throw error if signOut is not a function', () => {
    const invalidUseAuth = {
      signOut: 'not a function',
    };

    expect(() => UseAuthValidator.parse(invalidUseAuth)).toThrowError();
  });



});
