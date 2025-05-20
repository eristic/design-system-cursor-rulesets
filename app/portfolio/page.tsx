"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/hero-section";
import { PortfolioCard } from "@/components/portfolio-card";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { Reveal } from "@/components/animations/reveal";

export default function PortfolioPage() {
  const [filteredItems, setFilteredItems] = useState(PORTFOLIO_ITEMS);
  const [activeFilter, setActiveFilter] = useState("All");

  // Extract unique categories
  const categories = Array.from(
    new Set(PORTFOLIO_ITEMS.map((item) => item.category))
  );

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    
    if (category === "All") {
      setFilteredItems(PORTFOLIO_ITEMS);
    } else {
      setFilteredItems(
        PORTFOLIO_ITEMS.filter((item) => item.category === category)
      );
    }
  };

  return (
    <>
      <HeroSection
        title="Our Portfolio"
        description="Explore our work and discover how we've helped our clients achieve their goals."
        size="md"
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-10">
            <Reveal>
              <PortfolioFilter
                categories={categories}
                onFilterChange={handleFilterChange}
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05} width="100%">
                <PortfolioCard
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  image={item.image}
                  client={item.client}
                />
              </Reveal>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                No projects match the selected category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}