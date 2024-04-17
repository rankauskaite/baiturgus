// Import the QueryValidator from the schema file
import { QueryValidator } from '../../../src/lib/validators/query-validator'; // Adjust the path as necessary

// Describe block defines a test suite for QueryValidator
describe('QueryValidator', () => {
  test('should accept valid inputs', () => {
    const result = QueryValidator.safeParse({
      category: 'electronics',
      sort: 'asc',
      limit: 10
    });
    expect(result.success).toBe(true);
  });

  test('should accept empty inputs', () => {
    const result = QueryValidator.safeParse({});
    expect(result.success).toBe(true);
  });

  test('should accept only category', () => {
    const result = QueryValidator.safeParse({
      category: 'books'
    });
    expect(result.success).toBe(true);
  });

  test('should accept only sort', () => {
    const result = QueryValidator.safeParse({
      sort: 'desc'
    });
    expect(result.success).toBe(true);
  });

  test('should accept only limit', () => {
    const result = QueryValidator.safeParse({
      limit: 20
    });
    expect(result.success).toBe(true);
  });

  test('should reject invalid sort value', () => {
    const result = QueryValidator.safeParse({
      sort: 'ascending' // Incorrect sort value
    });
    expect(result.success).toBe(false);
    expect(result.error.errors[0].message).toContain("Invalid enum value.");
  });

  test('should reject negative limit', () => {
    const result = QueryValidator.safeParse({
      limit: -5 // Invalid limit because it's negative
    });
    expect(result.success).toBe(false);
    expect(result.error.errors[0].message).toContain("Number must be greater than or equal to 0");
  });

  test('should handle non-integer limit', () => {
    const result = QueryValidator.safeParse({
      limit: 3.5 // Non-integer, expecting an integer
    });
    expect(result.success).toBe(false);
    expect(result.error.errors[0].message).toContain("Expected integer, received float");
  });
});

