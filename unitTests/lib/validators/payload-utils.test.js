import { parseToken, formatUser } from '../../../src/lib/payload-utils';

describe('Payload Utilities', () => {
    describe('parseToken', () => {
      it('should extract a token from an Authorization header', () => {
        const token = '12345';
        const header = `Bearer ${token}`;
        expect(parseToken(header)).toBe(token);
      });
  
      it('should return undefined if the header format is incorrect', () => {
        const header = 'Bearer';
        expect(parseToken(header)).toBe(undefined);
      });
    });
  
    describe('formatUser', () => {
      it('should format user data into a string', () => {
        const user = { name: 'John', id: '001' };
        expect(formatUser(user)).toBe('John#001');
      });
  
      it('should throw an error for invalid user data', () => {
        const user = { name: 'John' }; // Missing id
        expect(() => formatUser(user)).toThrow("Invalid user data");
      });
    });
  });
