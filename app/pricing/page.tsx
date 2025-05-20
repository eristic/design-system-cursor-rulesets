import Link from "next/link";
import { Check } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { PricingCard } from "@/components/pricing-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRICING_PLANS, SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/animations/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingPage() {
  const faqs = [
    {
      question: "What's included in each plan?",
      answer:
        "Each plan includes different levels of service. The Essential plan covers basic needs for small businesses, while the Professional and Enterprise plans offer more comprehensive services for growing and established organizations.",
    },
    {
      question: "Can I customize a package?",
      answer:
        "Yes! We understand that every project is unique. Contact us to discuss your specific requirements, and we'll create a custom solution tailored to your needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. Essential projects typically take 2-3 weeks, Professional projects 4-6 weeks, and Enterprise projects are scheduled based on specific requirements.",
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer:
        "Yes, we offer maintenance packages to keep your website secure, updated, and performing optimally. These can be added to any of our plans.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, bank transfers, and PayPal. For larger projects, we typically require a 50% deposit upfront, with the remaining balance due upon completion.",
    },
    {
      question: "Do you work with clients internationally?",
      answer:
        "Absolutely! We've worked with clients across the globe and are comfortable collaborating remotely through various communication channels.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Transparent Pricing for Quality Work"
        description="Choose the plan that fits your business needs and budget."
        size="md"
      />

      {/* Pricing Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Pricing Plans</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Flexible options for businesses of all sizes. All plans include
                our core services and dedicated support.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, index) => (
              <Reveal key={plan.title} delay={index * 0.1} width="100%">
                <PricingCard
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  cta={plan.cta}
                  popular={plan.popular}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Need a custom solution? Contact us for a personalized quote.
              </p>
              <Link
                href="/contact"
                className="text-primary font-medium hover:underline"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions tailored to your business needs.
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
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Plan Comparison</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare our plans to find the perfect fit for your business.
              </p>
            </div>
          </Reveal>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Feature</th>
                  <th className="p-4 font-medium">Essential</th>
                  <th className="p-4 font-medium bg-muted/50">Professional</th>
                  <th className="p-4 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="text-left p-4">Custom Design</td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                  <td className="p-4 text-center bg-muted/50">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="text-left p-4">Responsive Layout</td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                  <td className="p-4 text-center bg-muted/50">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="text-left p-4">Content Management System</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-muted/50">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="text-left p-4">SEO Optimization</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-muted/50">Advanced</td>
                  <td className="p-4 text-center">Premium</td>
                </tr>
                <tr className="border-b">
                  <td className="text-left p-4">E-commerce Functionality</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-muted/50">—</td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="text-left p-4">Custom Integrations</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-muted/50">Limited</td>
                  <td className="p-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="text-left p-4">Ongoing Support</td>
                  <td className="p-4 text-center">30 days</td>
                  <td className="p-4 text-center bg-muted/50">90 days</td>
                  <td className="p-4 text-center">12 months</td>
                </tr>
                <tr className="border-b">
                  <td className="text-left p-4">Revisions</td>
                  <td className="p-4 text-center">2 rounds</td>
                  <td className="p-4 text-center bg-muted/50">4 rounds</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our services and pricing.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Still have questions? We&apos;re here to help.
              </p>
              <Link
                href="/contact"
                className="text-primary font-medium hover:underline"
              >
                Contact us for more information
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
