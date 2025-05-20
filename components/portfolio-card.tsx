import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  className?: string;
}

export function PortfolioCard({
  id,
  title,
  category,
  description,
  image,
  client,
  className,
}: PortfolioCardProps) {
  return (
    <Card className={cn("overflow-hidden group", className)}>
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white w-full">
            <p className="text-sm font-medium">Client: {client}</p>
          </div>
        </div>
      </div>
      <CardContent className="pt-6">
        <Badge variant="secondary" className="mb-2">
          {category}
        </Badge>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/portfolio/${id}`}
          className="text-primary font-medium flex items-center text-sm group-hover:underline"
        >
          View Project
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}