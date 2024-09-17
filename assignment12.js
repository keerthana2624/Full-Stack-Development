// Q1. Complex Password Validator:
// Write a regular expression to validate passwords with the following criteria:
// At least one lowercase letter, one uppercase letter, one digit, and one special character (@, #, $, %, &, *).
// The length must be between 12 and 20 characters.
// No spaces allowed.
// Write a function that takes an array of passwords and returns an array of passwords that pass the validation.

function validatePasswords(passwords) {
    // Regular expression pattern for password validation
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])[A-Za-z\d@#$%&*]{12,20}$/;
    // Array to store valid passwords
    const validPasswords = [];
    // Check each password against the pattern
    for (const password of passwords) {
        if (pattern.test(password)) {
            validPasswords.push(password);
        }
    }
    return validPasswords;
}
// Example usage
const passwordList = [
    "1234567890abcd@", "ValidPass@123", "Valid#Pass1", "NewPass123@Extra",
     "keerthi123@", "KAVYA@", "Keerthana123@", "lucky1234@"
];
const validPasswords = validatePasswords(passwordList);
console.log(validPasswords);





// Q2. Extract and Modify Data from a Log File:
// Given a log file containing lines in the following format:
// 2024-08-28 14:32:01 - Error: User john_doe failed to login from IP 192.168.1.1
// Write a regex to extract the date, username, and IP address.
// Then, write a function that replaces all IP addresses with the string ‘[REDACTED]’ and returns the modified log.
// Function to extract date, username, and IP address

function extractDetails(log) {
    // Regular expression pattern to extract date, username, and IP address
    const extractPattern = /(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2}) - Error: User (\w+) failed to login from IP (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g;
    const details = [];
    let match;
    while ((match = extractPattern.exec(log)) !== null) {
        const [fullMatch, date, time, username, ip] = match;
        details.push({ date, time, username, ip });
    }
    return details;
}
// Function to replace IP addresses with '[REDACTED]'
function replaceIPs(log) {
    const modifiedLog = log.replace(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g, '[REDACTED]');
    return modifiedLog;
}
const log = `2024-8-22 14:32:01 - Error: User john_doe failed to login from IP 192.168.1.1
2024-8-22 15:00:00 - Error: User jane_smith failed to login from IP 10.0.0.2`;
// Extract details from the log
const extractedDetails = extractDetails(log);
console.log("Extracted Details:", extractedDetails);
// Replace IP addresses in the log
const modifiedLog = replaceIPs(log);
console.log("Modified Log:\n", modifiedLog);




// Q3. Basic Try-Catch Block
// Write a simple function that divides two numbers. If the divisor is zero, the function should throw an error with
// the message "Division by zero is not allowed." Use a try-catch block to handle this error and display an
// appropriate message to the user.

function divideNumbers(dividend, divisor) {
    try {
        if (divisor === 0) throw new Error("Division by zero is not allowed.");
        return dividend / divisor;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

// Example usage
const result = divideNumbers(10, 0);
console.log(result !== null ? `Result: ${result}` : "Operation could not be completed.");

// Q4. Handling JSON Parsing Errors

// Write a function that takes a JSON string as input and attempts to parse it into a JavaScript object. Use a try-
// catch block to handle any errors that occur during parsing, such as invalid JSON format. If an error is caught,

// the function should return a default empty object {} and log an error message to the console.

function parseJSON(jsonString) {
    try {
        // Attempt to parse the JSON string
        return JSON.parse(jsonString);
    } catch (error) {
        // Handle parsing errors
        console.error("Failed to parse JSON:", error.message);
        return {}; // Return default empty object
    }
}

// Example usage
const jsonString = '{"name": "lucky", "age": 25}'; // Valid JSON string
const invalidJsonString = '{"name": "keerthi", "age": 23'; // Invalid JSON string

