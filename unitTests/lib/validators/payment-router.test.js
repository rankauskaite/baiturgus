const {
    validateCreateSessionInput,
    validateCreateSessionOutput,
    validatePollOrderStatusInput,
    validatePollOrderStatusOutput,
} = require('../../../src/lib/validators/payment-router-validator'); // Import your validator functions

describe('Validator Tests', () => {
    describe('createSession input validation', () => {
        it('Missing productIds', () => {
            const inputData = { };
            expect(() => validateCreateSessionInput(inputData)).toThrow();
        });

        test('Invalid productIds type', () => {
            const inputData = { productIds: '123' };
            expect(() => validateCreateSessionInput(inputData)).toThrow();
        });
    });

    describe('createSession output validation', () => {
        it('Invalid output type', () => {
            const outputData = { url: 123 };
            expect(() => validateCreateSessionOutput(outputData)).toThrow();
        });
    });

    describe('pollOrderStatus input validation', () => {
        it('Missing orderId', () => {
            const inputData = { };
            expect(() => validatePollOrderStatusInput(inputData)).toThrow();
        });

        it('Invalid orderId type', () => {
            const inputData = { orderId: 123 };
            expect(() => validatePollOrderStatusInput(inputData)).toThrow();
        });
    });

    describe('pollOrderStatus output validation', () => {
        it('Invalid output type', () => {
            const outputData = { isPaid: 'true' };
            expect(() => validatePollOrderStatusOutput(outputData)).toThrow();
        });
    });
});
