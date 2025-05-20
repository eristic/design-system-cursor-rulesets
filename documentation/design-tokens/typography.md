# Typography Tokens

## Overview

The typography system provides a consistent set of text styles across the application. It includes font families, sizes, weights, line heights, and letter spacing.

## Font Families

```css
--font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
  "Liberation Mono", "Courier New", monospace;
```

## Font Sizes

```css
--font-size-xs: 0.75rem; /* 12px */
--font-size-sm: 0.875rem; /* 14px */
--font-size-base: 1rem; /* 16px */
--font-size-lg: 1.125rem; /* 18px */
--font-size-xl: 1.25rem; /* 20px */
--font-size-2xl: 1.5rem; /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem; /* 36px */
--font-size-5xl: 3rem; /* 48px */
--font-size-6xl: 3.75rem; /* 60px */
```

## Font Weights

```css
--font-weight-thin: 100;
--font-weight-extralight: 200;
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
--font-weight-black: 900;
```

## Line Heights

```css
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
```

## Letter Spacing

```css
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0em;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;
```

## Text Styles

### Headings

```css
--heading-1: {
  font-size: var(--font-size-5xl);
  line-height: var(--line-height-tight);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
}

--heading-2: {
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-tight);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
}

--heading-3: {
  font-size: var(--font-size-3xl);
  line-height: var(--line-height-snug);
  font-weight: var(--font-weight-semibold);
}

--heading-4: {
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-snug);
  font-weight: var(--font-weight-semibold);
}

--heading-5: {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-normal);
  font-weight: var(--font-weight-semibold);
}

--heading-6: {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-normal);
  font-weight: var(--font-weight-semibold);
}
```

### Body Text

```css
--body-large: {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  font-weight: var(--font-weight-normal);
}

--body: {
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  font-weight: var(--font-weight-normal);
}

--body-small: {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  font-weight: var(--font-weight-normal);
}

--body-xs: {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-normal);
  font-weight: var(--font-weight-normal);
}
```

## Usage

### Tailwind Classes

```tsx
// Font families
<div className="font-sans">Sans-serif text</div>
<div className="font-serif">Serif text</div>
<div className="font-mono">Monospace text</div>

// Font sizes
<div className="text-xs">Extra small text</div>
<div className="text-sm">Small text</div>
<div className="text-base">Base text</div>
<div className="text-lg">Large text</div>

// Font weights
<div className="font-normal">Normal weight</div>
<div className="font-medium">Medium weight</div>
<div className="font-semibold">Semibold weight</div>
<div className="font-bold">Bold weight</div>

// Line heights
<div className="leading-none">Tight line height</div>
<div className="leading-normal">Normal line height</div>
<div className="leading-relaxed">Relaxed line height</div>

// Letter spacing
<div className="tracking-tight">Tight letter spacing</div>
<div className="tracking-normal">Normal letter spacing</div>
<div className="tracking-wide">Wide letter spacing</div>
```

### CSS Variables

```css
.custom-heading {
  font-family: var(--font-sans);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}
```

## Best Practices

1. **Hierarchy**

   - Use heading levels appropriately (h1-h6)
   - Maintain consistent heading sizes
   - Follow the established type scale

2. **Readability**

   - Ensure sufficient line height
   - Use appropriate letter spacing
   - Maintain proper contrast

3. **Responsive Design**

   - Adjust font sizes for different screens
   - Test readability at all breakpoints
   - Consider mobile-first approach

4. **Performance**
   - Use system fonts when possible
   - Optimize web font loading
   - Consider font subsetting

## Accessibility

1. **Text Size**

   - Minimum text size of 16px for body text
   - Allow text size adjustment
   - Support zoom functionality

2. **Line Length**

   - Optimal line length of 50-75 characters
   - Adjust container width for readability
   - Consider responsive line lengths

3. **Spacing**
   - Maintain consistent paragraph spacing
   - Use appropriate line height
   - Consider letter spacing for readability

## Related Resources

- [Color Tokens](./colors.md)
- [Spacing Tokens](./spacing.md)
- [Component Tokens](../core-ui/README.md)
