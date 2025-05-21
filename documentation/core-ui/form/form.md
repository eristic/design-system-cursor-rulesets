# Form Component

## Overview

The Form component is a container for form controls that handles form submission, validation, and state management. It provides a consistent way to structure and manage form data across the application.

## Props

```tsx
interface FormProps {
  onSubmit?: (data: FormData) => void;
  onReset?: () => void;
  className?: string;
  children: React.ReactNode;
  initialValues?: Record<string, any>;
  validate?: (values: Record<string, any>) => Record<string, string>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  validateOnSubmit?: boolean;
}
```

## Usage

### Basic Form

```tsx
<Form onSubmit={handleSubmit}>
  <FormGroup>
    <Input name="username" label="Username" required />
  </FormGroup>
  <FormGroup>
    <Input type="password" name="password" label="Password" required />
  </FormGroup>
  <Button type="submit">Submit</Button>
</Form>
```

### Form with Validation

```tsx
<Form
  onSubmit={handleSubmit}
  validate={(values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  }}
>
  <FormGroup>
    <Input name="email" label="Email" required />
  </FormGroup>
  <Button type="submit">Submit</Button>
</Form>
```

### Form with Initial Values

```tsx
<Form
  onSubmit={handleSubmit}
  initialValues={{
    name: "John Doe",
    email: "john@example.com",
    preferences: ["newsletter"],
  }}
>
  <FormGroup>
    <Input name="name" label="Name" />
  </FormGroup>
  <FormGroup>
    <Input name="email" label="Email" />
  </FormGroup>
  <FormGroup>
    <Checkbox
      name="preferences"
      value="newsletter"
      label="Subscribe to newsletter"
    />
  </FormGroup>
  <Button type="submit">Update Profile</Button>
</Form>
```

## Styling

The Form component uses the following design tokens:

```css
.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-error {
  color: var(--error-color);
  font-size: var(--text-sm);
  margin-top: var(--spacing-xs);
}

.form-actions {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}
```

## Best Practices

1. **Form Structure**

   - Group related fields together
   - Use appropriate form controls
   - Maintain consistent spacing
   - Consider form layout and flow

2. **Validation**

   - Implement client-side validation
   - Show clear error messages
   - Validate on appropriate events
   - Consider server-side validation

3. **User Experience**

   - Provide clear labels and instructions
   - Show validation feedback immediately
   - Handle form submission states
   - Consider form progress indicators

4. **Accessibility**
   - Use semantic HTML elements
   - Provide proper ARIA attributes
   - Ensure keyboard navigation
   - Support screen readers

## Common Patterns

### Multi-step Form

```tsx
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleSubmit = (data) => {
    // Submit all form data
    console.log({ ...formData, ...data });
  };

  return (
    <div>
      {step === 1 && (
        <Form onSubmit={handleNext}>
          <FormGroup>
            <Input name="name" label="Name" required />
          </FormGroup>
          <Button type="submit">Next</Button>
        </Form>
      )}
      {step === 2 && (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input name="email" label="Email" required />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </div>
  );
};
```

### Dynamic Form Fields

```tsx
const DynamicForm = () => {
  const [fields, setFields] = useState([{ id: 1 }]);

  const addField = () => {
    setFields([...fields, { id: fields.length + 1 }]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormGroup key={field.id}>
          <Input name={`item-${field.id}`} label={`Item ${field.id}`} />
        </FormGroup>
      ))}
      <Button type="button" onClick={addField}>
        Add Item
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
```

## Related Components

- [Form Group](../layout/form-group.md)
- [Input](./input.md)
- [Textarea](./textarea.md)
- [Select](./select.md)
- [Checkbox](./checkbox.md)
- [Radio Group](./radio-group.md)
- [Button](../interactive/button.md)
