// Main JavaScript file for Time Tracker landing page

// Language content
const content = {
    en: {
        nav: {
            benefits: 'Benefits',
            features: 'Features',
            tools: 'Tools',
            download: 'Download',
            contact: 'Contact'
        },
        hero: {
            title: 'Timetracker',
            subtitle: 'Time Tracking Has Never Been Easier',
            description: 'Keep full control of work hours, projects, and team productivity — all in one simple, smart app.'
        },
        benefits: {
            title: 'Key Benefits of our Timetracker',
            subtitle: 'Simplify everyday work management with powerful automation and insights.',
            timeTracking: 'Time Tracking',
            timeTrackingDesc: 'Know exactly when your staff start and finish work.',
            billableHours: 'Billable Hours',
            billableHoursDesc: 'Track and invoice client work accurately.',
            attendance: 'Attendance Overview',
            attendanceDesc: 'Instantly see who\'s present and who\'s not.',
            leaveManagement: 'Leave & Absence Management',
            leaveManagementDesc: 'Track vacations, days off, and sick leaves easily.',
            overtime: 'Overtime & Shift Balance',
            overtimeDesc: 'Manage regular hours, overtime, and part-time work without spreadsheets.',
            costInsights: 'Cost Insights',
            costInsightsDesc: 'Understand what each project or task costs over time.'
        },
        features: {
            title: 'Features',
            subtitle: 'Take charge of your schedule with Time Tracker! Easily track hours, tasks, and project progress in one app.',
            subtitle2: 'Simple, effective time management.'
        },
        howItWorks: {
            title: 'How it works?'
        },
        screenshots: {
            title: 'Screenshots',
            subtitle: 'Take charge of your schedule with Time Tracker! Easily track hours, tasks, and project progress in one app.',
            subtitle2: 'Simple, effective time management.'
        },
        download: {
            title: 'Download The App'
        },
        whoIsItFor: {
            title: 'Who is Timetracker for',
            description: 'Our time tracker is built for teams and businesses of all sizes that need a simple, accurate, and flexible way to manage work hours.',
            highlight: 'Whether you\'re managing a few employees or multiple departments, our tool helps you stay organized, productive, and always up to date.'
        },
        privacy: {
            title: 'Privacy & Data Safety',
            subtitle: 'Your data belongs to you — and stays protected.'
        },
        moreFeatures: {
            title: 'More Than Just Time Tracking',
            footer: 'Beyond the app — a full-featured web platform designed to do more.'
        },
        contact: {
            title: 'Do you want to know more contact us.',
            subtitle: 'If you have questions or want to start using Timetracker'
        }
    },
    fo: {
        nav: {
            benefits: 'Fyrimunir',
            features: 'Eginleikar',
            tools: 'Tól',
            download: 'Tak niður',
            contact: 'Samband'
        },
        hero: {
            title: 'Timetracker',
            subtitle: 'Tíðarstýring hevur ongantíð verið lættari',
            description: 'Fá gott yvirblikk á arbeiðstíðum, verkætlanum og uppgávum — alt samlað í einari snildari og lættari app, sum ger gerandisdagin einfaldari.'
        },
        benefits: {
            title: 'Fyrimunir við okkara Timetracker',
            subtitle: 'Ger dagliga arbeiðið einfaldari og fáa eitt betur yvirblikk.',
            timeTracking: 'Tíðarstýring',
            timeTrackingDesc: 'Sporar arbeiðstíðina uttan at tú nýtist at skriva nakað sjálvur.',
            billableHours: 'Rokniligar tímar',
            billableHoursDesc: 'Spora og fakturera arbeiði hjá kundum neyvt.',
            attendance: 'Uppmøtingar yvirlit',
            attendanceDesc: 'Sí beinanvegin hvør er til arbeiðis, og hvør ikki.',
            leaveManagement: 'Frítíð og fráverustýring',
            leaveManagementDesc: 'Fylg við feriu, frídøgum og sjúkradøgum uttan trupulleikar.',
            overtime: 'Yvirtíð og vanliga tíð',
            overtimeDesc: 'Stýr vanligum tímum, yvirtíð og parttíðararbeiði uttan Excel-skjal.',
            costInsights: 'Kostnaðarinnlit',
            costInsightsDesc: 'Fá greiðu á hvat hvør verkætlan ella uppgáva kostar yvir tíð.'
        },
        features: {
            title: 'Løgur',
            subtitle: 'Tak stýring á tínum dagskrá við Tíðarstøði! Einfalda stýr tímar, uppgávur og verkætlanaframgang í eitt app.',
            subtitle2: 'Einfalt, virkandi tíðarstýring.'
        },
        howItWorks: {
            title: 'Hvussu virkar tað?'
        },
        screenshots: {
            title: 'Skermmyndir',
            subtitle: 'Tak stýring á tínum dagskrá við Tíðarstøði! Einfalda stýr tímar, uppgávur og verkætlanaframgang í eitt app.',
            subtitle2: 'Einfalt, virkandi tíðarstýring.'
        },
        download: {
            title: 'Niðurhal av Appini'
        },
        whoIsItFor: {
            title: 'Hvør er Tíðarstøði fyri',
            description: 'Okkara tíðarmeting er bygt fyri lið og fyrirtøkur av øllum støddum, sum tørva ein einfalt, nákvæmt og bjúgt mát at stýra arbeiðstíð.',
            highlight: 'Um tú stýrir fáum starvsfólkum ella fleiri deildum, hjálpir okkara amboð tær at vera skipað, framleiðandi og altíð upp dagført.'
        },
        privacy: {
            title: 'Persónuliga & Dáta Trygd',
            subtitle: 'Tínir dátar hoyra til tær — og verða verndaðir.'
        },
        moreFeatures: {
            title: 'Meira enn bara Tíðarmeting',
            footer: 'Utan fyri appini — eitt fullført veb-plattform, sum er hannað til at gera meira.'
        },
        contact: {
            title: 'Vilt tú vita meira, hava samband við okkum.',
            subtitle: 'Um tú hevur spurningar ella vilt byrja at brúka Tíðarstøði'
        }
    }
};

