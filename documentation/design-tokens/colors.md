# Color Tokens

## Overview

The color system is built on a foundation of base colors that are transformed into semantic tokens for consistent usage across the application. The system supports both light and dark themes.

## Base Colors

### Primary Colors

```css
--primary-50: #f0f9ff;
--primary-100: #e0f2fe;
--primary-200: #bae6fd;
--primary-300: #7dd3fc;
--primary-400: #38bdf8;
--primary-500: #0ea5e9;
--primary-600: #0284c7;
--primary-700: #0369a1;
--primary-800: #075985;
--primary-900: #0c4a6e;
--primary-950: #082f49;
```

### Neutral Colors

```css
--neutral-50: #f8fafc;
--neutral-100: #f1f5f9;
--neutral-200: #e2e8f0;
--neutral-300: #cbd5e1;
--neutral-400: #94a3b8;
--neutral-500: #64748b;
--neutral-600: #475569;
--neutral-700: #334155;
--neutral-800: #1e293b;
--neutral-900: #0f172a;
--neutral-950: #020617;
```

### Semantic Colors

```css
--success-50: #f0fdf4;
--success-500: #22c55e;
--success-700: #15803d;

--warning-50: #fffbeb;
--warning-500: #f59e0b;
--warning-700: #b45309;

--error-50: #fef2f2;
--error-500: #ef4444;
--error-700: #b91c1c;

--info-50: #eff6ff;
--info-500: #3b82f6;
--info-700: #1d4ed8;
```

## Theme Colors

### Light Theme

```css
--background: var(--neutral-50);
--foreground: var(--neutral-900);
--card: var(--neutral-50);
--card-foreground: var(--neutral-900);
--popover: var(--neutral-50);
--popover-foreground: var(--neutral-900);
--primary: var(--primary-600);
--primary-foreground: var(--neutral-50);
--secondary: var(--neutral-100);
--secondary-foreground: var(--neutral-900);
--muted: var(--neutral-100);
--muted-foreground: var(--neutral-500);
--accent: var(--neutral-100);
--accent-foreground: var(--neutral-900);
--destructive: var(--error-500);
--destructive-foreground: var(--neutral-50);
--border: var(--neutral-200);
--input: var(--neutral-200);
--ring: var(--primary-500);
```

### Dark Theme

```css
--background: var(--neutral-950);
--foreground: var(--neutral-50);
--card: var(--neutral-900);
--card-foreground: var(--neutral-50);
--popover: var(--neutral-900);
--popover-foreground: var(--neutral-50);
--primary: var(--primary-500);
--primary-foreground: var(--neutral-950);
--secondary: var(--neutral-800);
--secondary-foreground: var(--neutral-50);
--muted: var(--neutral-800);
--muted-foreground: var(--neutral-400);
--accent: var(--neutral-800);
--accent-foreground: var(--neutral-50);
--destructive: var(--error-500);
--destructive-foreground: var(--neutral-50);
--border: var(--neutral-800);
--input: var(--neutral-800);
--ring: var(--primary-500);
```

## Usage

### Tailwind Classes

```tsx
// Background colors
<div className="bg-primary">Primary background</div>
<div className="bg-secondary">Secondary background</div>
<div className="bg-muted">Muted background</div>

// Text colors
<div className="text-primary">Primary text</div>
<div className="text-secondary">Secondary text</div>
<div className="text-muted">Muted text</div>

// Border colors
<div className="border border-border">Border</div>
```

### CSS Variables

```css
.custom-element {
  background-color: var(--background);
  color: var(--foreground);
  border-color: var(--border);
}
```

## Color Combinations

### Primary Actions

- Background: `var(--primary)`
- Text: `var(--primary-foreground)`
- Hover: `var(--primary-700)`

### Secondary Actions

- Background: `var(--secondary)`
- Text: `var(--secondary-foreground)`
- Hover: `var(--secondary-700)`

### Destructive Actions

- Background: `var(--destructive)`
- Text: `var(--destructive-foreground)`
- Hover: `var(--destructive-700)`

## Accessibility

### Color Contrast

- Text must maintain a minimum contrast ratio of 4.5:1 for normal text
- Text must maintain a minimum contrast ratio of 3:1 for large text
- UI components must maintain a minimum contrast ratio of 3:1

### Color Blindness

- Don't rely solely on color to convey information
- Use patterns, icons, or text to supplement color
- Test designs with color blindness simulators

## Best Practices

1. **Consistency**

   - Use semantic color tokens instead of raw values
   - Maintain consistent color usage across components
   - Follow the established color hierarchy

2. **Theme Support**

   - Test colors in both light and dark themes
   - Ensure proper contrast in both themes
   - Use theme-aware color tokens

3. **Responsive Design**
   - Consider color visibility on different devices
   - Test colors in various lighting conditions
   - Ensure colors work well at different sizes

## Related Resources

- [Typography Tokens](./typography.md)
- [Component Tokens](../core-ui/README.md)
- [Theme Configuration](../theming.md)
