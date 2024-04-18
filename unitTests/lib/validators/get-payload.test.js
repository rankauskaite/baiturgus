import { validateData } from '../../../src/lib/validators/get-payload-validator';

describe("Validator Tests", () => {
    describe("validateData", () => {

        it("should return invalid result when RESEND_API_KEY is missing", () => {
            process.env.RESEND_API_KEY = ""; // Simulate missing RESEND_API_KEY
            const validationResult = validateData({});
            expect(validationResult.isValid).toBe(false);
            expect(validationResult.errors).toContain("RESEND_API_KEY is missing in .env file");
        });

        it("should return invalid result when PAYLOAD_SECRET is missing", () => {
            process.env.RESEND_API_KEY = "some value"; // Simulate RESEND_API_KEY being set
            process.env.PAYLOAD_SECRET = ""; // Simulate missing PAYLOAD_SECRET
            const validationResult = validateData({});
            expect(validationResult.isValid).toBe(false);
            expect(validationResult.errors).toContain("PAYLOAD_SECRET is missing in .env file");
        });
    });
});