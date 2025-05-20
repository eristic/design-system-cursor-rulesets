import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

interface PortfolioDetailPageProps {
  params: {
    id: string;
  };
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const project = PORTFOLIO_ITEMS.find((item) => item.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 md:pt-32">
      <div className="container mb-16">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/portfolio" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="flex items-center mb-6">
              <div className="px-3 py-1 bg-muted rounded-full text-sm">
                {project.category}
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Overview</h3>
                <p className="text-muted-foreground">
                  {project.description}
                  {/* Extended description for detail page */}
                  {` We worked closely with ${project.client} to understand their unique challenges and goals. 
                  Our approach combined strategic thinking with creative design, resulting in a solution 
                  that not only looked great but also delivered measurable results.`}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Client</h3>
                <p className="text-muted-foreground">{project.client}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Services Provided</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>UX/UI Design</li>
                  <li>Web Development</li>
                  <li>Brand Strategy</li>
                  <li>SEO Optimization</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Project Results</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>40% increase in conversion rate</li>
                  <li>60% improvement in page load time</li>
                  <li>35% growth in organic traffic</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Button asChild>
                  <Link href="/contact">Start a Similar Project</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Additional project images could go here */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image 
                  src={project.image} 
                  alt={`${project.title} detail 1`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image 
                  src={project.image} 
                  alt={`${project.title} detail 2`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Next Projects */}
      <div className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.filter(item => item.id !== project.id)
              .slice(0, 3)
              .map((item) => (
                <Link 
                  key={item.id} 
                  href={`/portfolio/${item.id}`}
                  className="group"
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}