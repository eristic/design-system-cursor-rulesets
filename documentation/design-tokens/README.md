# Design System Tokens

This directory contains the design tokens that define the visual language of the design system. These tokens are the building blocks for consistent design across the application.

## Token Categories

- [Colors](./colors.md)
- [Typography](./typography.md)
- [Spacing](./spacing.md)
- [Shadows](./shadows.md)
- [Border Radius](./border-radius.md)

## Usage

Design tokens are implemented using CSS variables and can be accessed in your components through Tailwind CSS classes or direct CSS variable usage.

### Example Usage

```tsx
// Using Tailwind classes
<div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-md">
  Content
</div>

// Using CSS variables
<div className="custom-component">
  Content
</div>

// CSS
.custom-component {
  background-color: var(--background);
  color: var(--foreground);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

## Token Structure

Each token category follows a consistent structure:

1. **Base Tokens**: Raw values (e.g., hex colors, pixel values)
2. **Semantic Tokens**: Named tokens that reference base tokens
3. **Component Tokens**: Component-specific tokens that reference semantic tokens

## Implementation

The design tokens are implemented in the following files:

- `tailwind.config.ts`: Main configuration file
- `styles/globals.css`: CSS variable definitions
- `lib/utils.ts`: Utility functions for token usage

## Contributing

When adding or modifying design tokens:

1. Update the relevant token documentation
2. Add the token to the appropriate configuration file
3. Update any affected components
4. Test the changes across different themes and contexts
