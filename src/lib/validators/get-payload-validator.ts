interface InitOptions {
    express?: boolean;
    // Define other properties here if needed
}

interface ValidatorResult {
    isValid: boolean;
    errors?: string[];
}

const validateEnvironmentVariables = (): ValidatorResult => {
    const errors: string[] = [];
    if (!process.env.RESEND_API_KEY) {
        errors.push("RESEND_API_KEY is missing in .env file");
    }
    if (!process.env.PAYLOAD_SECRET) {
        errors.push("PAYLOAD_SECRET is missing in .env file");
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

const validateInitOptions = (initOptions?: Partial<InitOptions>): ValidatorResult => {
    const errors: string[] = [];
    // You can add more validation rules here based on your requirements
    if (initOptions && initOptions.express === true) {
        errors.push("Express option cannot be set to true.");
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

export const validateData = ({ initOptions }: { initOptions?: Partial<InitOptions> }): ValidatorResult => {
    const envValidation = validateEnvironmentVariables();
    if (!envValidation.isValid) {
        return envValidation;
    }

    const initOptionsValidation = validateInitOptions(initOptions);
    if (!initOptionsValidation.isValid) {
        return initOptionsValidation;
    }

    return { isValid: true };
};

// Example usage:
const validationResult = validateData({ initOptions: { express: true } });
if (!validationResult.isValid) {
    console.error("Validation errors:", validationResult.errors);
} else {
    console.log("Data is valid.");
}
