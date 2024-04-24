function validatePort(port:any) {
    // Check if port is a number
    if (isNaN(port)) {
        throw new Error("Port must be a number");
    }

    // Check if port is within valid range
    if (port < 1 || port > 65535) {
        throw new Error("Port number must be between 1 and 65535");
    }

    // Check if port is an integer
    if (!Number.isInteger(port)) {
        throw new Error("Port number must be an integer");
    }

    return true;
}

module.exports = validatePort;

// Usage
const PORT = Number(process.env.PORT) || 3000;

try {
    validatePort(PORT);
    console.log("Port validation successful");
} catch (error) {
    console.error("Port validation failed");
    process.exit(1);
}
