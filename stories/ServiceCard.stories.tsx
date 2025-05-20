import type { Meta, StoryObj } from "@storybook/react";
import { ServiceCard } from "../components/service-card";

const meta: Meta<typeof ServiceCard> = {
  title: "Components/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title of the service",
    },
    description: {
      control: "text",
      description: "Description of the service",
    },
    icon: {
      control: "select",
      options: [
        "palette",
        "code",
        "lightbulb",
        "barChart",
        "check",
        "external",
      ],
      description: "Icon to display for the service",
    },
    link: {
      control: "text",
      description: "Optional link to the service details page",
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
          "A card component for displaying services with icons, titles, descriptions, and optional links.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: {
    title: "Web Design",
    description:
      "Create beautiful, responsive websites that engage your audience and drive results.",
    icon: "palette",
    link: "/services/web-design",
  },
};

export const Development: Story = {
  args: {
    title: "Web Development",
    description:
      "Build robust, scalable web applications using modern technologies and best practices.",
    icon: "code",
    link: "/services/web-development",
  },
};

export const Strategy: Story = {
  args: {
    title: "Digital Strategy",
    description:
      "Develop comprehensive digital strategies to help your business grow and succeed online.",
    icon: "lightbulb",
    link: "/services/digital-strategy",
  },
};

export const Analytics: Story = {
  args: {
    title: "Analytics & Reporting",
    description:
      "Track and analyze your website performance with detailed reports and insights.",
    icon: "barChart",
    link: "/services/analytics",
  },
};

export const WithoutLink: Story = {
  args: {
    title: "Quality Assurance",
    description:
      "Ensure your digital products meet the highest standards of quality and performance.",
    icon: "check",
  },
};

export const CustomStyling: Story = {
  args: {
    title: "Custom Solution",
    description:
      "Get a tailored solution designed specifically for your business needs.",
    icon: "external",
    link: "/services/custom",
    className: "bg-gradient-to-br from-blue-50 to-indigo-50",
  },
};
