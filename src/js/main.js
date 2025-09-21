/**
 * Main JavaScript File for KSU Learning Project
 * 
 * This file contains the core functionality that trainees will build upon.
 * Complete each task by adding your code to the appropriate sections.
 */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('KSU Learning Project - Ready for development!');
    
    // Initialize the application
    initializeApp();
});

/**
 * Main application initialization function
 * Trainees will add functionality here as they complete tasks
 */
function initializeApp() {
    console.log('Initializing KSU Learning Project...');
    
    // TODO: Task 1 - Add HTML structure enhancements
    // TODO: Task 2 - Implement CSS Grid layout
    // TODO: Task 3 - Enhance navigation with Flexbox
    // TODO: Task 4 - Add form validation
    // TODO: Task 5 - Make schedule table interactive
    // TODO: Task 6 - Implement localStorage functionality
    // TODO: Task 7 - Create responsive image gallery
    // TODO: Task 8 - Integrate external APIs
    // TODO: Task 9 - Add PWA features
    // TODO: Task 10 - Implement advanced JavaScript features
    
    // Initialize basic functionality
    setupBasicInteractions();
}

/**
 * Setup basic interactions for the website
 * This function will be expanded as trainees complete tasks
 */
function setupBasicInteractions() {
    console.log('Setting up basic interactions...');
    
    // Add smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Add basic form handling
    setupBasicForms();
    
    // Add table interactions
    setupTableInteractions();
}

/**
 * Setup smooth scrolling for navigation links
 * Trainees will enhance this in Task 3
 */
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Setup basic form handling
 * Trainees will enhance this in Task 4
 */
function setupBasicForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted:', this.action);
            
            // TODO: Task 4 - Add form validation here
            // TODO: Task 6 - Add localStorage functionality here
            
            alert('Form submitted successfully! (This will be enhanced in later tasks)');
        });
    });
}

/**
 * Setup basic table interactions
 * Trainees will enhance this in Task 5
 */
function setupTableInteractions() {
    const tableRows = document.querySelectorAll('table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            // TODO: Task 5 - Add row selection and editing functionality
            
            // Basic row highlighting (will be enhanced)
            this.style.backgroundColor = '#f0f8ff';
            
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 1000);
        });
        
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
}

/**
 * Utility function to show success messages
 * Trainees will use this throughout their tasks
 */
function showSuccess(message) {
    // TODO: Enhance this function to show better styled messages
    console.log('Success:', message);
    alert(message);
}

/**
 * Utility function to show error messages
 * Trainees will use this throughout their tasks
 */
function showError(message) {
    // TODO: Enhance this function to show better styled error messages
    console.error('Error:', message);
    alert('Error: ' + message);
}

/**
 * Utility function to get DOM elements by selector
 * Trainees will use this for DOM manipulation
 */
function getElement(selector) {
    return document.querySelector(selector);
}

/**
 * Utility function to get all DOM elements by selector
 * Trainees will use this for DOM manipulation
 */
function getAllElements(selector) {
    return document.querySelectorAll(selector);
}

// Export functions for use in other modules (ES6 modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        setupBasicInteractions,
        showSuccess,
        showError,
        getElement,
        getAllElements
    };
}
// login form
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const usernameInput = document.getElementById('exampleInputEmail1').value;
  const passwordInput = document.getElementById('exampleInputPassword1').value;

  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    }),
  })
  .then(res => res.json())
  .then(data => {
      if (usernameInput === 'emilys' && passwordInput === 'emilyspass') {
        alert('Login successful!');
        localStorage.setItem('loggedInUser', 'Emily');
        window.location.href = 'about.html';
      } else {
        alert('Error: Invalid username or password');
      }
  })
  .catch(err => {
    console.error('Error:', err);
    alert('Error: Unable to login');
  });
});



