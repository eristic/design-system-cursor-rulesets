# Border Radius Tokens

## Overview

The border radius system provides a consistent set of rounded corners for UI elements. These tokens help maintain visual consistency and create a cohesive look across the interface.

## Base Radius Scale

```css
--radius-none: 0px;
--radius-sm: 0.125rem; /* 2px */
--radius: 0.25rem; /* 4px */
--radius-md: 0.375rem; /* 6px */
--radius-lg: 0.5rem; /* 8px */
--radius-xl: 0.75rem; /* 12px */
--radius-2xl: 1rem; /* 16px */
--radius-3xl: 1.5rem; /* 24px */
--radius-full: 9999px;
```

## Semantic Radius

```css
--radius-button: var(--radius);
--radius-card: var(--radius-lg);
--radius-input: var(--radius);
--radius-modal: var(--radius-lg);
--radius-dropdown: var(--radius);
--radius-tooltip: var(--radius);
```

## Usage

### Tailwind Classes

```tsx
// Basic radius
<div className="rounded-none">No radius</div>
<div className="rounded-sm">Small radius</div>
<div className="rounded">Default radius</div>
<div className="rounded-md">Medium radius</div>
<div className="rounded-lg">Large radius</div>
<div className="rounded-xl">Extra large radius</div>
<div className="rounded-2xl">Double extra large radius</div>
<div className="rounded-3xl">Triple extra large radius</div>
<div className="rounded-full">Full radius (circle)</div>

// Individual corners
<div className="rounded-t-lg">Rounded top corners</div>
<div className="rounded-b-lg">Rounded bottom corners</div>
<div className="rounded-l-lg">Rounded left corners</div>
<div className="rounded-r-lg">Rounded right corners</div>
```

### CSS Variables

```css
.custom-element {
  border-radius: var(--radius-lg);
}

.custom-card {
  border-radius: var(--radius-card);
}

.custom-button {
  border-radius: var(--radius-button);
}
```

## Component Guidelines

### Buttons

- Primary buttons: `var(--radius)`
- Secondary buttons: `var(--radius)`
- Icon buttons: `var(--radius-full)`
- Button groups: `var(--radius)` on outer corners

### Cards

- Standard cards: `var(--radius-lg)`
- Interactive cards: `var(--radius-lg)`
- Card groups: `var(--radius-lg)` on outer corners

### Form Elements

- Input fields: `var(--radius)`
- Select dropdowns: `var(--radius)`
- Checkboxes: `var(--radius-sm)`
- Radio buttons: `var(--radius-full)`

### Modals & Popovers

- Modals: `var(--radius-lg)`
- Dropdowns: `var(--radius)`
- Tooltips: `var(--radius)`
- Toast notifications: `var(--radius)`

## Best Practices

1. **Consistency**

   - Use appropriate radius values consistently
   - Match radius to element size
   - Maintain visual hierarchy

2. **Accessibility**

   - Ensure sufficient contrast with rounded corners
   - Consider touch target sizes
   - Test with different screen sizes

3. **Theme Support**

   - Adjust radius for different themes if needed
   - Consider cultural preferences
   - Test in different contexts

4. **Performance**
   - Use hardware-accelerated transforms when animating
   - Consider reducing radius complexity on mobile
   - Optimize rendering

## Common Patterns

### Card with Hover Effect

```css
.card {
  border-radius: var(--radius-card);
  transition: border-radius 0.2s ease;
}

.card:hover {
  border-radius: var(--radius-xl);
}
```

### Input with Focus State

```css
.input {
  border-radius: var(--radius-input);
  transition: border-radius 0.2s ease;
}

.input:focus {
  border-radius: var(--radius-md);
}
```

### Pill-shaped Button

```css
.pill-button {
  border-radius: var(--radius-full);
  padding: 0.5rem 1.5rem;
}
```

## Related Resources

- [Color Tokens](./colors.md)
- [Shadow Tokens](./shadows.md)
- [Component Tokens](../core-ui/README.md)
