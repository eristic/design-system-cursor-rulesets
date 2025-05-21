# Input Component

## Overview

The Input component is a form control that allows users to enter text data. It supports various types of input including text, email, password, number, and more.

## Props

```tsx
interface InputProps {
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  error?: boolean;
  helperText?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
```

## Usage

### Basic Input

```tsx
<Input type="text" placeholder="Enter your name" label="Name" />
```

### Input with Error State

```tsx
<Input
  type="email"
  placeholder="Enter your email"
  label="Email"
  error={true}
  helperText="Please enter a valid email address"
/>
```

### Disabled Input

```tsx
<Input
  type="text"
  placeholder="This input is disabled"
  label="Disabled Input"
  disabled={true}
/>
```

## Styling

The Input component uses the following design tokens:

```css
.input {
  padding: var(--input-padding);
  border-radius: var(--radius-input);
  border: 1px solid var(--border-color);
  background-color: var(--input-bg);
  color: var(--text-color);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  width: 100%;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: var(--shadow-focus);
}

.input[disabled] {
  background-color: var(--disabled-bg);
  cursor: not-allowed;
}

.input[aria-invalid="true"] {
  border-color: var(--error-color);
}
```

## Best Practices

1. **Accessibility**

   - Always provide a label for screen readers
   - Use appropriate ARIA attributes
   - Ensure sufficient color contrast
   - Support keyboard navigation

2. **Validation**

   - Provide clear error messages
   - Use appropriate input types
   - Implement client-side validation
   - Consider server-side validation

3. **User Experience**

   - Use appropriate placeholder text
   - Provide clear helper text when needed
   - Consider input masking for specific formats
   - Implement proper focus states

4. **Mobile Considerations**
   - Use appropriate input types for mobile keyboards
   - Ensure touch targets are large enough
   - Consider mobile-specific validation patterns

## Related Components

- [Textarea](./textarea.md)
- [Select](./select.md)
- [Checkbox](./checkbox.md)
- [Form Group](../layout/form-group.md)
