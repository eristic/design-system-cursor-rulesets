import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  className?: string;
}

export function NewsCard({
  id,
  title,
  category,
  date,
  excerpt,
  image,
  className,
}: NewsCardProps) {
  const formattedDate = format(new Date(date), "MMM d, yyyy");

  return (
    <Card className={cn("overflow-hidden group", className)}>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <Badge variant="outline" className="font-normal">
            {category}
          </Badge>
          <time dateTime={date}>{formattedDate}</time>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/news/${id}`}
          className="text-primary font-medium flex items-center text-sm group-hover:underline"
        >
          Read More
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}