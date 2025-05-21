# Radio Group Component

## Overview

The Radio Group component is a form control that allows users to select a single option from a set of choices. It's ideal for mutually exclusive options where only one selection is allowed.

## Props

```tsx
interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  name?: string;
  id?: string;
  className?: string;
  error?: boolean;
  helperText?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
}
```

## Usage

### Basic Radio Group

```tsx
<RadioGroup
  label="Payment Method"
  options={[
    { value: "credit", label: "Credit Card" },
    { value: "debit", label: "Debit Card" },
    { value: "paypal", label: "PayPal" },
  ]}
  name="payment"
/>
```

### Radio Group with Error State

```tsx
<RadioGroup
  label="Shipping Method"
  options={[
    { value: "standard", label: "Standard Shipping" },
    { value: "express", label: "Express Shipping" },
  ]}
  error={true}
  helperText="Please select a shipping method"
  required
/>
```

### Disabled Radio Group

```tsx
<RadioGroup
  label="Account Type"
  options={[
    { value: "personal", label: "Personal" },
    { value: "business", label: "Business", disabled: true },
  ]}
  disabled={true}
/>
```

## Styling

The Radio Group component uses the following design tokens:

```css
.radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.radio-option {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.radio-circle {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-full);
  background-color: var(--input-bg);
  transition: all 0.2s ease;
}

.radio-input:checked + .radio-circle {
  border-color: var(--primary-color);
  background-color: var(--primary-color);
}

.radio-input:checked + .radio-circle::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  border-radius: var(--radius-full);
  background-color: white;
}

.radio-input:focus + .radio-circle {
  box-shadow: var(--shadow-focus);
}

.radio-input:disabled + .radio-circle {
  background-color: var(--disabled-bg);
  border-color: var(--disabled-border);
  cursor: not-allowed;
}

.radio-label {
  margin-left: var(--spacing-sm);
  font-size: var(--text-sm);
  color: var(--text-color);
}

.radio-group-error {
  color: var(--error-color);
  font-size: var(--text-sm);
  margin-top: var(--spacing-xs);
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
   - Group related options logically
   - Consider vertical vs horizontal layout
   - Implement proper focus and hover states

3. **Mobile Considerations**

   - Ensure touch targets are large enough
   - Test touch interactions
   - Consider mobile-specific patterns
   - Optimize for touch input

4. **State Management**
   - Handle selection state properly
   - Consider controlled vs uncontrolled usage
   - Implement proper validation
   - Manage disabled states effectively

## Common Patterns

### Horizontal Layout

```tsx
const HorizontalRadioGroup = ({ options, value, onChange }) => {
  return (
    <div className="radio-group horizontal">
      {options.map((option) => (
        <label key={option.value} className="radio-option">
          <input
            type="radio"
            name="group"
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <span className="radio-circle" />
          <span className="radio-label">{option.label}</span>
        </label>
      ))}
    </div>
  );
};
```

### Radio Group with Description

```tsx
const RadioGroupWithDescription = ({ options, value, onChange }) => {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <div key={option.value} className="radio-option-container">
          <label className="radio-option">
            <input
              type="radio"
              name="group"
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
            />
            <span className="radio-circle" />
            <span className="radio-label">{option.label}</span>
          </label>
          {option.description && (
            <p className="radio-description">{option.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};
```

## Related Components

- [Input](./input.md)
- [Checkbox](./checkbox.md)
- [Select](./select.md)
- [Form Group](../layout/form-group.md)
