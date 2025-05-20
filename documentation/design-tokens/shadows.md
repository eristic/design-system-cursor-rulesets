# Shadow Tokens

## Overview

The shadow system provides a consistent set of elevation levels through box shadows. These shadows help create visual hierarchy and depth in the interface.

## Base Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
```

## Semantic Shadows

```css
--shadow-card: var(--shadow);
--shadow-dropdown: var(--shadow-md);
--shadow-modal: var(--shadow-xl);
--shadow-tooltip: var(--shadow-md);
--shadow-focus: 0 0 0 2px var(--ring);
```

## Usage

### Tailwind Classes

```tsx
// Basic shadows
<div className="shadow-sm">Small shadow</div>
<div className="shadow">Default shadow</div>
<div className="shadow-md">Medium shadow</div>
<div className="shadow-lg">Large shadow</div>
<div className="shadow-xl">Extra large shadow</div>
<div className="shadow-2xl">Double extra large shadow</div>

// Inner shadow
<div className="shadow-inner">Inner shadow</div>

// Focus ring
<div className="focus:ring-2 focus:ring-primary">Focus ring</div>
```

### CSS Variables

```css
.custom-element {
  box-shadow: var(--shadow-md);
}

.custom-card {
  box-shadow: var(--shadow-card);
}

.custom-modal {
  box-shadow: var(--shadow-modal);
}
```

## Elevation Levels

### Level 1 (Subtle)

- Used for: Cards, buttons, input fields
- Shadow: `var(--shadow-sm)`
- Example: Basic UI elements that need minimal elevation

### Level 2 (Default)

- Used for: Dropdowns, tooltips, floating elements
- Shadow: `var(--shadow-md)`
- Example: Elements that float above the main content

### Level 3 (Prominent)

- Used for: Modals, dialogs, popovers
- Shadow: `var(--shadow-lg)`
- Example: Important UI elements that need to stand out

### Level 4 (Maximum)

- Used for: Toast notifications, critical alerts
- Shadow: `var(--shadow-xl)`
- Example: Elements that need maximum visibility

## Best Practices

1. **Consistency**

   - Use appropriate shadow levels consistently
   - Match shadow intensity to element importance
   - Maintain visual hierarchy

2. **Performance**

   - Use hardware-accelerated shadows when possible
   - Consider reducing shadow complexity on mobile
   - Optimize shadow rendering

3. **Accessibility**

   - Ensure sufficient contrast with shadows
   - Don't rely solely on shadows for hierarchy
   - Consider reduced motion preferences

4. **Theme Support**
   - Adjust shadow opacity for dark mode
   - Consider color in shadow values
   - Test shadows in different themes

## Common Patterns

### Card with Hover Effect

```css
.card {
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
}
```

### Modal with Backdrop

```css
.modal {
  box-shadow: var(--shadow-modal);
}

.modal-backdrop {
  background-color: rgb(0 0 0 / 0.5);
  backdrop-filter: blur(4px);
}
```

### Focus States

```css
.focusable {
  transition: box-shadow 0.2s ease;
}

.focusable:focus {
  box-shadow: var(--shadow-focus);
  outline: none;
}
```

## Related Resources

- [Color Tokens](./colors.md)
- [Border Radius Tokens](./border-radius.md)
- [Component Tokens](../core-ui/README.md)
