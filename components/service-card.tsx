import React from "react";
import Link from "next/link";
import { 
  BarChart, Code, Lightbulb, Palette, 
  ArrowRight, ExternalLink, BadgeCheck
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  link,
  className 
}: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "palette":
        return <Palette className="h-6 w-6" />;
      case "code":
        return <Code className="h-6 w-6" />;
      case "lightbulb":
        return <Lightbulb className="h-6 w-6" />;
      case "barChart":
        return <BarChart className="h-6 w-6" />;
      case "check":
        return <BadgeCheck className="h-6 w-6" />;
      default:
        return <ExternalLink className="h-6 w-6" />;
    }
  };

  return (
    <Card className={cn("transition-all duration-300 hover:shadow-md group", className)}>
      <CardHeader>
        <div className="p-2 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary mb-4">
          {getIcon()}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      {link && (
        <CardFooter>
          <Button asChild variant="ghost" className="p-0 h-auto">
            <Link href={link} className="text-primary font-medium flex items-center">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}