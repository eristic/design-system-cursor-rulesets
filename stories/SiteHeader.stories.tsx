import type { Meta, StoryObj } from "@storybook/react";
import { SiteHeader } from "../components/site-header";
import { NAVIGATION_ITEMS } from "@/lib/constants";

const meta: Meta<typeof SiteHeader> = {
  title: "Layout/SiteHeader",
  component: SiteHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A responsive site header component with navigation, theme toggle, and mobile menu.",
      },
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container py-8">
        <h1 className="text-4xl font-bold">Page Content</h1>
        <p className="mt-4 text-muted-foreground">
          This is an example of the header with page content below it.
        </p>
      </main>
    </div>
  ),
};

export const Scrolled: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container py-8">
        <div className="h-[200vh] flex items-center justify-center">
          <p className="text-muted-foreground">
            Scroll down to see the header&apos;s scrolled state
          </p>
        </div>
      </main>
    </div>
  ),
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container py-8">
        <h1 className="text-4xl font-bold">Mobile View</h1>
        <p className="mt-4 text-muted-foreground">
          This example shows how the header looks on mobile devices.
        </p>
      </main>
    </div>
  ),
};

export const WithLongNavigation: Story = {
  render: () => {
    const longNavigationItems = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ];

    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="container py-8">
          <h1 className="text-4xl font-bold">Long Navigation</h1>
          <p className="mt-4 text-muted-foreground">
            This example shows how the header handles many navigation items.
          </p>
        </main>
      </div>
    );
  },
};
