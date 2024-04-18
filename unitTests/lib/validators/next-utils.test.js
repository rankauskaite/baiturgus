const validatePort = require('../../../src/lib/validators/next-utils-validator');

describe('validatePort function', () => {
    it('valid port number should pass', () => {
      expect(validatePort(3000)).toBe(true);
    });
  
    it('port number below range should throw error', () => {
      expect(() => {
        validatePort(0);
      }).toThrow('Port number must be between 1 and 65535');
    });
  
    it('port number above range should throw error', () => {
      expect(() => {
        validatePort(70000);
      }).toThrow('Port number must be between 1 and 65535');
    });
  
    it('non-integer port number should throw error', () => {
      expect(() => {
        validatePort(3000.5);
      }).toThrow('Port number must be an integer');
    });
  
    it('non-number port should throw error', () => {
      expect(() => {
        validatePort('abc');
      }).toThrow('Port must be a number');
    });
  
    it('negative port number should throw error', () => {
      expect(() => {
        validatePort(-3000);
      }).toThrow('Port number must be between 1 and 65535');
    });
  
    it('port number equal to 1 should pass', () => {
      expect(validatePort(1)).toBe(true);
    });
  
    it('port number equal to 65535 should pass', () => {
      expect(validatePort(65535)).toBe(true);
    });
  
    it('port number equal to 65536 should throw error', () => {
      expect(() => {
        validatePort(65536);
      }).toThrow('Port number must be between 1 and 65535');
    });
  
    it('port number as a string containing a non-number should throw error', () => {
      expect(() => {
        validatePort('abc');
      }).toThrow('Port must be a number');
    });
  });
  