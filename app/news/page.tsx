import { HeroSection } from "@/components/hero-section";
import { NewsCard } from "@/components/news-card";
import { NEWS_ITEMS } from "@/lib/constants";
import { Reveal } from "@/components/animations/reveal";

export default function NewsPage() {
  return (
    <>
      <HeroSection
        title="News & Insights"
        description="Stay updated with the latest trends, insights, and news from our agency."
        size="md"
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05} width="100%">
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
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground mb-6">
                Get the latest industry news, insights, and updates delivered straight to your inbox.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Subscribe
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}