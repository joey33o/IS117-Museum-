This is a great way to kickstart the project. By giving an AI coding agent (like Cursor, Replit, or GitHub Copilot) a clear "Design Persona" and technical constraints upfront, you'll get much cleaner code.

Here is a structured prompt you can copy and paste. I’ve organized it to emphasize the **Adaptive UI** and the **Astro/GSAP** stack we discussed.

---

### 📝 Instruction Letter for AI Coding Agent

**Subject:** Development of "The Celestial Eye" – A Transition-Based Telescope Museum Website

**Project Overview:**
I am building a telescope museum website that serves as a visual metaphor for the history of optics. The site must transition from a "Grunge/Terrestrial" aesthetic (early history) to a "Swiss/Celestial" aesthetic (modern space exploration) based on the user's scroll position.

**Technical Stack:**

- **Framework:** Astro (Static Site Generator)
- **Styling:** Tailwind CSS (or standard CSS modules)
- **Animation Engine:** GSAP with ScrollTrigger plugin
- **Hosting:** GitHub Pages (keep assets optimized for static hosting)

**The Design Transition Requirements:**

1. **Phase 1: The Grunge Era (Scroll 0% - 40%)**

- **Background:** `#F1E7D0` (Aged Parchment) with subtle distressed textures.
- **Typography:** Serif fonts (e.g., 'Crimson Text') and "ink-stamped" headers.
- **Layout:** Overlapping elements, organic borders, and a "mechanical" feel.
- **Effect:** Apply a subtle "Atmospheric Blur" or grain filter to images.

2. **Phase 2: The Breakout (Scroll 40% - 50%)**

- Using GSAP ScrollTrigger, create a "clearing" effect where the background transitions from cream to `#000000` (Pure Black).
- The "atmospheric" blur filter on images should transition to `blur(0)` and high sharpness.

3. **Phase 3: The Swiss Era (Scroll 50% - 100%)**

- **Background:** `#000000`.
- **Typography:** Bold, clean Sans-Serif (e.g., 'Inter' or 'Helvetica').
- **Layout:** High negative space, rigid grid system, no overlapping elements.
- **UI:** Adaptive Navigation that shifts from a solid brass-textured bar to a transparent, 1px line-based minimalist nav.

**Specific Functional Constraints:**

- **Navigation:** The UI must be "Adaptive." Use a global state or class toggle (`.is-space-era`) triggered by GSAP to swap font families and UI colors.
- **Cursor:** Do NOT use a custom cursor; keep the default system pointer.
- **Interactions:** In the Grunge section, use "Refraction" logic (lens-like distortions). In the Swiss section, use "Reflection" logic (hexagonal grids, sharp lines).

**Initial Task:**
Please scaffold the Astro project structure. Create a `MainLayout.astro` that includes the GSAP ScrollTrigger setup to toggle a `.is-space-era` class on the body tag. Then, create a homepage with two large sections: `#earth-era` and `#space-era` to demonstrate the color and font transition.

---

### How to use this with your AI agent:

1. **Create a new folder** for your project.
2. **Open your AI coding tool** (e.g., Cursor or VS Code with an AI extension).
3. **Paste the letter above** into the chat and hit enter.
4. It will likely start by giving you the terminal commands to install **Astro** and **GSAP**.
