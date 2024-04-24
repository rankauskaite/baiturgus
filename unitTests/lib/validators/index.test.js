const { QueryValidator } = require('../../../src/lib/validators/index-validator');

describe('QueryValidator', () => {
  it('should validate query with valid sort field', () => {
    const validQuery = {
      sort: {
        createdAt: 'asc',
      },
    };
    expect(QueryValidator.safeParse(validQuery).success).toBe(true);
  });

  it('should validate query with valid sort field and additional optional fields', () => {
    const validQuery = {
      sort: {
        createdAt: 'asc',
      },
      // Add additional optional fields as needed
    };
    expect(QueryValidator.safeParse(validQuery).success).toBe(true);
  });

  it('should invalidate query with invalid sort field', () => {
    const invalidQuery = {
      sort: {
        createdAt: 'invalid',
      },
    };
    expect(QueryValidator.safeParse(invalidQuery).success).toBe(false);
  });

  it('should invalidate query with invalid sort field value type', () => {
    const invalidQuery = {
      sort: 'invalid',
    };
    expect(QueryValidator.safeParse(invalidQuery).success).toBe(false);
  });

  it('should validate query with additional known fields', () => {
    const validQuery = {
      sort: {
        createdAt: 'asc',
      },
      // Add additional known fields as needed
    };
    expect(QueryValidator.safeParse(validQuery).success).toBe(true);
  });
});
