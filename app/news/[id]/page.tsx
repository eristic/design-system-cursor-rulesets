import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, Facebook, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NEWS_ITEMS } from "@/lib/constants";
import { NewsCard } from "@/components/news-card";
import { Reveal } from "@/components/animations/reveal";

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = NEWS_ITEMS.find((item) => item.id === params.id);

  if (!article) {
    notFound();
  }

  const formattedDate = format(new Date(article.date), "MMMM d, yyyy");
  
  // Get related articles (same category, excluding current)
  const relatedArticles = NEWS_ITEMS.filter(
    (item) => item.category === article.category && item.id !== article.id
  ).slice(0, 2);

  return (
    <div className="pt-24 md:pt-32">
      <div className="container max-w-4xl mb-16">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/news" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>
        </Button>

        <div className="mb-6">
          <div className="px-3 py-1 bg-muted rounded-full text-sm inline-block mb-4">
            {article.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center text-muted-foreground">
            <time dateTime={article.date}>{formattedDate}</time>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="lead">{article.excerpt}</p>
          
          <p>
            In the ever-evolving landscape of digital design and development, staying ahead of 
            trends is crucial for businesses looking to maintain a competitive edge. This article 
            explores the emerging patterns and technologies that are shaping the digital experience 
            in the coming year.
          </p>
          
          <h2>Understanding the Shift</h2>
          <p>
            The past year has seen significant changes in how users interact with digital products. 
            With the rise of AI-powered tools and heightened expectations for accessibility, 
            designers and developers are facing new challenges and opportunities.
          </p>
          
          <p>
            Key factors driving these changes include:
          </p>
          
          <ul>
            <li>Advances in machine learning and AI integration</li>
            <li>Growing emphasis on inclusive design practices</li>
            <li>Shift toward more immersive and interactive experiences</li>
            <li>Increased focus on performance and sustainable design</li>
          </ul>
          
          <h2>What This Means for Businesses</h2>
          <p>
            As these trends gain momentum, organizations must adapt their digital strategies to 
            meet evolving user expectations. This may involve revisiting existing designs, 
            investing in new technologies, or rethinking entire user journeys.
          </p>
          
          <p>
            Companies that embrace these changes early will be better positioned to create 
            meaningful connections with their audiences and drive engagement across platforms.
          </p>
          
          <h2>Looking Ahead</h2>
          <p>
            While predicting the future of technology is always challenging, the current 
            trajectory suggests a continued movement toward more personalized, accessible, 
            and immersive digital experiences. By staying informed and adaptable, businesses 
            can ensure they remain relevant in an increasingly competitive digital landscape.
          </p>
          
          <p>
            We'll continue to monitor these developments and share insights as the industry evolves.
          </p>
        </article>
        
        {/* Share links */}
        <div className="mt-8 pt-6 border-t">
          <p className="font-medium mb-3">Share this article</p>
          <div className="flex space-x-3">
            <Button variant="outline" size="icon" asChild>
              <a href="#" aria-label="Share on Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="#" aria-label="Share on Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="#" aria-label="Share on LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-muted/50 py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.1} width="100%">
                  <NewsCard
                    id={item.id}
                    title={item.title}
                    category={item.category}
                    date={item.date}
                    excerpt={item.excerpt}
                    image={item.image}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}