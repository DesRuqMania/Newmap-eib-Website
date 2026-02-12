# NEWMAP-EIB Nasarawa State Website
## Complete HTML, CSS, and JavaScript Documentation

---

## 📋 Overview

This is a professional static website for the NEWMAP-EIB (New Map - Erosion Control Initiative) Nasarawa State project. The website features:

- **Institutional Authority Design** with forest green branding
- **Role-Based Access** for different team members
- **Real-Time Project Dashboard** for monitoring erosion control activities
- **Work Status Reporting** interface for project engineers
- **Team Collaboration Platform** for unified communication
- **Leadership Section** featuring project leadership with welcome messages
- **Responsive Design** optimized for all devices

---

## 📁 File Structure

```
newmap-nasarawa-web/
├── index.html          # Complete standalone HTML file (all-in-one)
├── styles.css          # Comprehensive CSS stylesheet
├── script.js           # Complete JavaScript functionality
└── DOCUMENTATION.md    # This file
```

---

## 🎨 Design System

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary | #15803d | Main brand color, buttons, links |
| Primary Light | #22c55e | Hover states, highlights |
| Primary Dark | #166534 | Dark backgrounds, gradients |
| Secondary | #f3f4f6 | Light backgrounds, secondary elements |
| Accent | #f0fdf4 | Subtle highlights, accents |
| Foreground | #1f2937 | Main text color |
| Muted Foreground | #6b7280 | Secondary text, labels |
| Border | #e5e7eb | Borders, dividers |
| Success | #10b981 | Success messages, approved status |
| Warning | #f59e0b | Alerts, warnings |
| Danger | #ef4444 | Errors, critical alerts |
| Info | #3b82f6 | Information messages |

### Typography

**Display Font:** Poppins
- Used for all headings (h1-h6)
- Font weights: 700, 800
- Creates strong visual hierarchy

**Body Font:** Inter
- Used for all body text
- Font weights: 400, 500, 600, 700
- Ensures excellent readability

### Spacing System

```
--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
--spacing-2xl: 3rem
```

### Border Radius

```
--radius-sm: 0.375rem
--radius-md: 0.5rem
--radius-lg: 0.65rem
--radius-full: 9999px
```

### Shadows

```
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.15)
```

---

## 📄 HTML Structure

### Header & Navigation
```html
<header>
    <div class="container">
        <div class="header-content">
            <div class="logo">NEWMAP-EIB</div>
            <nav>
                <a href="#home">Home</a>
                <a href="#dashboard">Dashboard</a>
                <a href="#reports">Reports</a>
                <a href="#team">Team</a>
            </nav>
        </div>
    </div>
</header>
```

**Features:**
- Sticky positioning for persistent navigation
- Active state highlighting
- Responsive mobile menu (hidden on mobile)

### Hero Section
```html
<section class="hero" id="home">
    <div class="container">
        <div class="hero-content">
            <h1>Nasarawa State Erosion Control Initiative</h1>
            <p>Restoring land, protecting communities...</p>
            <button class="btn btn-primary">View Dashboard</button>
        </div>
    </div>
</section>
```

**Features:**
- Full-width gradient background
- Grid pattern overlay
- Call-to-action buttons
- Responsive typography

### Metrics Section
```html
<section class="container">
    <div class="metrics">
        <div class="metric-card">
            <div class="metric-icon">📍</div>
            <div class="metric-value">12</div>
            <div class="metric-label">Active Sites</div>
        </div>
        <!-- More metric cards -->
    </div>
</section>
```

**Features:**
- Grid layout with auto-fit columns
- Hover animations
- Icon + value + label structure

### Leadership Section
```html
<section class="leadership">
    <div class="container">
        <h2 class="section-title">Project Leadership</h2>
        <div class="leadership-grid">
            <div class="leader-card">
                <div class="leader-image">
                    <img src="..." alt="Dr. Mohammed Ismail">
                </div>
                <div class="leader-name">Dr. Mohammed Ismail, P.hD</div>
                <div class="leader-title">Project Coordinator (Head of State)</div>
                <div class="leader-message">Welcome message...</div>
            </div>
            <!-- More leader cards -->
        </div>
    </div>
</section>
```

