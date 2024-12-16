import crypto from 'crypto';

export function generateActivationCode() {
    // Generate a random buffer and convert it to a hexadecimal string
    const randomBytes = crypto.randomBytes(8).toString('hex'); // 16 characters (8 bytes)

    // Add a prefix or any other formatting for additional structure
    const prefix = 'ACT'; // Optional: can be anything, like 'ACT-' or 'CODE-'

    // Combine prefix and random bytes to form the activation code
    return `${prefix}-${randomBytes.toUpperCase()}`;
}