# React vs Native JavaScript: Performance Comparison

A live, interactive comparison of React and native JavaScript performance using an identical pricing page implementation. **Publication-ready for Medium articles.**

**[View Live Demo →](https://yourusername.github.io/pricing-demo/)**

## Key Finding

Native JavaScript loads **2-3x faster** than React for this simple pricing page (85ms vs 320ms first paint). Similar code complexity, zero dependencies.

## What This Demonstrates

This project compares two functionally identical implementations of a pricing page:
- **Native JavaScript**: 230 lines, 0 dependencies
- **React**: 240 lines, 3 dependencies (React, ReactDOM, Babel)

The comparison includes:
- Real-time performance metrics (First Paint, DOM Interactive, Load Complete)
- Side-by-side live demos
- Interactive source code viewer with syntax highlighting
- Context sections explaining when each approach makes sense
- Complete methodology and key takeaways

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
├── native/          # Native JavaScript implementation
├── react/           # React implementation
└── README.md
```

## For Medium Article Authors

This demo is optimized for Medium publication with:

### Built-in Narrative Elements
- **Key Finding Callout**: Immediately visible at top
- **Context Section**: "When This Matters" explains use cases
- **Takeaways Section**: Summarizes findings for skimmers
- **Methodology**: Shows transparency and credibility

### Shareability Features
- Open Graph meta tags for social sharing
- Responsive mobile design
- Professional visual design
- Accessible to screen readers

### Interactive Engagement
- Live performance measurement
- Re-measure button for verification
- Syntax-highlighted code viewer
- Side-by-side comparison

### How to Use in Your Article

1. **Embed the demo** in your Medium article using the URL
2. **Reference key sections**:
   - "As you can see in the demo above, native JavaScript..."
   - "The Key Takeaways section shows..."
3. **Add your analysis**: The demo provides evidence; your article provides interpretation
4. **Cite the methodology**: Builds credibility

The demo works standalone or as supporting evidence for a larger article about framework performance, native JavaScript benefits, or technical decision-making.

## Key Findings

The comparison reveals:
- **Performance**: Native JavaScript loads 2-3x faster (85ms vs 320ms first paint)
- **Complexity**: Similar code length (~230-240 lines)
- **Dependencies**: Native has zero external dependencies (React: 3 libs, ~300KB)
- **Use Case**: For simple UIs, native JavaScript offers better performance with comparable code complexity

## Technical Details

### Native Implementation
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
