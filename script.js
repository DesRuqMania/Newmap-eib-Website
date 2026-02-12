/**
 * NEWMAP-EIB Nasarawa State - Erosion Control Initiative
 * Complete JavaScript Functionality
 * Handles navigation, forms, tabs, team collaboration, and interactions
 */

// ============================================================================
// NAVIGATION & SCROLL FUNCTIONALITY
// ============================================================================

/**
 * Smooth scroll to a specific section
 * @param {string} sectionId - The ID of the section to scroll to
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        updateActiveNav(sectionId);
    }
}

/**
 * Update the active navigation link based on current section
 * @param {string} sectionId - The ID of the active section
 */
function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

/**
 * Update active navigation on scroll
 * Detects which section is currently in view and updates nav accordingly
 */
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    if (currentSection) {
        updateActiveNav(currentSection);
    }
});

// ============================================================================
// TAB SWITCHING FUNCTIONALITY
// ============================================================================

/**
 * Switch between tabs in the dashboard
 * @param {Event} event - The click event from the tab button
 * @param {string} tabId - The ID of the tab content to show
 */
function switchTab(event, tabId) {
    event.preventDefault();
    
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
        tabElement.classList.add('active');
    }
    
    // Mark button as active
    event.target.classList.add('active');
}

// ============================================================================
// FORM HANDLING
// ============================================================================

/**
 * Submit work status report form
 * @param {Event} event - The form submission event
 */
function submitReport(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const reportData = {
        site: formData.get('site'),
        date: formData.get('date'),
        workCompleted: formData.get('workCompleted'),
        progress: formData.get('progress'),
        workRemaining: formData.get('workRemaining'),
        notes: formData.get('notes'),
        timestamp: new Date().toISOString()
    };
    
    // Validate form data
    if (!reportData.site || !reportData.date || !reportData.workCompleted || !reportData.progress) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Show success message
    alert('Report submitted successfully! Thank you for the update.');
    
    // Log the submission (in a real app, this would send to a server)
    console.log('Report submitted:', reportData);
    
    // Reset form
    event.target.reset();
    
    // Optionally scroll to recent reports section
    setTimeout(() => {
        scrollToSection('reports');
    }, 500);
}

// ============================================================================
// TEAM COLLABORATION
// ============================================================================

/**
 * Select a team member from the list
 * @param {HTMLElement} element - The clicked team member element
 * @param {string} memberId - The ID of the selected team member
 */
function selectTeamMember(element, memberId) {
    // Remove active class from all team members
    document.querySelectorAll('.team-member-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to selected member
    element.classList.add('active');
    
    // Log selection (in a real app, this would load member-specific data)
    console.log('Selected team member:', memberId);
}

/**
 * Send a message in the team collaboration chat
 */
function sendMessage() {
    const input = document.getElementById('messageInput');
    const messageText = input.value.trim();
    
    if (!messageText) {
        alert('Please enter a message.');
        return;
    }
    
    // Create message object
    const message = {
        author: 'Current User',
        content: messageText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'update'
    };
    
    // Log message (in a real app, this would send to a server)
    console.log('Message sent:', message);
    
    // Show confirmation
    alert('Message sent to team!');
    
    // Clear input
    input.value = '';
    
    // Focus back on input
    input.focus();
}

/**
 * Handle Enter key in message input
 * @param {Event} event - The keyboard event
 */
function handleMessageKeypress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// ============================================================================
// FORM VALIDATION
// ============================================================================

/**
 * Validate email format
 * @param {string} email - The email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate form field
 * @param {HTMLElement} field - The form field to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateField(field) {
    if (field.type === 'email') {
        return validateEmail(field.value);
    }
    if (field.required) {
        return field.value.trim() !== '';
    }
    return true;
}

/**
 * Add real-time validation to form fields
 */
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const fields = form.querySelectorAll('input, textarea, select');
        fields.forEach(field => {
            field.addEventListener('blur', () => {
                if (!validateField(field)) {
                    field.style.borderColor = '#ef4444';
                } else {
                    field.style.borderColor = '#e5e7eb';
                }
            });
        });
    });
}

// ============================================================================
// PROGRESS BAR ANIMATION
// ============================================================================

/**
 * Animate progress bars on page load
 */
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// ============================================================================
// MODAL/DIALOG FUNCTIONALITY
// ============================================================================

/**
 * Show a modal dialog
 * @param {string} title - The modal title
 * @param {string} content - The modal content
 * @param {string} type - The type of modal (info, success, warning, error)
 */
