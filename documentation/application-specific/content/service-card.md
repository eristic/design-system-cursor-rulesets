# Service Card Component

## Overview

The Service Card component is a content display component that showcases services, features, or capabilities. It's designed to present information in a visually appealing and organized manner, typically including an icon, title, description, and optional call-to-action.

## Props

```tsx
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  features?: Array<string>;
  buttonText?: string;
  buttonVariant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
  variant?: "default" | "featured" | "minimal";
}
```

## Usage

### Basic Service Card

```tsx
<ServiceCard
  title="Web Development"
  description="Custom web applications built with modern technologies"
  icon={<CodeIcon />}
  features={[
    "React & Next.js",
    "TypeScript",
    "Responsive Design",
    "Performance Optimization",
  ]}
  buttonText="Learn More"
/>
```

### Featured Service Card

```tsx
<ServiceCard
  title="Digital Marketing"
  description="Comprehensive digital marketing solutions for your business"
  icon={<ChartIcon />}
  features={[
    "SEO Optimization",
    "Social Media Marketing",
    "Content Strategy",
    "Analytics & Reporting",
  ]}
  variant="featured"
  buttonText="Get Started"
  buttonVariant="primary"
/>
```

### Minimal Service Card

```tsx
<ServiceCard
  title="UI/UX Design"
  description="User-centered design solutions that enhance user experience"
  icon={<DesignIcon />}
  variant="minimal"
/>
```

## Styling

The Service Card component uses the following design tokens:

```css
.service-card {
  background-color: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.service-card.featured {
  border: 2px solid var(--primary-color);
  background-color: var(--primary-bg);
}

.service-card.minimal {
  padding: var(--spacing-md);
  box-shadow: none;
  border: 1px solid var(--border-color);
}

.service-icon {
  width: 48px;
  height: 48px;
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
}

.service-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

.service-title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: var(--spacing-sm);
}

.service-description {
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--spacing-md);
  line-height: var(--leading-relaxed);
}

.service-features {
  margin: var(--spacing-md) 0;
}

.service-feature {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  font-size: var(--text-sm);
  color: var(--text-color);
}

.service-feature::before {
  content: "✓";
  color: var(--primary-color);
  margin-right: var(--spacing-sm);
}

.service-button {
  margin-top: var(--spacing-md);
}
```

## Best Practices

1. **Content Structure**

   - Keep descriptions clear and concise
   - Use consistent formatting
   - Include relevant features
   - Maintain visual hierarchy

2. **Visual Design**

   - Use appropriate icons or images
   - Maintain consistent spacing
   - Consider card variants
   - Ensure visual balance

3. **User Experience**

   - Make information easily scannable
   - Provide clear call-to-actions
   - Consider hover states
   - Ensure mobile responsiveness

4. **Accessibility**
   - Use semantic HTML structure
   - Ensure sufficient color contrast
   - Provide alt text for images
   - Support screen readers

## Common Patterns

### Service Grid

```tsx
const ServiceGrid = ({ services }) => {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
          features={service.features}
          buttonText={service.buttonText}
        />
      ))}
    </div>
  );
};
```

### Service with Image

```tsx
const ServiceWithImage = ({ service }) => {
  return (
    <ServiceCard
      title={service.title}
      description={service.description}
      image={service.image}
      features={service.features}
      buttonText="View Details"
      onClick={() => navigate(`/services/${service.id}`)}
    />
  );
};
```

### Service Comparison

```tsx
const ServiceComparison = ({ services }) => {
  return (
    <div className="service-comparison">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
          features={service.features}
          variant={index === 1 ? "featured" : "default"}
          buttonText={service.buttonText}
        />
      ))}
    </div>
  );
};
```

## Related Components

- [Pricing Card](./pricing-card.md)
- [Card](../layout/card.md)
- [Button](../interactive/button.md)
- [Icon](../data-display/icon.md)