**Features:**
- Professional portrait images
- Leadership titles and roles
- Personalized welcome messages
- Responsive grid layout

### Role-Based Access Section
```html
<section class="roles-section" id="roles">
    <div class="container">
        <h2 class="section-title">Role-Based Access</h2>
        <div class="roles-grid">
            <div class="role-card engineer">
                <div class="role-icon">📋</div>
                <div class="role-title">Project Engineer</div>
                <div class="role-description">...</div>
                <button class="btn btn-primary">Access</button>
            </div>
            <!-- More role cards -->
        </div>
    </div>
</section>
```

**Features:**
- Four role types with distinct icons
- Project Engineer highlighted with special styling
- Action buttons for each role
- Hover effects and animations

### Dashboard Section
```html
<section class="dashboard-section" id="dashboard">
    <div class="tabs">
        <button class="tab-button active" onclick="switchTab(event, 'overview')">Overview</button>
        <button class="tab-button" onclick="switchTab(event, 'sites')">Site Progress</button>
        <button class="tab-button" onclick="switchTab(event, 'metrics')">Metrics</button>
    </div>
    <div id="overview" class="tab-content active">
        <!-- Dashboard content -->
    </div>
</section>
```

**Features:**
- Tabbed interface for different views
- Real-time project metrics
- Progress bars for site tracking
- Alerts and notifications

### Reports Section
```html
<section class="form-section" id="reports">
    <div class="form-container">
        <form id="reportForm" onsubmit="submitReport(event)">
            <div class="form-group">
                <label class="form-label">Select Site</label>
                <select class="form-select" required>
                    <option value="">Choose a site...</option>
                    <!-- Options -->
                </select>
            </div>
            <!-- More form fields -->
            <button type="submit" class="btn btn-primary">Submit Report</button>
        </form>
    </div>
</section>
```

**Features:**
- Form validation
- Multiple input types (text, date, select, textarea)
- Progress tracking
- Report history display

### Team Collaboration Section
```html
<section class="team-section" id="team">
    <div class="team-grid">
        <div class="team-members-list">
            <div class="team-member-item" onclick="selectTeamMember(this, 'tm-001')">
                <div class="team-avatar">MI</div>
                <div class="team-member-info">
                    <div class="team-member-name">Dr. Mohammed Ismail, P.hD</div>
                    <div class="team-member-role">Project Coordinator (Head)</div>
                </div>
                <div class="status-indicator status-active"></div>
            </div>
            <!-- More team members -->
        </div>
        <div class="messages-container">
            <div class="messages-list">
                <div class="message-item milestone">
                    <!-- Message content -->
                </div>
            </div>
            <div class="message-input-group">
                <input type="text" id="messageInput" placeholder="Share an update...">
                <button class="btn btn-primary" onclick="sendMessage()">Send</button>
            </div>
        </div>
    </div>
</section>
```

**Features:**
- Team member list with status indicators
- Message history with color-coded types
- Real-time messaging interface
- Active member selection

### Footer
```html
<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h4>NEWMAP-EIB</h4>
                <p>Nasarawa State Erosion Control Initiative</p>
            </div>
            <!-- More footer sections -->
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 NEWMAP-EIB Nasarawa State. All rights reserved.</p>
        </div>
    </div>
</footer>
```

**Features:**
- Multi-column layout
- Quick links
- Resource links
- Copyright information

---

## 🎨 CSS Classes Reference

### Layout Classes

| Class | Purpose |
|-------|---------|
| `.container` | Max-width container with responsive padding |
| `.hero` | Full-width hero section with gradient |
| `.section-title` | Large section heading (2.25rem) |
| `.section-subtitle` | Section subtitle (1.125rem) |

### Card Classes

| Class | Purpose |
|-------|---------|
| `.metric-card` | Metric display card with hover effect |
| `.dashboard-card` | Dashboard content card |
| `.role-card` | Role access card |
| `.leader-card` | Leadership profile card |
| `.report-item` | Report list item |

