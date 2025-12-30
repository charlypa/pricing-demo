# React vs Vanilla JavaScript: Performance Comparison

A live, interactive comparison of React and vanilla JavaScript performance using an identical pricing page implementation.

**[View Live Demo →](https://yourusername.github.io/pricing-demo/)**

## What This Demonstrates

This project compares two functionally identical implementations of a pricing page:
- **Vanilla JavaScript**: 230 lines, 0 dependencies
- **React**: 240 lines, 3 dependencies (React, ReactDOM, Babel)

The comparison includes:
- Real-time performance metrics (First Paint, DOM Interactive, Load Complete)
- Side-by-side live demos
- Interactive source code viewer with syntax highlighting

## Quick Start

### View Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/pricing-demo.git
cd pricing-demo

# Start a local server
python -m http.server 8000

# Open http://localhost:8000
```

### Deploy to GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select "main" branch as source
4. Your site will be live at `https://yourusername.github.io/pricing-demo/`

## Project Structure

```
pricing-demo/
├── index.html       # Performance comparison page
├── vanilla/         # Vanilla JavaScript implementation
├── react/           # React implementation
└── README.md
```

## Key Findings

The comparison reveals:
- **Performance**: Vanilla JavaScript loads 2-3x faster
- **Complexity**: Similar code length (~230-240 lines)
- **Dependencies**: Vanilla has zero external dependencies
- **Use Case**: For simple UIs, vanilla JavaScript offers better performance with comparable code complexity

## Technical Details

### Vanilla Implementation
- Direct DOM manipulation
- Event listeners for interactivity
- Data attributes for state management
- Standard CSS for styling

### React Implementation
- Component-based architecture
- State hooks (useState)
- JSX for templating
- Same CSS styling

### Performance Measurement
- Uses Navigation Timing API
- Measures from iframes to avoid cross-contamination
- Captures First Paint, DOM Interactive, DOM Content Loaded, and Load Complete
- CodeMirror loads asynchronously to prevent measurement interference

## Use Cases

This comparison is ideal for:
- Understanding framework overhead in simple applications
- Making informed technology choices
- Educational purposes
- Technical blog posts and presentations

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile: Fully responsive

## License

Open source - free to use and modify.

## Author

Created as a practical demonstration of framework performance trade-offs.
