import { ExpressAppValidator } from '../../../src/lib/validators/server-validator';

describe('Express App Validator', () => {
//   it('should validate the express app configuration successfully', () => {
//     const validConfig = {
//       PORT: 3000,
//       createContext: () => ({ req: {}, res: {} }),
//       WebhookRequest: { rawBody: 'exampleRawBody' },
//       start: () => {},
//     };

//     expect(() => ExpressAppValidator.parse(validConfig)).not.toThrow();
//   });

  it('should throw an error for invalid configuration', () => {
    const invalidConfig = {
      PORT: 'invalidPort', // Invalid PORT type
      createContext: 'invalidCreateContext', // Invalid createContext type
      WebhookRequest: {}, // Missing required rawBody property
      start: 123, // Invalid start function type
    };

    expect(() => ExpressAppValidator.parse(invalidConfig)).toThrowError();
  });
});
