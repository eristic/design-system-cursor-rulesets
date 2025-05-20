import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  company,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="pt-6">
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <p className="text-lg italic">"{quote}"</p>
          </div>
          <div className="mt-auto flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={image}
                alt={author}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-medium">{author}</p>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}