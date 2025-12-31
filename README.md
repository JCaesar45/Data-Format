# ChronoMorph · Living Date  
**A self-updating, interactive date micro-app with a real-time particle-network backdrop.**

---

## 🔮 What it is
ChronoMorph is a single-file web component that:

- Generates two canonical date strings (ISO-like & human-readable) every millisecond
- Displays them inside a glass-morphic card that levitates on hover
- Lets you copy either date with one click (visual feedback included)
- Paints an animated, hue-shifting particle network behind everything—no libraries, pure Canvas 2D
- Adapts to any viewport and remains 100 % client-side

In short: **aesthetic + utility + performance**, the trifecta interviewers love to see.

---

## 🧪 Tech Highlights
- **Vanilla ES6** – zero dependencies, zero build step
- **`<canvas>` 60 fps** particle system with distance-based edge fading
- **CSS `backdrop-filter`** for iOS-style glass without images
- **Clipboard API** with progressive enhancement (secure context only)
- **Responsive** down to 320 px width; retina-aware canvas sizing
- **~5 kB** gzipped total payload (HTML+CSS+JS)

---

## 🚀 Quick Start
1. Clone / download the repo  
2. Open `index.html` in any modern browser  
3. Click either date to copy it to your clipboard  
4. Resize the window—particles re-calibrate automatically

That’s it. No server, no bundler, no config.

---

## 📁 Project Tree
```
chrono-morph/
├─ index.html   # single self-contained file
└─ README.md    # this file
```

---

## 🔍 Code Anatomy
| Section | Purpose |
|--------|---------|
| `getDateFormats()` | Pure function that returns `[YYYY-M-D, "Weekday, Month D, YYYY"]` |
| `.date-slot` | Interactive divs with hover lift & copied-state glow |
| `Particle` class | ES6 class handling position, velocity, bounce & render |
| `animate()` | RAF loop that clears, updates, draws particles + edges |
| `resize` listener | Recreates particle count based on new viewport area |

---

## 🎯 Possible Extensions
- Feed the dates into a hidden `<input>` for instant form filling
- Pipe the copied value to a global event bus (Micro-frontend ready)
- Swap the hue slider for user-driven theming
- Pre-render the same canvas as OG-image for social sharing

---

## 📄 License
MIT – use it in portfolios, client work, or your next startup; just don’t blame me if you get hired.

---

**Built with ☕ and curiosity by Jordan Leturgez**  
```
