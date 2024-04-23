import { isAdminOrHasAccessToImagesValidator } from '../../../src/lib/validators/media-validator'; // Update the path accordingly

describe('Media Validator', () => {
    it('should return false for undefined user', async () => {
      const req = {
        user: undefined,
      };
  
      const result = await isAdminOrHasAccessToImagesValidator(req);
  
      expect(result).toBe(false);
    });
  
    it('should return true for admin user', async () => {
      const req = {
        user: {
          role: 'admin',
        },
      };
  
      const result = await isAdminOrHasAccessToImagesValidator(req);
  
      expect(result).toBe(true);
    });
  
    it('should return access rules for non-admin user', async () => {
      const req = {
        user: {
          id: 'user_id',
          role: 'user',
        },
      };
  
      const result = await isAdminOrHasAccessToImagesValidator(req);
  
      expect(result).toEqual({
        user: {
          equals: 'user_id',
        },
      });
    });
});
