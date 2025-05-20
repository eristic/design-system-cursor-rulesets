import React from "react";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  className?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  cta,
  popular = false,
  className,
}: PricingCardProps) {
  return (
    <Card 
      className={cn(
        "flex flex-col justify-between border transition-all duration-300 relative overflow-hidden",
        popular ? "border-primary shadow-lg scale-[1.02] md:scale-105" : "hover:border-primary/50 hover:shadow-md",
        className
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-medium">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-6">
          <p className="text-3xl font-bold">{price}</p>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full"
          variant={popular ? "default" : "outline"}
        >
          <Link href="/contact">{cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}