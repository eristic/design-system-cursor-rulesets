import type { Meta, StoryObj } from "@storybook/react";
import { PortfolioCard } from "../components/portfolio-card";

const meta: Meta<typeof PortfolioCard> = {
  title: "Components/PortfolioCard",
  component: PortfolioCard,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "Unique identifier for the portfolio item",
    },
    title: {
      control: "text",
      description: "Title of the portfolio item",
    },
    category: {
      control: "text",
      description: "Category of the portfolio item",
    },
    description: {
      control: "text",
      description: "Description of the portfolio item",
    },
    image: {
      control: "text",
      description: "URL of the portfolio item image",
    },
    client: {
      control: "text",
      description: "Name of the client",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the card",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A card component for displaying portfolio items with image, title, category, and client information.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PortfolioCard>;

export const Default: Story = {
  args: {
    id: "1",
    title: "E-commerce Website Redesign",
    category: "Web Design",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    image: "https://picsum.photos/800/450",
    client: "Fashion Retail Co.",
  },
};

export const LongDescription: Story = {
  args: {
    id: "2",
    title: "Mobile App Development",
    category: "Mobile Development",
    description:
      "Development of a cross-platform mobile application with real-time features, push notifications, and offline capabilities. The app includes user authentication, social features, and integration with various third-party services.",
    image: "https://picsum.photos/800/451",
    client: "Tech Startup Inc.",
  },
};

export const DifferentCategory: Story = {
  args: {
    id: "3",
    title: "Brand Identity Design",
    category: "Branding",
    description:
      "Creation of a comprehensive brand identity including logo design, color palette, typography, and brand guidelines.",
    image: "https://picsum.photos/800/452",
    client: "Creative Agency",
  },
};

export const CustomStyling: Story = {
  args: {
    id: "4",
    title: "Corporate Website",
    category: "Web Development",
    description:
      "Development of a modern corporate website with custom animations and interactive features.",
    image: "https://picsum.photos/800/453",
    client: "Global Corp",
    className: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
};
