/**
 * Creates a logger with a specified name.
 * @param {string} name - The name of the logger.
 * @returns {Logger} - The created logger.
 */
function createLogger(name) {
    return {
        log: (message) => {
            console.log(`[${name}]: ${message}`);
        },
        error: (message) => {
            console.error(`[${name}]: ${message}`);
        },
    };
}

export { createLogger };