### Form Classes

| Class | Purpose |
|-------|---------|
| `.form-group` | Form field wrapper |
| `.form-label` | Form field label |
| `.form-input` | Text input field |
| `.form-textarea` | Text area field |
| `.form-select` | Select dropdown |
| `.form-row` | Multi-column form layout |

### Status Classes

| Class | Purpose |
|-------|---------|
| `.status-badge` | Status indicator badge |
| `.status-approved` | Approved status (green) |
| `.status-pending` | Pending status (yellow) |
| `.status-active` | Active status indicator |
| `.status-offline` | Offline status indicator |

### Button Classes

| Class | Purpose |
|-------|---------|
| `.btn` | Base button styles |
| `.btn-primary` | Primary action button |
| `.btn-outline` | Outline button style |

### Utility Classes

| Class | Purpose |
|-------|---------|
| `.hidden` | Hide element (display: none) |
| `.text-center` | Center text alignment |
| `.mt-4` | Margin top (1rem) |
| `.mb-4` | Margin bottom (1rem) |
| `.gap-2` | Gap between flex items (0.5rem) |

---

## 🔧 JavaScript Functions

### Navigation Functions

#### `scrollToSection(sectionId)`
Smoothly scrolls to a specific section and updates active navigation.

```javascript
scrollToSection('dashboard'); // Scrolls to dashboard section
```

#### `updateActiveNav(sectionId)`
Updates the active navigation link based on current section.

```javascript
updateActiveNav('reports'); // Marks reports link as active
```

### Tab Management

#### `switchTab(event, tabId)`
Switches between tabs in the dashboard.

```javascript
// Called from HTML: onclick="switchTab(event, 'overview')"
```

### Form Handling

#### `submitReport(event)`
Handles work status report form submission.

```javascript
// Called from HTML: onsubmit="submitReport(event)"
// Validates form, shows success message, resets form
```

#### `validateEmail(email)`
Validates email format.

```javascript
if (validateEmail('user@example.com')) {
    console.log('Valid email');
}
```

#### `validateField(field)`
Validates a form field based on its type.

```javascript
const isValid = validateField(inputElement);
```

### Team Collaboration

#### `selectTeamMember(element, memberId)`
Selects a team member from the list.

```javascript
// Called from HTML: onclick="selectTeamMember(this, 'tm-001')"
```

#### `sendMessage()`
Sends a message in the team chat.

```javascript
sendMessage(); // Sends message from input field
```

#### `handleMessageKeypress(event)`
Handles Enter key in message input.

```javascript
// Automatically called on keypress
```

### Data Management

#### `storeData(key, value)`
Stores data in localStorage.

```javascript
storeData('reports', reportArray);
```

#### `retrieveData(key)`
Retrieves data from localStorage.

```javascript
const reports = retrieveData('reports');
```

#### `clearData(key)`
Clears data from localStorage.

```javascript
clearData('reports');
```

### Report Management

#### `addReport(reportData)`
Adds a new report to the list.

```javascript
addReport({
    site: 'Keffi',
    date: '2026-02-12',
    workCompleted: '...',
    progress: 72
});
```

#### `getReports()`
Retrieves all reports.

```javascript
const allReports = getReports();
```

#### `updateReportStatus(reportId, status)`
Updates a report's status.

```javascript
updateReportStatus('rep-001', 'approved');
```

### Utility Functions

#### `formatDate(date)`
Formats date to readable format.

```javascript
const formatted = formatDate(new Date()); // "February 12, 2026"
```

#### `formatTime(date)`
Formats time to readable format.

```javascript
const time = formatTime(new Date()); // "07:30 AM"
```

#### `daysRemaining(endDate)`
Calculates days remaining until end date.

```javascript
const days = daysRemaining('2026-03-12'); // Number of days
```

#### `generateId()`
Generates a unique ID.

```javascript
const id = generateId(); // "id-1707639600000-abc123def"
```

#### `debounce(func, wait)`
Creates a debounced version of a function.

