import type { Meta, StoryObj } from "@storybook/react";
import { SiteFooter } from "../components/site-footer";

const meta: Meta<typeof SiteFooter> = {
  title: "Layout/SiteFooter",
  component: SiteFooter,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A comprehensive site footer component with navigation, contact information, social links, and newsletter subscription.",
      },
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SiteFooter>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <main className="container py-8">
        <h1 className="text-4xl font-bold">Page Content</h1>
        <p className="mt-4 text-muted-foreground">
          This is an example of the footer with page content above it.
        </p>
      </main>
      <SiteFooter />
    </div>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <main className="container py-8">
        <div className="h-[200vh] flex items-center justify-center">
          <p className="text-muted-foreground">Scroll down to see the footer</p>
        </div>
      </main>
      <SiteFooter />
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
      <main className="container py-8">
        <h1 className="text-4xl font-bold">Mobile View</h1>
        <p className="mt-4 text-muted-foreground">
          This example shows how the footer looks on mobile devices.
        </p>
      </main>
      <SiteFooter />
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <main className="container py-8">
        <h1 className="text-4xl font-bold">Custom Styling</h1>
        <p className="mt-4 text-muted-foreground">
          This example shows the footer with custom background styling.
        </p>
      </main>
      <div className="bg-gradient-to-br from-primary/5 to-primary/10">
        <SiteFooter />
      </div>
    </div>
  ),
};
