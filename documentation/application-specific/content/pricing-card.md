# Pricing Card Component

## Overview

The Pricing Card component is a content display component that showcases pricing plans, features, and call-to-action buttons. It's designed to help users compare different pricing tiers and make informed decisions.

## Props

```tsx
interface PricingCardProps {
  title: string;
  price: {
    amount: number;
    currency?: string;
    period?: string;
  };
  description?: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  isPopular?: boolean;
  buttonText?: string;
  buttonVariant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
}
```

## Usage

### Basic Pricing Card

```tsx
<PricingCard
  title="Basic Plan"
  price={{
    amount: 29,
    currency: "USD",
    period: "month",
  }}
  description="Perfect for small businesses"
  features={[
    { text: "5 Projects", included: true },
    { text: "10GB Storage", included: true },
    { text: "Basic Support", included: true },
    { text: "Advanced Analytics", included: false },
  ]}
  buttonText="Get Started"
/>
```

### Popular Pricing Card

```tsx
<PricingCard
  title="Pro Plan"
  price={{
    amount: 99,
    currency: "USD",
    period: "month",
  }}
  description="Best for growing businesses"
  features={[
    { text: "Unlimited Projects", included: true },
    { text: "100GB Storage", included: true },
    { text: "Priority Support", included: true },
    { text: "Advanced Analytics", included: true },
  ]}
  isPopular={true}
  buttonText="Start Free Trial"
  buttonVariant="primary"
/>
```

## Styling

The Pricing Card component uses the following design tokens:

```css
.pricing-card {
  background-color: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.pricing-card.popular {
  border: 2px solid var(--primary-color);
  position: relative;
}

.pricing-card.popular::before {
  content: "Most Popular";
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 600;
}

.pricing-title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: var(--spacing-sm);
}

.pricing-price {
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: var(--spacing-sm);
}

.pricing-period {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.pricing-description {
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--spacing-md);
}

.pricing-features {
  margin: var(--spacing-md) 0;
}

.pricing-feature {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  font-size: var(--text-sm);
}

.pricing-feature.included {
  color: var(--text-color);
}

.pricing-feature.excluded {
  color: var(--text-muted);
  text-decoration: line-through;
}

.pricing-button {
  width: 100%;
  margin-top: var(--spacing-md);
}
```

## Best Practices

1. **Content Structure**

   - Keep pricing information clear and concise
   - Highlight key features and benefits
   - Use consistent formatting across cards
   - Include clear call-to-action buttons

2. **Visual Hierarchy**

   - Emphasize the most important information
   - Use appropriate spacing and typography
   - Consider highlighting popular plans
   - Maintain visual balance

3. **User Experience**

   - Make pricing easy to understand
   - Show clear feature comparisons
   - Provide clear next steps
   - Consider mobile responsiveness

4. **Accessibility**
   - Use semantic HTML structure
   - Ensure sufficient color contrast
   - Provide clear focus states
   - Support screen readers

## Common Patterns

### Comparison Table

```tsx
const PricingComparison = ({ plans }) => {
  return (
    <div className="pricing-comparison">
      {plans.map((plan) => (
        <PricingCard
          key={plan.id}
          title={plan.title}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          isPopular={plan.isPopular}
          buttonText={plan.buttonText}
        />
      ))}
    </div>
  );
};
```

### Toggle Between Monthly/Annual

```tsx
const PricingWithToggle = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      title: "Basic",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [...]
    },
    // ... other plans
  ];

  return (
    <div>
      <div className="pricing-toggle">
        <span>Monthly</span>
        <Switch
          checked={isAnnual}
          onChange={setIsAnnual}
        />
        <span>Annual (Save 20%)</span>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <PricingCard
            key={plan.title}
            title={plan.title}
            price={{
              amount: isAnnual ? plan.annualPrice : plan.monthlyPrice,
              period: isAnnual ? "year" : "month"
            }}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};
```

## Related Components

- [Service Card](./service-card.md)
- [Card](../layout/card.md)
- [Button](../interactive/button.md)
- [Switch](../interactive/switch.md)
