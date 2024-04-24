const validator = require('../../../src/lib/validators/products-validator');

describe('Data Validator', () => {
    it('Valid data passes validation', () => {
        const validData = {
            name: 'Sample Product',
            price: 99.99,
            // Add more valid fields here for testing...
        };

        const validationResult = validator.validateData(validData);

        expect(validationResult.isValid).toBe(true);
        expect(validationResult.errors).toBeUndefined();
    });

    it('Empty name fails validation', () => {
        const invalidData = {
            name: '',
            price: 99.99,
            // Add more valid fields here for testing...
        };

        const validationResult = validator.validateData(invalidData);

        expect(validationResult.isValid).toBe(false);
        expect(validationResult.errors).toContain('Name must be a non-empty string.');
    });

    it('Price below 0 fails validation', () => {
        const invalidData = {
            name: 'Sample Product',
            price: -5,
            // Add more valid fields here for testing...
        };

        const validationResult = validator.validateData(invalidData);

        expect(validationResult.isValid).toBe(false);
        expect(validationResult.errors).toContain('Price must be a number between 0 and 1000.');
    });

    it('Price above 1000 fails validation', () => {
        const invalidData = {
            name: 'Sample Product',
            price: 1500,
            // Add more valid fields here for testing...
        };

        const validationResult = validator.validateData(invalidData);

        expect(validationResult.isValid).toBe(false);
        expect(validationResult.errors).toContain('Price must be a number between 0 and 1000.');
    });

    it('Valid data with max price passes validation', () => {
        const validData = {
            name: 'Sample Product',
            price: 1000,
            // Add more valid fields here for testing...
        };

        const validationResult = validator.validateData(validData);

        expect(validationResult.isValid).toBe(true);
        expect(validationResult.errors).toBeUndefined();
    });

    it('Valid data with missing optional fields passes validation', () => {
        const validData = {
            name: 'Sample Product',
            price: 99.99,
            // Optional fields omitted
        };

        const validationResult = validator.validateData(validData);

        expect(validationResult.isValid).toBe(true);
        expect(validationResult.errors).toBeUndefined();
    });

    it('Valid data with all optional fields passes validation', () => {
        const validData = {
            name: 'Sample Product',
            price: 99.99,
            description: 'Sample description',
            category: 'Sample category',
            // Add more optional fields here for testing...
        };

        const validationResult = validator.validateData(validData);

        expect(validationResult.isValid).toBe(true);
        expect(validationResult.errors).toBeUndefined();
    });
    
    it('Valid category passes validation', () => {
        const validData = {
            name: 'Sample Product',
            price: 99.99,
            category: 'Valid category',
            // Add more valid fields here for testing...
        };

        const validationResult = validator.validateData(validData);

        expect(validationResult.isValid).toBe(true);
        expect(validationResult.errors).toBeUndefined();
    });

    it('Valid data with maximum number of images passes validation', () => {
        const validData = {
            name: 'Sample Product',
            price: 99.99,
            images: [
                { url: 'image1.jpg' },
                { url: 'image2.jpg' },
                { url: 'image3.jpg' },
                { url: 'image4.jpg' },
            ],
            // Add more valid fields here for testing...
        };

        const validationResult = validator.validateData(validData);

        expect(validationResult.isValid).toBe(true);
        expect(validationResult.errors).toBeUndefined();
    });

    // Add more tests for different validation scenarios...
});
