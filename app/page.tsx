import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { PortfolioCard } from "@/components/portfolio-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Reveal } from "@/components/animations/reveal";
import { PORTFOLIO_ITEMS, SERVICES, TESTIMONIALS } from "@/lib/constants";

export default function Home() {
  // Only show first 3 portfolio items on homepage
  const featuredPortfolio = PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <>
      <HeroSection
        title="Crafting Digital Experiences That Inspire"
        description="We combine strategic thinking with cutting-edge technology to create memorable brands and digital experiences that drive results."
        primaryCta={{ text: "View Our Work", href: "/portfolio" }}
        secondaryCta={{ text: "Get in Touch", href: "/contact" }}
        size="lg"
        backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer comprehensive digital solutions tailored to your unique needs.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1} width="100%">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link="/services"
                />
              </Reveal>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/pricing">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our latest projects and see how we help our clients achieve their goals.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPortfolio.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.1} width="100%">
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
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="group">
              <Link href="/portfolio" className="flex items-center">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Reveal>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">10+</p>
                <p className="text-primary-foreground/80">Years Experience</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">120+</p>
                <p className="text-primary-foreground/80">Projects Completed</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">50+</p>
                <p className="text-primary-foreground/80">Happy Clients</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">15</p>
                <p className="text-primary-foreground/80">Team Members</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don&apos;t just take our word for it—hear from some of our satisfied clients.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal key={index} delay={index * 0.1} width="100%">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  company={testimonial.company}
                  image={testimonial.image}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground mb-8">
                Let&apos;s collaborate to bring your vision to life. Contact us today for a free consultation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}