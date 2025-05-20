import type { Meta, StoryObj } from "@storybook/react";
import { PricingCard } from "../components/pricing-card";

const meta: Meta<typeof PricingCard> = {
  title: "Components/PricingCard",
  component: PricingCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A pricing card component that displays pricing plans with features and a call-to-action button.",
      },
    },
  },
  argTypes: {
    title: {
      description: "The title of the pricing plan",
      control: "text",
    },
    price: {
      description: "The price of the plan",
      control: "text",
    },
    description: {
      description: "A brief description of the plan",
      control: "text",
    },
    features: {
      description: "List of features included in the plan",
      control: "object",
    },
    cta: {
      description: "Call-to-action button text",
      control: "text",
    },
    popular: {
      description: "Whether this is the most popular plan",
      control: "boolean",
    },
    className: {
      description: "Additional CSS classes to apply to the card",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Basic: Story = {
  args: {
    title: "Basic Plan",
    price: "$9/month",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "24/7 support",
      "1GB storage",
    ],
    cta: "Get Started",
  },
};

export const Popular: Story = {
  args: {
    title: "Pro Plan",
    price: "$29/month",
    description: "Best for growing businesses",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom domain",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
};

export const Enterprise: Story = {
  args: {
    title: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated support",
      "Unlimited storage",
      "SLA guarantee",
      "Custom reporting",
      "Team management",
    ],
    cta: "Contact Sales",
  },
};

export const WithCustomStyling: Story = {
  args: {
    title: "Premium Plan",
    price: "$49/month",
    description: "For power users who need more",
    features: [
      "Everything in Pro",
      "Premium support",
      "20GB storage",
      "Custom branding",
    ],
    cta: "Upgrade Now",
    className: "bg-gradient-to-br from-primary/5 to-primary/10",
  },
};
