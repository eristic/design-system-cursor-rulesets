import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "../components/hero-section";

const meta: Meta<typeof HeroSection> = {
  title: "Layout/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A versatile hero section component with customizable content, alignment, size, and background image.",
      },
    },
  },
  argTypes: {
    title: {
      description: "The main heading of the hero section",
      control: "text",
    },
    subtitle: {
      description: "Optional subtitle displayed above the main heading",
      control: "text",
    },
    description: {
      description: "Optional description text displayed below the main heading",
      control: "text",
    },
    primaryCta: {
      description: "Primary call-to-action button configuration",
      control: "object",
    },
    secondaryCta: {
      description: "Secondary call-to-action button configuration",
      control: "object",
    },
    alignment: {
      description: "Text alignment of the hero content",
      control: "select",
      options: ["left", "center"],
    },
    size: {
      description: "Vertical size of the hero section",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    backgroundImage: {
      description: "Optional background image URL",
      control: "text",
    },
    className: {
      description: "Additional CSS classes to apply to the hero section",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    title: "Welcome to Our Platform",
    subtitle: "Get Started",
    description:
      "Discover the best tools and resources to help you succeed in your journey.",
    primaryCta: {
      text: "Get Started",
      href: "/signup",
    },
    secondaryCta: {
      text: "Learn More",
      href: "/about",
    },
  },
};

export const LeftAligned: Story = {
  args: {
    title: "Transform Your Business",
    subtitle: "Enterprise Solutions",
    description:
      "Take your business to the next level with our comprehensive suite of enterprise solutions.",
    primaryCta: {
      text: "Contact Sales",
      href: "/contact",
    },
    secondaryCta: {
      text: "View Solutions",
      href: "/solutions",
    },
    alignment: "left",
  },
};

export const WithBackgroundImage: Story = {
  args: {
    title: "Explore Our World",
    subtitle: "Adventure Awaits",
    description:
      "Embark on an unforgettable journey with our expert guides and premium services.",
    primaryCta: {
      text: "Start Exploring",
      href: "/explore",
    },
    secondaryCta: {
      text: "View Destinations",
      href: "/destinations",
    },
    backgroundImage: "https://picsum.photos/1920/1080",
  },
};

export const SmallSize: Story = {
  args: {
    title: "Quick Start",
    subtitle: "Get Started in Minutes",
    description:
      "Start using our platform in minutes with our simple setup process.",
    primaryCta: {
      text: "Quick Start",
      href: "/quickstart",
    },
    size: "sm",
  },
};

export const CustomStyling: Story = {
  args: {
    title: "Custom Experience",
    subtitle: "Tailored for You",
    description:
      "Experience a fully customized solution designed to meet your specific needs.",
    primaryCta: {
      text: "Customize Now",
      href: "/customize",
    },
    className: "bg-gradient-to-br from-primary/5 to-primary/10",
  },
};
