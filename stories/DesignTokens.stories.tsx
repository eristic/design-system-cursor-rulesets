import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/ui/card';

const meta: Meta = {
  title: 'Design System/Tokens',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Design system tokens used throughout the application.',
      },
    },
  },
};

export default meta;

// Color Tokens
export const Colors: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ColorToken name="Background" value="var(--background)" />
          <ColorToken name="Foreground" value="var(--foreground)" />
          <ColorToken name="Card" value="var(--card)" />
          <ColorToken name="Card Foreground" value="var(--card-foreground)" />
          <ColorToken name="Popover" value="var(--popover)" />
          <ColorToken name="Popover Foreground" value="var(--popover-foreground)" />
          <ColorToken name="Primary" value="var(--primary)" />
          <ColorToken name="Primary Foreground" value="var(--primary-foreground)" />
          <ColorToken name="Secondary" value="var(--secondary)" />
          <ColorToken name="Secondary Foreground" value="var(--secondary-foreground)" />
          <ColorToken name="Muted" value="var(--muted)" />
          <ColorToken name="Muted Foreground" value="var(--muted-foreground)" />
          <ColorToken name="Accent" value="var(--accent)" />
          <ColorToken name="Accent Foreground" value="var(--accent-foreground)" />
          <ColorToken name="Destructive" value="var(--destructive)" />
          <ColorToken name="Destructive Foreground" value="var(--destructive-foreground)" />
          <ColorToken name="Border" value="var(--border)" />
          <ColorToken name="Input" value="var(--input)" />
          <ColorToken name="Ring" value="var(--ring)" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Chart Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <ColorToken name="Chart 1" value="var(--chart-1)" />
          <ColorToken name="Chart 2" value="var(--chart-2)" />
          <ColorToken name="Chart 3" value="var(--chart-3)" />
          <ColorToken name="Chart 4" value="var(--chart-4)" />
          <ColorToken name="Chart 5" value="var(--chart-5)" />
        </div>
      </section>
    </div>
  ),
};

// Border Radius Tokens
export const BorderRadius: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Border Radius Tokens</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BorderRadiusToken 
              name="Large" 
              value="var(--radius)" 
              description="Used for large containers and cards"
              example={<div className="h-12 w-full bg-primary rounded-lg" />}
            />
            <BorderRadiusToken 
              name="Medium" 
              value="calc(var(--radius) - 2px)" 
              description="Used for buttons and medium-sized elements"
              example={<div className="h-12 w-full bg-primary rounded-md" />}
            />
            <BorderRadiusToken 
              name="Small" 
              value="calc(var(--radius) - 4px)" 
              description="Used for small elements and inputs"
              example={<div className="h-12 w-full bg-primary rounded-sm" />}
            />
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Usage Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Card Example</div>
                <Card className="rounded-lg">Card with large radius</Card>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Button Example</div>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Button with medium radius</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};

// Helper Components
const ColorToken = ({ name, value }: { name: string; value: string }) => (
  <Card className="p-4">
    <div className="space-y-2">
      <div className="font-medium">{name}</div>
      <div className="h-12 rounded-md" style={{ backgroundColor: `hsl(${value})` }} />
      <div className="text-sm text-muted-foreground">{value}</div>
    </div>
  </Card>
);

const BorderRadiusToken = ({ 
  name, 
  value, 
  description,
  example 
}: { 
  name: string; 
  value: string;
  description: string;
  example: React.ReactNode;
}) => (
  <Card className="p-4">
    <div className="space-y-2">
      <div className="font-medium">{name}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
      {example}
      <div className="text-sm text-muted-foreground">{value}</div>
    </div>
  </Card>
);