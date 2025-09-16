/**
 * Navigation JavaScript File
 * 
 * This file handles navigation functionality across all pages
 * and ensures consistent navigation behavior.
 */

// Navigation configuration
const navigationConfig = {
    pages: [
        {
            id: 'home',
            title: 'Home',
            url: 'index.html',
            icon: '🏠'
        },
        {
            id: 'calculator',
            title: 'Calculator',
            url: 'calculator.html',
            icon: '🧮'
        },
        {
            id: 'js-demo',
            title: 'JS Demo',
            url: 'js.html',
            icon: '💻'
        },
        {
            id: 'about',
            title: 'About',
            url: 'about.html',
            icon: 'ℹ️'
        }
    ],
    sections: [
        {
            id: 'schedule',
            title: 'Schedule',
            icon: '📅'
        },
        {
            id: 'lists',
            title: 'Lists',
            icon: '📋'
        },
        {
            id: 'forms',
            title: 'Forms',
            icon: '📝'
        }
    ]
};

/**
 * Initialize navigation for the current page
 */
function initializeNavigation() {
    const currentPage = getCurrentPage();
    const navContainer = document.querySelector('.main-navigation .nav-list');
    
    if (navContainer) {
        // Clear existing navigation
        navContainer.innerHTML = '';
        
        // Add page navigation
        navigationConfig.pages.forEach(page => {
            if (page.id !== currentPage) {
                const navItem = createNavItem(page);
                navContainer.appendChild(navItem);
            }
        });
        
        // Add section navigation for home page
        if (currentPage === 'home') {
            navigationConfig.sections.forEach(section => {
                const navItem = createSectionNavItem(section);
                navContainer.appendChild(navItem);
            });
        }
    }
}

/**
 * Get the current page identifier
 */
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    switch (filename) {
        case 'index.html':
        case '':
            return 'home';
        case 'calculator.html':
            return 'calculator';
        case 'js.html':
            return 'js-demo';
        case 'about.html':
            return 'about';
        default:
            return 'home';
    }
}

/**
 * Create a navigation item for pages
 */
function createNavItem(page) {
    const li = document.createElement('li');
    li.className = 'nav-item';
    
    const a = document.createElement('a');
    a.href = page.url;
    a.className = 'nav-link';
    
    const icon = document.createElement('span');
    icon.className = 'nav-icon';
    icon.textContent = page.icon;
    
    a.appendChild(icon);
    a.appendChild(document.createTextNode(' ' + page.title));
    li.appendChild(a);
    
    return li;
}

/**
 * Create a navigation item for sections (anchor links)
 */
function createSectionNavItem(section) {
    const li = document.createElement('li');
    li.className = 'nav-item';
    
    const a = document.createElement('a');
    a.href = '#' + section.id;
    a.className = 'nav-link';
    
    const icon = document.createElement('span');
    icon.className = 'nav-icon';
    icon.textContent = section.icon;
    
    a.appendChild(icon);
    a.appendChild(document.createTextNode(' ' + section.title));
    li.appendChild(a);
    
    return li;
}

/**
 * Setup smooth scrolling for anchor links
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
 * Add active state to current page navigation
 */
function setActiveNavigation() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === getCurrentPageUrl(currentPage)) {
            link.classList.add('active');
        }
    });
}

/**
 * Get the URL for a page identifier
 */
function getCurrentPageUrl(pageId) {
    const page = navigationConfig.pages.find(p => p.id === pageId);
    return page ? page.url : 'index.html';
}

/**
 * Initialize all navigation functionality
 */
function initNavigation() {
    initializeNavigation();
    setupSmoothScrolling();
    setActiveNavigation();
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', initNavigation);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        navigationConfig,
        initializeNavigation,
        setupSmoothScrolling,
        setActiveNavigation,
        initNavigation
    };
}
