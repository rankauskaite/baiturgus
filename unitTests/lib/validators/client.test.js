const { createTRPCReact } = require("@trpc/react-query");

// Validator function
const validateAppRouter = (router) => {
  return typeof router === "object" && Object.keys(router).length > 0
    ? router
    : null;
};

// Example routers
const validRouter = {
  someRoute: () => Promise.resolve("Valid route"),
};

const invalidRouter = {};

describe('AppRouter Validator', () => {
    it('should accept a router with async route handlers', () => {
      const asyncRouter = {
        asyncRoute: async () => {
          return await Promise.resolve("Async Route");
        },
      };
  
      // Create TRPC with a router having async route handlers
      const trpc = createTRPCReact(validateAppRouter(asyncRouter));
  
      // Expectation: TRPC creation should not throw an error
      expect(trpc).toBeDefined();
    });
  
    it('should accept a router with non-empty route parameters', () => {
      const paramRouter = {
        userRoute: (userId) => Promise.resolve(`User Route ${userId}`),
      };
  
      // Create TRPC with a router having non-empty route parameters
      const trpc = createTRPCReact(validateAppRouter(paramRouter));
  
      // Expectation: TRPC creation should not throw an error
      expect(trpc).toBeDefined();
    });
  });
  
  
