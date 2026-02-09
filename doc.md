# Elzero Website Template

A modern, fully responsive business website template built with HTML5, CSS3, JavaScript, and Bootstrap 5. Features bilingual support (English/Arabic) with RTL layout, dynamic animations, and multiple content sections.

**Demo Link:** https://hamza-omran.github.io/HTML_CSS_JS_And_Bootstrap_Template_3/

<img width="1696" height="845" alt="image" src="https://github.com/user-attachments/assets/0042771d-cde9-45e6-ad8a-f0ccf3d402da" />

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Sections Overview](#sections-overview)
- [Internationalization](#internationalization)
- [Browser Support](#browser-support)
- [License](#license)

---

## Features

### Core Features
- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Bilingual Support** - English and Arabic with automatic RTL layout switching
- **Bootstrap 5 Integration** - Leverages Bootstrap's grid system and components
- **Font Awesome Icons** - Comprehensive icon library for visual elements
- **Smooth Animations** - CSS transitions and JavaScript-powered animations
- **Scroll-based Interactions** - Dynamic content that animates on scroll

### Interactive Features
- **Mega Menu Navigation** - Comprehensive navigation with dropdown menu and image preview
- **Language Switcher** - Instant language toggle with persistent preference
- **Scroll-to-Top Button** - Appears after scrolling with smooth animation
- **Animated Counters** - Statistics that count up when scrolled into view
- **Progress Bars** - Skill level indicators that animate on scroll
- **Event Countdown Timer** - Real-time countdown for upcoming events

### Content Sections
- Landing/Hero section with call-to-action
- Articles showcase with grid layout
- Image gallery with hover effects
- Features presentation with color-coded cards
- Customer testimonials with ratings
- Team members showcase with social links
- Services grid with detailed descriptions
- Skills display with animated progress bars
- "How It Works" workflow visualization
- Events section with countdown timer
- Pricing plans comparison
- Video library with playlist
- Statistics dashboard with animated counters
- Discount request form
- Footer with contact information and social links

---

## Project Structure

```
HTML_CSS_JS_And_Bootstrap_Template_3-main/
│
├── index.html                 # Main HTML file
│
├── css/
│   ├── master.css            # Custom LTR styles
│   ├── rtlMaster.css         # RTL-specific styles for Arabic
│   ├── bootstrap.min.css     # Bootstrap 5 framework
│   ├── bootstrap.min.css.map # Bootstrap source map
│   └── all.min.css           # Font Awesome icons
│
├── js/
│   ├── main.js               # Custom JavaScript (animations, counters)
│   ├── translate.js          # i18next internationalization logic
│   ├── i18next.min.js        # i18next library
│   ├── bootstrap.bundle.min.js  # Bootstrap JavaScript
│   ├── bootstrap.bundle.min.js.map
│   └── all.min.js            # Font Awesome JavaScript
│
├── json/
│   ├── en.json               # English translations
│   └── ar.json               # Arabic translations
│
├── imgs/                      # Image assets
│   ├── landing-image.png
│   ├── cat-*.jpg             # Article/category images
│   ├── gallery-*.png/jpg     # Gallery images
│   ├── features-*.jpg        # Feature section images
│   ├── avatar-*.png          # Testimonial avatars
│   ├── team-*.jpg/png        # Team member photos
│   ├── skills.png
│   ├── work-steps*.png
│   ├── events.png
│   ├── hosting-*.png         # Pricing plan images
│   ├── video-preview.jpg
│   ├── discount.png
│   ├── megamenu.png
│   └── Elzero.jpg            # Favicon
│
├── fonts/                     # Custom web fonts (4 font files)
│
├── webfonts/                  # Font Awesome webfonts (15 files)
│
└── README.md                  # This file
```

---

## Technologies Used

### Frontend Framework
- **HTML5** - Semantic markup with modern HTML5 elements
- **CSS3** - Custom styling with flexbox, grid, animations, and transitions
- **JavaScript (ES6+)** - Modern JavaScript with arrow functions, async/await
- **Bootstrap 5** - Responsive grid system and utility classes

### Libraries & Dependencies
- **Font Awesome 6** - Icon toolkit
- **i18next** - Internationalization framework
- **Custom Fonts** - Local web fonts for typography

### Design Patterns
- Mobile-first responsive design
- CSS custom properties (CSS variables)
- BEM-like class naming conventions
- Modular component architecture

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Download the Project**
   ```bash
   git clone <repository-url>
   cd HTML_CSS_JS_And_Bootstrap_Template_3-main
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:

   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```

   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

3. **Access the Website**
   - Navigate to `http://localhost:8000` (or the port shown)
   - The website should load with default English language

---

## Customization Guide

### 1. Changing Content

#### Update Text Content
All text content is managed through JSON translation files for easy multilingual updates:

**Edit English Content:**
```javascript
// json/en.json
{
  "logo": "Your Company Name",
  "landing-title": "Your Custom Heading",
  "landing-desc": "Your description here",
  // ... more translations
}
```

**Edit Arabic Content:**
```javascript
// json/ar.json
{
  "logo": "اسم شركتك",
  "landing-title": "عنوانك المخصص",
  // ... more translations
}
```

#### Update HTML Structure
Edit `index.html` to modify sections. Each section is clearly commented:
```html
<!-- landing -->
<section class="landing">
  <!-- Your custom content -->
</section>
```

### 2. Styling Customization

#### Colors
Modify CSS custom properties in `css/master.css`:
```css
:root {
  --main-color: #2196f3;        /* Primary blue */
  --main-color-alt: #1787e0;    /* Darker blue */
  --main-transition: 0.3s;      /* Animation speed */
}
```

#### Typography
Change fonts by updating the font-family in `css/master.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

#### Layout
Bootstrap grid classes control layout. Modify columns for responsive behavior:
```html
<!-- 3 columns on large screens, 2 on medium, 1 on small -->
<div class="col-lg-4 col-md-6 col-sm-12">
```

### 3. Adding New Sections

1. Add HTML markup in `index.html`
2. Add corresponding styles in `css/master.css`
3. Add translation keys to both `json/en.json` and `json/ar.json`
4. Update navigation menu if needed

Example:
```html
<!-- Add to index.html -->
<section class="custom-section" id="custom">
  <div class="container">
    <h2 data-i18n="custom-title"></h2>
    <p data-i18n="custom-desc"></p>
  </div>
</section>
```

```json
// Add to json/en.json
{
  "custom-title": "Custom Section Title",
  "custom-desc": "Custom description text"
}
```

### 4. Modifying JavaScript Behavior

#### Animation Timing
Adjust scroll-based animation thresholds in `js/main.js`:
```javascript
// Modify when animations trigger
if(window.scrollY >= document.getElementById("skills").offsetTop - 200) {
  // Animations execute
}
```

#### Counter Values
Update statistics in HTML `data-to` attributes:
```html
<span class="number" data-to="500">0</span>
```

#### Countdown Timer
Set initial event countdown in HTML:
```html
<span class="days">15</span>    <!-- Days -->
<span class="hours">8</span>    <!-- Hours -->
<span class="minutes">45</span> <!-- Minutes -->
<span class="seconds">56</span> <!-- Seconds -->
```

---

## Sections Overview

### 1. Header & Navigation
- Fixed header with logo and navigation
- Mega menu with visual categories
- Language switcher dropdown (EN/AR)
- Fully responsive mobile menu

### 2. Landing Section
- Hero image with welcome message
- Call-to-action text
- Animated down arrow for smooth scroll

### 3. Articles Section
- Responsive grid layout (8 article cards)
- Hover effects on cards
- "Read More" links
- Category images

### 4. Gallery Section
- 6-image grid layout
- Hover zoom effects
- Responsive columns
- Decorative spike divider

### 5. Features Section
- 3 feature cards (Quality, Time, Passion)
- Color-coded by theme (red, green, blue)
- Large images with overlays
- CTA buttons

### 6. Testimonials Section
- 6 customer testimonial cards
- Avatar images
- Star ratings (1-5 stars)
- Developer role labels

### 7. Team Members Section
- 7 team member profiles
- Social media links (Facebook, Twitter, LinkedIn, YouTube)
- Hover effects revealing social icons

### 8. Services Section
- 6 service offerings
- Icon-based design
- "Details" links
- Decorative dividers

### 9. Skills Section
- Image showcase
- 4 animated progress bars (HTML, CSS, JS, Python)
- Percentages animate on scroll into view

### 10. How It Works Section
- 3-step workflow visualization
- Image with descriptive text
- Business Analysis → Architecture → Development

### 11. Events Section
- Featured event image
- Real-time countdown timer (Days, Hours, Minutes, Seconds)
- Event description
- Email subscription form

### 12. Pricing Plans Section
- 3 tier pricing (Basic, Advanced, Professional)
- "Most Popular" badge
- Feature lists
- CTA buttons
- Responsive 3-column layout

### 13. Top Videos Section
- Video playlist sidebar (7 videos)
- Main video preview area
- Duration timestamps
- Shuffle icon

### 14. Statistics Section
- 4 animated counters (Clients, Projects, Countries, Money)
- Icons for each stat
- Count-up animation on scroll

### 15. Discount Request Section
- Split layout (info + form)
- Contact form with 4 fields
- Decorative background image

### 16. Footer
- 4-column layout
- Social media links
- Important links list
- Contact information (location, hours, phone)
- Gallery thumbnails
- Copyright notice

### 17. Scroll-to-Top Button
- Appears after scrolling one screen height
- Smooth scroll animation
- Fixed positioning

---

## Internationalization

### Language Support
The template supports **English (EN)** and **Arabic (AR)** with full RTL (Right-to-Left) layout support.

### How It Works

#### i18next Library
Uses i18next JavaScript library for dynamic translation:
```javascript
// Automatic language detection
const lang = localStorage.getItem("lang") || "en";

// Initialize with selected language
i18next.init({
  lng: lang,
  resources: { en: {...}, ar: {...} }
});
```

#### Translation Attributes
HTML elements use special data attributes:
```html
<!-- Text content -->
<h1 data-i18n="landing-title"></h1>

<!-- Placeholder text -->
<input data-i18n-placeholder="email_placeholder">

<!-- Button values -->
<input type="submit" data-i18n-value="subscribe">
```

#### RTL Layout Switching
Automatic stylesheet swapping for Arabic:
```javascript
function changeLang(lang) {
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  const rtlStyle = document.getElementById("rtl-style");
  rtlStyle.disabled = lang !== 'ar';
}
```

### Adding New Languages

1. **Create Translation File**
   - Create `json/fr.json` for French
   - Copy structure from `en.json`
   - Translate all values

2. **Update Language Resources**
   ```javascript
   // js/translate.js
   const resources = {
     en: { translation: await(await fetch('./json/en.json')).json() },
     ar: { translation: await(await fetch('./json/ar.json')).json() },
     fr: { translation: await(await fetch('./json/fr.json')).json() }
   };
   ```

3. **Add Language Selector Option**
   ```html
   <select id="langSelect" onchange="changeLang(this.value)">
     <option value="en" data-i18n="en"></option>
     <option value="ar" data-i18n="ar"></option>
     <option value="fr" data-i18n="fr"></option>
   </select>
   ```

4. **Create RTL Stylesheet (if needed)**
   - For RTL languages, create `css/rtlLanguage.css`
   - Add logic to enable it in `translate.js`

---

## Browser Support

### Tested Browsers
- Chrome 90+ (Windows, macOS, Linux)
- Firefox 88+
- Safari 14+
- Microsoft Edge 90+
- Opera 76+

### Mobile Browsers
- Chrome Mobile (Android)
- Safari Mobile (iOS)
- Samsung Internet

### Compatibility Notes
- Uses ES6+ JavaScript (arrow functions, async/await, template literals)
- Requires modern browser with native ES6 module support
- CSS Grid and Flexbox used extensively
- Does not support Internet Explorer

---

## Key JavaScript Features

### 1. Scroll-to-Top Button
```javascript
// Appears after scrolling one screen height
window.addEventListener("scroll", () => {
  window.scrollY > window.screen.height 
    ? button.classList.add("visible") 
    : button.classList.remove("visible");
});
```

### 2. Animated Progress Bars
```javascript
// Triggers when skills section scrolls into view
if(window.scrollY >= document.getElementById("skills").offsetTop) {
  els.forEach(el => {
    el.style.width = el.getAttribute("percentage") + "%";
  });
}
```

### 3. Count-up Statistics
```javascript
// Animates numbers from 0 to target value
function count(el, sign="") {
  let counter = 0;
  let inter = setInterval(() => {
    counter++;
    el.textContent = `${counter}${sign}`;
    if(counter == +el.dataset.to) {
      clearInterval(inter);
    }
  }, 2000 / +el.dataset.to);
}
```

### 4. Event Countdown Timer
```javascript
// Real-time countdown tracking days, hours, minutes, seconds
setInterval(() => {
  // Increment seconds and handle rollovers
  s++;
  if(s == 60) { s = 0; m++; }
  if(m == 60) { m = 0; h++; }
  if(h == 24) { h = 0; d++; }
  // Update display with leading zeros
}, 1000);
```

---

## Performance Optimization Tips

### Image Optimization
- Compress images before adding to `imgs/` folder
- Use appropriate formats (JPG for photos, PNG for graphics)
- Consider WebP format for modern browsers

### CSS Optimization
- Minify custom CSS for production
- Remove unused Bootstrap components
- Use CSS sprites for icons (optional)

### JavaScript Optimization
- Enable code minification for production
- Lazy load images below the fold
- Defer non-critical JavaScript

### Caching
Add cache headers for static assets:
```
Cache-Control: public, max-age=31536000
```

---

## Troubleshooting

### Language Not Switching
**Issue:** Language selector doesn't change content

**Solutions:**
1. Check browser console for JavaScript errors
2. Verify JSON files are in `/json/` directory
3. Clear localStorage: `localStorage.clear()`
4. Ensure correct MIME type for JSON files on server

### Animations Not Working
**Issue:** Scroll animations or counters not triggering

**Solutions:**
1. Check that `js/main.js` is loaded after DOM
2. Verify section IDs match JavaScript selectors
3. Test scroll position thresholds
4. Check browser console for JavaScript errors

### RTL Layout Issues
**Issue:** Arabic layout not displaying correctly

**Solutions:**
1. Verify `rtlMaster.css` is in `/css/` folder
2. Check that RTL styles aren't being overridden
3. Ensure `dir="rtl"` is applied to `<body>` element
4. Test with Arabic language selected

### Responsive Layout Problems
**Issue:** Layout breaks on mobile/tablet

**Solutions:**
1. Check Bootstrap grid classes are correct
2. Verify viewport meta tag in HTML:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
3. Test responsive breakpoints
4. Use browser DevTools device emulation

---

## Development Workflow

### Recommended Tools
- **Code Editor:** VS Code, Sublime Text, or Atom
- **Browser DevTools:** Chrome DevTools or Firefox Developer Tools
- **Version Control:** Git for tracking changes
- **Local Server:** Live Server (VS Code extension) or Python SimpleHTTPServer

### Best Practices
1. **Use Version Control**
   - Commit changes regularly
   - Use meaningful commit messages
   - Create branches for new features

2. **Test Across Browsers**
   - Test in at least 2-3 browsers
   - Use responsive design mode
   - Check both LTR and RTL layouts

3. **Maintain Translation Files**
   - Keep English and Arabic translations in sync
   - Use consistent naming for translation keys
   - Add comments for complex translations

4. **Optimize Before Deployment**
   - Minify CSS and JavaScript
   - Compress images
   - Enable caching
   - Test page load speed

---

## Deployment

### Static Hosting Options

#### GitHub Pages
```bash
# Push to GitHub repository
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages in repository settings
# Select main branch → / (root)
```

#### Netlify
1. Drag and drop project folder to Netlify
2. Or connect GitHub repository
3. Site will be live at `https://your-site.netlify.app`

#### Vercel
```bash
npm i -g vercel
cd HTML_CSS_JS_And_Bootstrap_Template_3-main
vercel
```

### Server Configuration

**For Apache (`.htaccess`):**
```apache
# Enable GZIP compression
AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript

# Enable caching
<FilesMatch "\.(jpg|jpeg|png|gif|css|js|woff|woff2)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

**For Nginx:**
```nginx
# Enable GZIP
gzip on;
gzip_types text/css application/javascript image/svg+xml;

# Enable caching
location ~* \.(jpg|jpeg|png|gif|css|js|woff|woff2)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

---

## Credits

- **Template Design:** Inspired by modern web design trends
- **Framework:** [Bootstrap 5](https://getbootstrap.com/)
- **Icons:** [Font Awesome 6](https://fontawesome.com/)
- **Internationalization:** [i18next](https://www.i18next.com/)
- **Demo Images:** Placeholder images for demonstration

---

## License

This project is available for personal and commercial use. Feel free to modify and distribute as needed.

---

## Support

For questions, issues, or feature requests:
- Open an issue on GitHub
- Contact via the demo website
- Check browser console for error messages

---

## Changelog

### Version 1.0 (Current)
- Initial release
- Full bilingual support (EN/AR)
- 17 content sections
- Responsive design
- Animated interactions
- Bootstrap 5 integration

---

**Made by Hamza Omran**

**Live Demo:** https://hamza-omran.github.io/HTML_CSS_JS_And_Bootstrap_Template_3/