```javascript
const debouncedSearch = debounce(searchFunction, 300);
```

### Initialization

#### `initializeApp()`
Initializes all event listeners and functionality.

```javascript
// Automatically called on DOMContentLoaded
```

---

## 🔌 Event Listeners

### Global Events

- **scroll**: Updates active navigation based on scroll position
- **load**: Logs performance metrics
- **error**: Global error handler
- **unhandledrejection**: Handles unhandled promise rejections

### Form Events

- **submit**: Form submission handling
- **blur**: Field validation on blur
- **keypress**: Message input Enter key handling

### Click Events

- **Navigation links**: Smooth scroll to sections
- **Tab buttons**: Switch between dashboard tabs
- **Role cards**: Navigate to respective sections
- **Team members**: Select team member
- **Send button**: Send message

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile first approach */
@media (max-width: 768px) {
    /* Tablet and mobile adjustments */
    - Hide desktop navigation
    - Stack grid layouts to single column
    - Reduce font sizes
    - Adjust padding and margins
}
```

### Mobile Optimizations

- Navigation hidden on mobile (hamburger menu ready)
- Grid layouts convert to single column
- Font sizes reduced appropriately
- Touch-friendly button sizes
- Optimized spacing for small screens

---

## 🚀 Usage Instructions

### Basic Setup

1. **Save the files:**
   - `index.html` - Main HTML file
   - `styles.css` - CSS stylesheet (optional if using embedded styles)
   - `script.js` - JavaScript file (optional if using embedded script)

2. **Open in browser:**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Using a local server
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

### Customization

#### Change Colors
Edit the CSS variables in `styles.css` or the `<style>` tag in `index.html`:

```css
:root {
    --primary: #15803d;      /* Change primary color */
    --primary-light: #22c55e; /* Change light variant */
    --foreground: #1f2937;    /* Change text color */
}
```

#### Update Content
Edit text content directly in the HTML:

```html
<h1>Your Custom Title</h1>
<p>Your custom description</p>
```

#### Modify Images
Replace image URLs in the HTML:

```html
<img src="your-image-url" alt="Description">
```

#### Add New Sections
Copy an existing section and modify:

```html
<section class="new-section" id="new-id">
    <div class="container">
        <!-- Your content -->
    </div>
</section>
```

---

## 🔐 Security Considerations

1. **Input Validation**: All form inputs are validated before submission
2. **XSS Prevention**: Use textContent instead of innerHTML for user data
3. **CSRF Protection**: Implement token-based protection for form submissions
4. **Data Privacy**: Don't store sensitive data in localStorage
5. **HTTPS**: Always use HTTPS in production

---

## ⚡ Performance Optimization

1. **CSS**: Minify for production
2. **JavaScript**: Debounce scroll and resize events
3. **Images**: Optimize image sizes and use appropriate formats
4. **Caching**: Implement browser caching for static assets
5. **Lazy Loading**: Load images on demand

---

## 🐛 Troubleshooting

### Navigation not working
- Ensure section IDs match href values
- Check browser console for JavaScript errors

### Styles not applying
- Verify CSS file is linked correctly
- Check for CSS specificity issues
- Clear browser cache

### Form not submitting
- Check form validation in console
- Ensure all required fields are filled
- Verify JavaScript is enabled

### Images not loading
- Check image URLs are correct
- Verify CORS headers if loading from external source
- Use absolute URLs for external images

---

## 📞 Support & Contact

For issues or questions about this website:

**Project Leadership:**
- **Project Coordinator:** Dr. Mohammed Ismail, P.hD
- **Project Engineer:** Engr. Sunday Adaogoshi Eya

**Organization:** NEWMAP-EIB Nasarawa State
**Initiative:** Erosion Control Initiative

---

## 📄 License

This website is developed for the NEWMAP-EIB Nasarawa State project.
All rights reserved © 2026

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-02-12 | Initial release with all core features |

---

## 📚 Additional Resources

- [HTML5 Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3 Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Accessibility](https://www.w3.org/WAI/)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

**Last Updated:** February 12, 2026
**Status:** Production Ready
