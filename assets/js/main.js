// Mobile Menu Functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileNavMenu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    
    if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobileNavMenu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    
    mobileMenu.classList.add('active');
    hamburgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileNavMenu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    
    mobileMenu.classList.remove('active');
    hamburgerBtn.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileNavMenu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenuContent = document.querySelector('.mobile-nav-content');
    
    if (mobileMenu.classList.contains('active') && 
        !mobileMenuContent.contains(event.target) && 
        !hamburgerBtn.contains(event.target)) {
        closeMobileMenu();
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeMobileMenu();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Load language preference with a small delay to ensure DOM is fully ready
    setTimeout(() => {
        loadLanguagePreference();
    }, 100);
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to header
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animation system removed - all fade-in animations have been disabled
    
    // Add click handlers for store buttons
    const storeButtons = document.querySelectorAll('.store-btn');
    storeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // You can add actual store links here
            console.log('Store button clicked:', this.textContent.trim());
        });
    });
    
    // Contact form handling (if you add a contact form later)
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const type = this.querySelector('i').classList.contains('ri-mail-line') ? 'email' : 'phone';
            const value = this.querySelector('span').textContent;
            
            if (type === 'email') {
                window.location.href = `mailto:${value}`;
            } else if (type === 'phone') {
                window.location.href = `tel:${value}`;
            }
        });
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Recalculate any dynamic layouts if needed
    console.log('Window resized');
}, 250));

// Animation test function removed - animations have been disabled

// Export functions for potential use in other scripts
window.TimeTracker = {
    scrollToSection: function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = element.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    },
    
    showNotification: function(message, type = 'info') {
        // Simple notification system
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: 'white',
            zIndex: '10000',
            opacity: '0',
            transform: 'translateX(100%)',
            transition: 'all 0.3s ease'
        });
        
        // Set background color based on type
        const colors = {
            info: '#4285f4',
            success: '#29C940',
            warning: '#ff9800',
            error: '#f44336'
        };
        notification.style.backgroundColor = colors[type] || colors.info;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
};
