# Spacing Tokens

## Overview

The spacing system provides a consistent scale for margins, padding, and gaps throughout the application. It follows an 8-point grid system for most values, with some exceptions for fine-tuning.

## Base Spacing Scale

```css
--space-0: 0px;
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
--space-32: 8rem; /* 128px */
--space-40: 10rem; /* 160px */
--space-48: 12rem; /* 192px */
--space-56: 14rem; /* 224px */
--space-64: 16rem; /* 256px */
```

## Semantic Spacing

```css
--spacing-xs: var(--space-1); /* 4px */
--spacing-sm: var(--space-2); /* 8px */
--spacing-md: var(--space-4); /* 16px */
--spacing-lg: var(--space-6); /* 24px */
--spacing-xl: var(--space-8); /* 32px */
--spacing-2xl: var(--space-12); /* 48px */
--spacing-3xl: var(--space-16); /* 64px */
--spacing-4xl: var(--space-24); /* 96px */
```

## Component Spacing

```css
--container-padding: var(--space-4);
--section-spacing: var(--space-8);
--card-padding: var(--space-4);
--input-padding: var(--space-2);
--button-padding: var(--space-2) var(--space-4);
--icon-spacing: var(--space-2);
```

## Usage

### Tailwind Classes

```tsx
// Margin
<div className="m-0">No margin</div>
<div className="m-1">Small margin</div>
<div className="m-4">Medium margin</div>
<div className="m-8">Large margin</div>

// Padding
<div className="p-0">No padding</div>
<div className="p-1">Small padding</div>
<div className="p-4">Medium padding</div>
<div className="p-8">Large padding</div>

// Gap
<div className="gap-1">Small gap</div>
<div className="gap-4">Medium gap</div>
<div className="gap-8">Large gap</div>
```

### CSS Variables

```css
.custom-element {
  margin: var(--spacing-md);
  padding: var(--spacing-lg);
  gap: var(--spacing-sm);
}
```

## Best Practices

1. **Consistency**

   - Use the spacing scale consistently
   - Avoid arbitrary values
   - Follow the 8-point grid system

2. **Responsive Design**

   - Adjust spacing for different screen sizes
   - Use relative units (rem) for better scaling
   - Consider mobile-first approach

3. **Component Layout**

   - Use consistent spacing within components
   - Maintain proper visual hierarchy
   - Consider content density

4. **Whitespace**
   - Use whitespace to create visual breathing room
   - Group related elements with consistent spacing
   - Use larger spacing for section separation

## Common Patterns

### Card Layout

```css
.card {
  padding: var(--card-padding);
  margin-bottom: var(--spacing-md);
}

.card-header {
  margin-bottom: var(--spacing-sm);
}

.card-content {
  margin-bottom: var(--spacing-md);
}

.card-footer {
  margin-top: var(--spacing-md);
}
```

### Form Layout

```css
.form-group {
  margin-bottom: var(--spacing-md);
}

.form-label {
  margin-bottom: var(--spacing-xs);
}

.form-input {
  padding: var(--input-padding);
}

.form-error {
  margin-top: var(--spacing-xs);
}
```

### Navigation

```css
.nav-item {
  padding: var(--spacing-sm) var(--spacing-md);
  margin-right: var(--spacing-sm);
}

.nav-icon {
  margin-right: var(--icon-spacing);
}
```

## Related Resources

- [Typography Tokens](./typography.md)
- [Border Radius Tokens](./border-radius.md)
- [Component Tokens](../core-ui/README.md)
