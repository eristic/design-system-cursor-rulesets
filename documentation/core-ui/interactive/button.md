# Button Component

## Overview

The Button component is a fundamental interactive element used for triggering actions and events. It supports multiple variants, sizes, and states to accommodate various use cases.

## Import

```tsx
import { Button } from "@/components/ui/button";
```

## Usage Examples

### Basic Usage

```tsx
<Button>Click me</Button>
```

### Variants

```tsx
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Sizes

```tsx
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>
```

### With Icons

```tsx
<Button>
  <Icon className="mr-2 h-4 w-4" />
  Button with Icon
</Button>
```

### Loading State

```tsx
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading...
</Button>
```

## Props API

| Prop      | Type                                                                        | Default   | Description                            |
| --------- | --------------------------------------------------------------------------- | --------- | -------------------------------------- |
| variant   | 'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link' | 'default' | The visual style of the button         |
| size      | 'default' \| 'sm' \| 'lg' \| 'icon'                                         | 'default' | The size of the button                 |
| asChild   | boolean                                                                     | false     | Whether to render as a child component |
| className | string                                                                      | undefined | Additional CSS classes                 |
| disabled  | boolean                                                                     | false     | Whether the button is disabled         |
| type      | 'button' \| 'submit' \| 'reset'                                             | 'button'  | The HTML button type                   |

## Accessibility Guidelines

1. **Keyboard Navigation**

   - Buttons must be focusable
   - Must be activated with both Enter and Space keys
   - Must have visible focus states

2. **ARIA Attributes**

   - Use `aria-label` for icon-only buttons
   - Use `aria-disabled` for disabled state
   - Use `aria-busy` for loading state

3. **Color Contrast**
   - Maintain WCAG 2.1 AA compliance for text contrast
   - Ensure focus indicators are visible

## Best Practices

1. **Button Text**

   - Use clear, action-oriented text
   - Keep text concise
   - Use sentence case for button labels

2. **Button Placement**

   - Primary actions should be more prominent
   - Destructive actions should be less prominent
   - Group related buttons together

3. **Loading States**

   - Show loading state for async actions
   - Disable button during loading
   - Provide visual feedback

4. **Icon Usage**
   - Use icons to enhance meaning, not replace text
   - Maintain consistent icon placement
   - Ensure icons are properly sized

## Related Components

- [Icon Button](./icon-button.md)
- [Button Group](./button-group.md)
- [Loading Spinner](../feedback/loading-spinner.md)

## Examples

### Form Submit Button

```tsx
<Button type="submit" className="w-full">
  Submit Form
</Button>
```

### Delete Confirmation

```tsx
<Button variant="destructive" onClick={handleDelete}>
  Delete Item
</Button>
```

### Navigation Button

```tsx
<Button variant="link" asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

## Troubleshooting

### Common Issues

1. **Button not responding to clicks**

   - Check if button is disabled
   - Verify event handler is properly bound
   - Ensure no overlapping elements

2. **Styling issues**

   - Check className conflicts
   - Verify variant and size props
   - Inspect CSS specificity

3. **Accessibility problems**
   - Ensure proper ARIA attributes
   - Verify keyboard navigation
   - Check color contrast

## Changelog

### v1.0.0

- Initial release
- Added basic variants and sizes
- Implemented accessibility features

### v1.1.0

- Added loading state
- Improved TypeScript types
- Enhanced documentation
