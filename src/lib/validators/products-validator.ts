interface ValidationResult {
    isValid: boolean;
    errors?: string[];
}

function validateData(data: any): ValidationResult {
    const errors: string[] = [];

    // Validate data types, field requirements, access control, relationships, etc.
    // Implement your validation logic here.

    // Example validation:
    if (typeof data.name !== 'string' || data.name.trim() === '') {
        errors.push('Name must be a non-empty string.');
    }

    if (typeof data.price !== 'number' || data.price < 0 || data.price > 1000) {
        errors.push('Price must be a number between 0 and 1000.');
    }

    // Implement more validation rules...

    const isValid = errors.length === 0;

    return {
        isValid,
        errors: isValid ? undefined : errors,
    };
}

module.exports = { validateData };