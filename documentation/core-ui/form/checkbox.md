# Checkbox Component

## Overview

The Checkbox component is a form control that allows users to select one or more options from a set of choices. It's ideal for boolean selections or multiple-choice scenarios.

## Props

```tsx
interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  error?: boolean;
  helperText?: string;
  label?: string;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
```

## Usage

### Basic Checkbox

```tsx
<Checkbox label="Accept terms and conditions" name="terms" />
```

### Checkbox with Error State

```tsx
<Checkbox
  label="Subscribe to newsletter"
  error={true}
  helperText="You must subscribe to continue"
  required
/>
```

### Indeterminate Checkbox

```tsx
<Checkbox label="Select all" indeterminate={true} onChange={handleSelectAll} />
```

## Styling

The Checkbox component uses the following design tokens:

```css
.checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-box {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--input-bg);
  transition: all 0.2s ease;
}

.checkbox-input:checked + .checkbox-box {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.checkbox-input:indeterminate + .checkbox-box {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.checkbox-input:focus + .checkbox-box {
  box-shadow: var(--shadow-focus);
}

.checkbox-input:disabled + .checkbox-box {
  background-color: var(--disabled-bg);
  border-color: var(--disabled-border);
  cursor: not-allowed;
}

.checkbox-label {
  margin-left: var(--spacing-sm);
  font-size: var(--text-sm);
  color: var(--text-color);
}
```

## Best Practices

1. **Accessibility**

   - Always provide a label for screen readers
   - Use appropriate ARIA attributes
   - Ensure sufficient color contrast
   - Support keyboard navigation
   - Include proper focus states

2. **User Experience**

   - Use clear, concise labels
   - Group related checkboxes
   - Consider checkbox groups for multiple selections
   - Implement proper focus and hover states

3. **Mobile Considerations**

   - Ensure touch targets are large enough
   - Test touch interactions
   - Consider mobile-specific patterns
   - Optimize for touch input

4. **State Management**
   - Handle indeterminate states properly
   - Manage checkbox groups effectively
   - Consider controlled vs uncontrolled usage
   - Implement proper validation

## Common Patterns

### Checkbox Group

```tsx
const CheckboxGroup = ({ options, value, onChange }) => {
  return (
    <div className="checkbox-group">
      {options.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          checked={value.includes(option.value)}
          onChange={(e) => {
            const newValue = e.target.checked
              ? [...value, option.value]
              : value.filter((v) => v !== option.value);
            onChange(newValue);
          }}
        />
      ))}
    </div>
  );
};
```

### Select All Pattern

```tsx
const SelectAllCheckbox = ({ items, selectedItems, onSelectAll }) => {
  const allSelected = items.length === selectedItems.length;
  const someSelected = selectedItems.length > 0 && !allSelected;

  return (
    <Checkbox
      label="Select All"
      checked={allSelected}
      indeterminate={someSelected}
      onChange={(e) => onSelectAll(e.target.checked)}
    />
  );
};
```

## Related Components

- [Input](./input.md)
- [Textarea](./textarea.md)
- [Select](./select.md)
- [Form Group](../layout/form-group.md)
- [Radio Group](./radio-group.md)
