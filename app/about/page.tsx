import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { Reveal } from "@/components/animations/reveal";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Us"
        description="We're a team of passionate designers and developers creating exceptional digital experiences."
        size="md"
      />

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal width="100%">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2015, Pixel Perfect began with a simple mission:
                    to create digital experiences that blend beautiful design
                    with powerful functionality.
                  </p>
                  <p>
                    What started as a small team of three passionate designers
                    has grown into a full-service digital agency with expertise
                    spanning design, development, branding, and marketing.
                  </p>
                  <p>
                    Throughout our journey, we&apos;ve remained committed to our
                    founding principles: attention to detail, client-centered
                    approach, and continuous innovation. These values guide
                    every project we undertake and every relationship we build.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" width="100%">
              <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our team collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/40">
        <div className="container">
          <Reveal width="100%">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide our work and shape our culture.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1} width="100%">
              <div className="bg-background p-8 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-primary">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We&apos;re committed to delivering work of the highest
                  quality, paying attention to every detail and continuously
                  refining our craft.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} width="100%">
              <div className="bg-background p-8 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-primary">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of partnership, working closely with
                  our clients and each other to achieve exceptional results.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} width="100%">
              <div className="bg-background p-8 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-primary">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace change and continuously explore new technologies
                  and approaches to solve complex problems.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal width="100%">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The talented people behind our successful projects.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.1} width="100%">
                <div className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-muted/40">
        <div className="container">
          <Reveal width="100%">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured approach to delivering successful projects.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%-1px)] border-l border-dashed border-border"></div>

            <div className="space-y-16 md:space-y-24 relative">
              <Reveal width="100%">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                    <p className="text-muted-foreground">
                      We begin by understanding your business, objectives, and
                      target audience through in-depth research and
                      collaborative workshops.
                    </p>
                  </div>
                  <div className="relative order-1 md:order-2">
                    <div className="hidden md:block absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-primary rounded-full"></div>
                    <div className="bg-background p-6 rounded-lg shadow-sm md:ml-8">
                      <span className="text-4xl font-bold text-primary">
                        01
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal width="100%">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-primary rounded-full"></div>
                    <div className="bg-background p-6 rounded-lg shadow-sm md:mr-8">
                      <span className="text-4xl font-bold text-primary">
                        02
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Strategy</h3>
                    <p className="text-muted-foreground">
                      Based on our findings, we develop a comprehensive strategy
                      that outlines the approach, timeline, and expected
                      outcomes.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal width="100%">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-3">Design</h3>
                    <p className="text-muted-foreground">
                      Our design process combines creativity with user-centered
                      principles to create intuitive, engaging interfaces.
                    </p>
                  </div>
                  <div className="relative order-1 md:order-2">
                    <div className="hidden md:block absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-primary rounded-full"></div>
                    <div className="bg-background p-6 rounded-lg shadow-sm md:ml-8">
                      <span className="text-4xl font-bold text-primary">
                        03
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal width="100%">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-primary rounded-full"></div>
                    <div className="bg-background p-6 rounded-lg shadow-sm md:mr-8">
                      <span className="text-4xl font-bold text-primary">
                        04
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Development</h3>
                    <p className="text-muted-foreground">
                      Our development team brings designs to life with clean,
                      efficient code that ensures performance, security, and
                      scalability.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal width="100%">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-3">
                      Launch & Support
                    </h3>
                    <p className="text-muted-foreground">
                      After thorough testing, we launch your project and provide
                      ongoing support to ensure continued success.
                    </p>
                  </div>
                  <div className="relative order-1 md:order-2">
                    <div className="hidden md:block absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-primary rounded-full"></div>
                    <div className="bg-background p-6 rounded-lg shadow-sm md:ml-8">
                      <span className="text-4xl font-bold text-primary">
                        05
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
