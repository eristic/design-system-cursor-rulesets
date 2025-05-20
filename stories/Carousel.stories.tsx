import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Card, CardContent } from "../components/ui/card";

const meta: Meta<typeof Carousel> = {
  title: "UI/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A versatile carousel component that supports both horizontal and vertical orientations, with customizable navigation controls.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const items = [
  {
    title: "Slide 1",
    description: "This is the first slide",
    color: "bg-blue-100",
  },
  {
    title: "Slide 2",
    description: "This is the second slide",
    color: "bg-green-100",
  },
  {
    title: "Slide 3",
    description: "This is the third slide",
    color: "bg-purple-100",
  },
  {
    title: "Slide 4",
    description: "This is the fourth slide",
    color: "bg-yellow-100",
  },
];

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className={`p-6 ${item.color}`}>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2">{item.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="h-[400px] max-w-md mx-auto">
      <Carousel orientation="vertical">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className={`p-6 ${item.color}`}>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2">{item.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const WithoutControls: Story = {
  render: () => (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className={`p-6 ${item.color}`}>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2">{item.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  ),
};

export const CustomControls: Story = {
  render: () => (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className={`p-6 ${item.color}`}>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2">{item.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 mt-4">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  ),
};
