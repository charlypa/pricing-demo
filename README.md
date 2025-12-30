# Pricing Demo - React vs Vanilla JavaScript Performance Comparison

A side-by-side comparison of identical pricing page implementations using React and vanilla HTML/CSS/JavaScript, with real-time performance metrics and interactive code viewing.

## Overview

This project demonstrates the performance differences between React and vanilla JavaScript for a simple pricing page. The implementations are functionally identical but use different approaches:

- **Vanilla Version**: Pure HTML, CSS, and JavaScript with no dependencies
- **React Version**: React (via CDN) with JSX and Babel transpilation
- **Comparison Page**: Interactive side-by-side comparison with performance metrics

## Project Structure

```
pricing-demo/
├── vanilla/
│   └── index.html          # Vanilla JavaScript implementation
├── react/
│   └── index.html          # React implementation
├── compare/
│   └── index.html          # Side-by-side comparison with metrics
└── README.md
```

## Features

### Pricing Page Features
- Monthly/Annual billing toggle with 20% annual discount
- Three pricing tiers: Starter, Professional, Enterprise
- Responsive design with hover effects
- Clean, modern UI with gradient backgrounds

### Comparison Page Features
- **Real-time Performance Metrics**: Measures and compares:
  - First Paint
  - DOM Interactive
  - DOM Content Loaded
  - Load Complete
- **Interactive Code Viewer**: Syntax-highlighted code with CodeMirror
- **Side-by-Side Demos**: Live iframes showing both implementations
- **Code Complexity Stats**: Lines of code and dependencies comparison
- **Visual Performance Bars**: Easy-to-read metric comparisons

## Live Demo

Visit the live demo: **https://yourusername.github.io/pricing-demo/**

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for best results)

### Running Locally

#### Option 1: Direct File Opening
Simply open `index.html` in your browser, then navigate to:
- Home page with links to all demos
- Vanilla implementation
- React implementation
- Comparison page

#### Option 2: Local Web Server (Recommended)
Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
npx http-server
```

Then navigate to:
- http://localhost:8000/ - Home page
- http://localhost:8000/vanilla/ - Vanilla version
- http://localhost:8000/react/ - React version
- http://localhost:8000/compare/ - Comparison page

### Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/pricing-demo.git
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be live at `https://yourusername.github.io/pricing-demo/`

## Performance Insights

### Vanilla JavaScript Version
- **~230 lines of code**
- **0 dependencies**
- **No build step required**
- **Faster initial load and render times**
- Direct DOM manipulation with event listeners

### React Version
- **~240 lines of code**
- **3 dependencies**: React, ReactDOM, Babel
- **Runtime transpilation** (Babel via CDN)
- Component-based architecture
- Declarative state management with hooks

## Technical Implementation

### Vanilla Version
```javascript
// Simple event listener approach
toggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    prices.forEach(price => {
        price.textContent = isAnnual
            ? price.dataset.annual
            : price.dataset.monthly;
    });
});
```

### React Version
```javascript
// Component-based with state management
const [isAnnual, setIsAnnual] = useState(true);

<BillingToggle
    isAnnual={isAnnual}
    onToggle={() => setIsAnnual(!isAnnual)}
/>
```

## Code Viewer

The comparison page uses CodeMirror for syntax-highlighted code viewing:
- **Async Loading**: CodeMirror loads after performance measurements to avoid interference
- **Syntax Highlighting**: HTML/CSS/JavaScript and JSX modes
- **Read-Only Mode**: Code is displayed for viewing only
- **Dracula Theme**: Clean, dark theme for better readability

## Performance Optimization Notes

The comparison page is designed to measure performance accurately:
1. Iframes load the actual implementations
2. Performance metrics are captured from iframe windows
3. CodeMirror loads asynchronously (4s delay) to avoid interference
4. No cross-contamination between vanilla and React measurements

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design supported

## Use Cases

This demo is useful for:
- Understanding React vs vanilla JavaScript performance trade-offs
- Educational purposes for web development courses
- Benchmarking framework overhead for simple UIs
- Demonstrating when vanilla JavaScript might be preferred
- Learning about performance measurement techniques

## Key Takeaways

1. **For Simple UIs**: Vanilla JavaScript can be faster and simpler
2. **Code Complexity**: Similar lines of code, different approaches
3. **Dependencies Matter**: Framework overhead is measurable
4. **Right Tool for the Job**: Choose based on project complexity and team expertise

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to fork and experiment with:
- Adding more framework comparisons (Vue, Svelte, etc.)
- Testing with production builds instead of CDN versions
- Adding more complex UI interactions
- Measuring memory usage and bundle sizes

## Credits

Built to demonstrate practical performance differences between modern web development approaches.
