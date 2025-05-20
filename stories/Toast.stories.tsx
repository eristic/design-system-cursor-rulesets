import type { Meta, StoryObj } from "@storybook/react";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../components/ui/toast";
import { Button } from "../components/ui/button";
import { useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A toast component that displays temporary notifications.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

type ToastVariant = "default" | "destructive";

const ToastDemo = ({ variant = "default" as ToastVariant }) => {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider>
      <Button onClick={() => setOpen(true)} variant={variant}>
        Show Toast
      </Button>
      <Toast open={open} onOpenChange={setOpen} variant={variant}>
        <ToastTitle>Success</ToastTitle>
        <ToastDescription>Your changes have been saved.</ToastDescription>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

const ToastWithAction = () => {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider>
      <Button onClick={() => setOpen(true)}>Show Toast with Action</Button>
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Update Available</ToastTitle>
        <ToastDescription>
          A new version is available. Would you like to update now?
        </ToastDescription>
        <ToastAction altText="Update now">Update</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

const ToastWithLongContent = () => {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider>
      <Button onClick={() => setOpen(true)}>Show Long Toast</Button>
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Important Update</ToastTitle>
        <ToastDescription>
          We&apos;ve made significant improvements to our platform. New features
          include enhanced security, better performance, and a more intuitive
          user interface. Please take a moment to explore these changes.
        </ToastDescription>
        <ToastAction altText="Learn more">Learn More</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const Destructive: Story = {
  render: () => <ToastDemo variant="destructive" />,
};

export const WithAction: Story = {
  render: () => <ToastWithAction />,
};

export const WithLongContent: Story = {
  render: () => <ToastWithLongContent />,
};
