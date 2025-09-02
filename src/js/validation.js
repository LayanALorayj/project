/**
 * Form Validation JavaScript File
 * 
 * This file contains form validation functionality that trainees will enhance.
 * Complete each validation task by implementing the required functionality.
 */

// TODO: Task 4 - Implement comprehensive form validation

/**
 * Main validation class
 * Trainees will enhance this class with proper validation logic
 */
class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.errors = [];
        this.init();
    }

    init() {
        if (this.form) {
            this.setupValidation();
        }
    }

    setupValidation() {
        // TODO: Add real-time validation for input fields
        // TODO: Add blur event listeners for immediate feedback
        // TODO: Add submit event listener for final validation
        
        console.log('Form validation setup - ready for enhancement');
    }

    // TODO: Implement email validation
    validateEmail(email) {
        // Add email validation logic here
        // Should check for proper email format
        return true;
    }

    // TODO: Implement phone validation
    validatePhone(phone) {
        // Add phone validation logic here
        // Should check for proper phone number format
        return true;
    }

    // TODO: Implement required field validation
    validateRequired(value) {
        // Add required field validation logic here
        // Should check if field is not empty
        return true;
    }

    // TODO: Implement password strength validation
    validatePassword(password) {
        // Add password strength validation logic here
        // Should check for minimum length, special characters, etc.
        return true;
    }

    // TODO: Implement real-time validation feedback
    showFieldError(field, message) {
        // Add error display logic here
        // Should show error message below the field
        console.log(`Field error: ${message}`);
    }

    // TODO: Implement success feedback
    showFieldSuccess(field) {
        // Add success display logic here
        // Should show success indicator for the field
        console.log('Field validation successful');
    }

    // TODO: Implement form submission validation
    validateForm() {
        // Add complete form validation logic here
        // Should validate all fields and return true/false
        return true;
    }
}

/**
 * Utility functions for validation
 * Trainees will use these functions throughout their validation tasks
 */

// TODO: Create custom validation rules
function createCustomValidation(rule, message) {
    return {
        rule: rule,
        message: message
    };
}

// TODO: Implement validation error handling
function handleValidationError(error) {
    console.error('Validation error:', error);
    // Add error handling logic here
}

// TODO: Implement validation success handling
function handleValidationSuccess() {
    console.log('Validation successful');
    // Add success handling logic here
}

// Initialize validation for all forms
document.addEventListener('DOMContentLoaded', function() {
    // TODO: Initialize validation for contact form
    const contactForm = new FormValidator('.contact-form');
    
    // TODO: Initialize validation for other forms
    // const otherForm = new FormValidator('.other-form');
    
    console.log('Form validation initialized - ready for enhancement');
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        FormValidator,
        createCustomValidation,
        handleValidationError,
        handleValidationSuccess
    };
}