// Language switching function
function changeLanguage(lang) {
    const currentLang = content[lang];
    if (!currentLang) {
        console.error(`Language content not found for: ${lang}`);
        return;
    }
    
    // Update navigation
    const benefitsLinks = document.querySelectorAll('a[href="#benefits"]');
    benefitsLinks.forEach(link => link.textContent = currentLang.nav.benefits);
    
    const featuresLinks = document.querySelectorAll('a[href="#features"]');
    featuresLinks.forEach(link => link.textContent = currentLang.nav.features);
    
    const toolsLinks = document.querySelectorAll('a[href="#how-it-works"]');
    toolsLinks.forEach(link => link.textContent = currentLang.nav.tools);
    
    const downloadLinks = document.querySelectorAll('a[href="#download"]');
    downloadLinks.forEach(link => link.textContent = currentLang.nav.download);
    
    const contactButtons = document.querySelectorAll('.contact-btn, .mobile-contact-btn');
    contactButtons.forEach(btn => btn.textContent = currentLang.nav.contact);
    
    // Update hero section
    document.querySelector('.hero-title').textContent = currentLang.hero.title;
    document.querySelector('.hero-subtitle').textContent = currentLang.hero.subtitle;
    document.querySelector('.hero-description').textContent = currentLang.hero.description;
    
    // Store buttons are now images from Figma, no text updates needed
    
    // Update benefits section
    document.querySelector('.benefits-section .section-title').textContent = currentLang.benefits.title;
    document.querySelector('.benefits-section p.text-gray').textContent = currentLang.benefits.subtitle;
    
    // Update features section
    const featuresTitle = document.querySelector('.features-section .section-title');
    if (featuresTitle) featuresTitle.textContent = currentLang.features.title;
    
    // Update how it works section
    const howItWorksTitle = document.querySelector('.how-it-works .section-title');
    if (howItWorksTitle) howItWorksTitle.textContent = currentLang.howItWorks.title;
    
    // Update screenshots section
    const screenshotsTitle = document.querySelector('.screenshots-section .section-title');
    if (screenshotsTitle) screenshotsTitle.textContent = currentLang.screenshots.title;
    const screenshotsDesc = document.querySelector('.screenshots-description');
    if (screenshotsDesc) {
        screenshotsDesc.innerHTML = `${currentLang.screenshots.subtitle}<br><br>${currentLang.screenshots.subtitle2}`;
    }
    
    // Update download section
    const downloadTitle = document.querySelector('.download-section .section-title');
    if (downloadTitle) downloadTitle.textContent = currentLang.download.title;
    
    // Update who is it for section
    const whoTitle = document.querySelector('.who-title');
    if (whoTitle) whoTitle.textContent = currentLang.whoIsItFor.title;
    const whoDesc = document.querySelector('.who-description');
    if (whoDesc) whoDesc.textContent = currentLang.whoIsItFor.description;
    const whoHighlight = document.querySelector('.who-highlight');
    if (whoHighlight) whoHighlight.textContent = currentLang.whoIsItFor.highlight;
    
    // Update privacy section
    const privacyTitle = document.querySelector('.privacy-section .section-title');
    if (privacyTitle) privacyTitle.textContent = currentLang.privacy.title;
    const privacySubtitle = document.querySelector('.privacy-section p.text-gray');
    if (privacySubtitle) privacySubtitle.textContent = currentLang.privacy.subtitle;
    
    // Update more features section
    const moreTitle = document.querySelector('.more-section .section-title');
    if (moreTitle) moreTitle.textContent = currentLang.moreFeatures.title;
    const moreFooter = document.querySelector('.more-footer');
    if (moreFooter) moreFooter.textContent = currentLang.moreFeatures.footer;
    
    // Update contact section
    const contactTitle = document.querySelector('.contact-title');
    if (contactTitle) contactTitle.textContent = currentLang.contact.title;
    const contactSubtitle = document.querySelector('.contact-subtitle');
    if (contactSubtitle) contactSubtitle.textContent = currentLang.contact.subtitle;
    
    // Update benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    const benefitData = [
        { title: currentLang.benefits.timeTracking, desc: currentLang.benefits.timeTrackingDesc },
        { title: currentLang.benefits.billableHours, desc: currentLang.benefits.billableHoursDesc },
        { title: currentLang.benefits.attendance, desc: currentLang.benefits.attendanceDesc },
        { title: currentLang.benefits.leaveManagement, desc: currentLang.benefits.leaveManagementDesc },
        { title: currentLang.benefits.overtime, desc: currentLang.benefits.overtimeDesc },
        { title: currentLang.benefits.costInsights, desc: currentLang.benefits.costInsightsDesc }
    ];
    
    benefitCards.forEach((card, index) => {
        if (benefitData[index]) {
            card.querySelector('.benefit-title').textContent = benefitData[index].title;
            card.querySelector('.benefit-description').textContent = benefitData[index].desc;
        }
    });
    
    // Update button states - ensure this happens after content updates
    setTimeout(() => {
        updateLanguageButtons(lang);
    }, 50);
    
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
    
    // Show notification
    if (window.TimeTracker && window.TimeTracker.showNotification) {
        TimeTracker.showNotification(`Language changed to ${lang === 'en' ? 'English' : 'Føroyskt'}`, 'success');
    }
}

// Load saved language preference
function loadLanguagePreference() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    // First update the UI state, then change the content
    updateLanguageButtons(savedLang);
    changeLanguage(savedLang);
}

// Update language avatar states
function updateLanguageButtons(activeLang) {
    const langAvatars = document.querySelectorAll('.lang-avatar');
    
    langAvatars.forEach((avatar) => {
        avatar.classList.remove('active');
        if (avatar.getAttribute('data-lang') === activeLang) {
            avatar.classList.add('active');
        }
    });
}

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
