import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialCard } from "../components/testimonial-card";

const meta: Meta<typeof TestimonialCard> = {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A card component for displaying customer testimonials with quote, author information, and image.",
      },
    },
  },
  argTypes: {
    quote: {
      description: "The testimonial quote text",
      control: "text",
    },
    author: {
      description: "The name of the testimonial author",
      control: "text",
    },
    company: {
      description: "The company or organization the author represents",
      control: "text",
    },
    image: {
      description: "URL of the author's profile image",
      control: "text",
    },
    className: {
      description: "Additional CSS classes to apply to the card",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {
  args: {
    quote:
      "This platform has transformed how we handle our business operations. The efficiency gains are remarkable.",
    author: "Sarah Johnson",
    company: "Tech Solutions Inc.",
    image: "https://i.pravatar.cc/150?img=1",
  },
};

export const LongQuote: Story = {
  args: {
    quote:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched. The results we've seen have far exceeded our expectations, and we couldn't be happier with the partnership.",
    author: "Michael Chen",
    company: "Global Innovations",
    image: "https://i.pravatar.cc/150?img=2",
  },
};

export const CustomStyling: Story = {
  args: {
    quote:
      "The best decision we made for our business was choosing this platform.",
    author: "Emma Rodriguez",
    company: "Creative Studios",
    image: "https://i.pravatar.cc/150?img=3",
    className: "bg-gradient-to-br from-primary/5 to-primary/10",
  },
};

export const WithoutImage: Story = {
  args: {
    quote: "Simple, effective, and exactly what we needed.",
    author: "David Kim",
    company: "Startup Ventures",
    image: "",
  },
};
