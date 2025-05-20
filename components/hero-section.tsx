"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  alignment?: "left" | "center";
  className?: string;
  size?: "sm" | "md" | "lg";
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  alignment = "center",
  className = "",
  size = "lg",
  backgroundImage,
}: HeroSectionProps) {
  const alignmentClasses =
    alignment === "center"
      ? "text-center items-center"
      : "text-left items-start";

  const sizeClasses = {
    sm: "pt-24 pb-12",
    md: "pt-32 pb-16",
    lg: "pt-40 pb-20",
  };

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <section
      className={cn(
        "relative flex flex-col justify-center",
        sizeClasses[size],
        alignmentClasses,
        backgroundImage ? "text-white" : "",
        className
      )}
      style={backgroundStyle}
    >
      <div className="container max-w-5xl px-4 md:px-6">
        {subtitle && (
          <Reveal delay={0.1} className="w-full">
            <p className="text-sm md:text-base font-medium tracking-wider text-primary uppercase mb-3">
              {subtitle}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.2} className="w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 md:mb-6">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.3} className="w-full">
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 md:mb-8">
              {description}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.4} className="w-full">
          <div
            className={`flex flex-col sm:flex-row gap-4 ${
              alignment === "center" ? "justify-center" : "justify-start"
            }`}
          >
            {primaryCta && (
              <Button asChild size="lg" className="font-medium">
                <Link href={primaryCta.href}>{primaryCta.text}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-medium"
              >
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