function showModal(title, content, type = 'info') {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content modal-${type}">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="this.closest('.modal').remove()">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// ============================================================================
// DATA MANAGEMENT
// ============================================================================

/**
 * Store data in localStorage
 * @param {string} key - The storage key
 * @param {any} value - The value to store
 */
function storeData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Data stored: ${key}`);
    } catch (error) {
        console.error('Error storing data:', error);
    }
}

/**
 * Retrieve data from localStorage
 * @param {string} key - The storage key
 * @returns {any} - The stored value or null
 */
function retrieveData(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error retrieving data:', error);
        return null;
    }
}

/**
 * Clear data from localStorage
 * @param {string} key - The storage key
 */
function clearData(key) {
    try {
        localStorage.removeItem(key);
        console.log(`Data cleared: ${key}`);
    } catch (error) {
        console.error('Error clearing data:', error);
    }
}

// ============================================================================
// REPORT MANAGEMENT
// ============================================================================

/**
 * Add a new report to the list
 * @param {Object} reportData - The report data object
 */
function addReport(reportData) {
    const reports = retrieveData('reports') || [];
    reports.unshift({
        ...reportData,
        id: `rep-${Date.now()}`,
        status: 'pending'
    });
    storeData('reports', reports);
    console.log('Report added:', reportData);
}

/**
 * Get all reports
 * @returns {Array} - Array of report objects
 */
function getReports() {
    return retrieveData('reports') || [];
}

/**
 * Update a report status
 * @param {string} reportId - The report ID
 * @param {string} status - The new status
 */
function updateReportStatus(reportId, status) {
    const reports = getReports();
    const report = reports.find(r => r.id === reportId);
    if (report) {
        report.status = status;
        storeData('reports', reports);
        console.log(`Report ${reportId} status updated to ${status}`);
    }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Format date to readable format
 * @param {Date|string} date - The date to format
 * @returns {string} - Formatted date string
 */
function formatDate(date) {
    const d = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
}

/**
 * Format time to readable format
 * @param {Date|string} date - The date to format
 * @returns {string} - Formatted time string
 */
function formatTime(date) {
    const d = new Date(date);
    const options = { hour: '2-digit', minute: '2-digit' };
    return d.toLocaleTimeString('en-US', options);
}

/**
 * Calculate days remaining
 * @param {Date|string} endDate - The end date
 * @returns {number} - Number of days remaining
 */
function daysRemaining(endDate) {
    const end = new Date(endDate);
    const today = new Date();
    const diff = end - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * Generate a unique ID
 * @returns {string} - A unique ID
 */
function generateId() {
    return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - The function to debounce
 * @param {number} wait - The wait time in milliseconds
 * @returns {Function} - The debounced function
 */
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

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize all event listeners and functionality
 */
function initializeApp() {
    console.log('Initializing NEWMAP-EIB Website...');
    
    // Setup form validation
    setupFormValidation();
    
    // Animate progress bars
    animateProgressBars();
    
    // Setup message input enter key
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('keypress', handleMessageKeypress);
    }
    
    // Setup report form
    const reportForm = document.getElementById('reportForm');
    if (reportForm) {
        reportForm.addEventListener('submit', submitReport);
    }
    
    // Log initialization complete
    console.log('NEWMAP-EIB Website initialized successfully');
}

/**
 * Run initialization when DOM is ready
 */
document.addEventListener('DOMContentLoaded', initializeApp);

/**
 * Handle page unload
 */
window.addEventListener('beforeunload', () => {
    console.log('NEWMAP-EIB Website unloading');
});

// ============================================================================
// ERROR HANDLING
// ============================================================================

/**
 * Global error handler
 */
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // In a real app, you might send this to an error tracking service
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // In a real app, you might send this to an error tracking service
});

// ============================================================================
// PERFORMANCE MONITORING
// ============================================================================

/**
 * Log performance metrics
 */
function logPerformanceMetrics() {
    if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
}

window.addEventListener('load', logPerformanceMetrics);

// ============================================================================
// EXPORT FUNCTIONS FOR EXTERNAL USE
// ============================================================================

// Make functions available globally if needed
window.NEWMAP = {
    scrollToSection,
    updateActiveNav,
    switchTab,
    submitReport,
    selectTeamMember,
    sendMessage,
    validateEmail,
    validateField,
    showModal,
    storeData,
    retrieveData,
    clearData,
    addReport,
    getReports,
    updateReportStatus,
    formatDate,
    formatTime,
    daysRemaining,
    generateId,
    debounce
};
