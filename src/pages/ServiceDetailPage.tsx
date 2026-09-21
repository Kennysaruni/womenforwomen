import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
} from 'lucide-react';
import { SERVICES_DATA, FACILITATOR_INFO } from '../data/content';
import { FadeUp, StaggerContainer, StaggerItem, ScaleReveal, HoverLift } from '../components/MotionReveal';
import { HeroBackgroundCarousel } from '../components/HeroBackgroundCarousel';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug);

  return (
    <div className="space-y-0 overflow-hidden">
      {/* 1. Header Banner */}
      <section className="bg-[#4A1525] text-white py-16 sm:py-20 border-b border-[#5A192E] relative overflow-hidden">
        <HeroBackgroundCarousel />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <FadeUp yOffset={16}>
            <div className="flex items-center gap-3">
              <Link
                to="/services"
                className="text-xs uppercase tracking-wider text-[#F3D5E2] hover:text-white inline-flex items-center gap-1 font-medium transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>All Services</span>
              </Link>
              <span className="text-white/30">/</span>
              <span className="eyebrow-accent-dark">Dedicated Program</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} yOffset={20}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight max-w-4xl leading-tight">
              {service.title}
            </h1>
          </FadeUp>

          <FadeUp delay={0.2} yOffset={20}>
            <p className="text-base sm:text-lg text-[#F8EAF0] max-w-2xl font-light leading-relaxed">
              {service.shortDescription}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. Overview & Visual Frame */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <FadeUp yOffset={20}>
                <div className="eyebrow-accent">
                  <span>Program Overview & Purpose</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1525] font-semibold">
                  Meeting Your Needs with Dignity and Practical Care
                </h2>
              </FadeUp>

              <FadeUp delay={0.1} yOffset={20}>
                <p className="text-sm sm:text-base text-[#404040] leading-relaxed">
                  {service.fullDescription}
                </p>
              </FadeUp>

              {service.quote && (
                <FadeUp delay={0.15} yOffset={20}>
                  <blockquote className="p-5 bg-[#FAF4F7] border-l-4 border-[#D81B60] text-base sm:text-lg font-serif italic text-[#5A192E]">
                    "{service.quote}"
                  </blockquote>
                </FadeUp>
              )}

              {/* Impact Metrics */}
              {service.impactMetrics && (
                <FadeUp delay={0.2} yOffset={20}>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#F3D5E2]">
                    {service.impactMetrics.map((metric, idx) => (
                      <div key={idx} className="text-left">
                        <span className="text-lg sm:text-2xl font-serif font-bold text-[#D81B60] block">
                          {metric.value}
                        </span>
                        <span className="text-[11px] sm:text-xs text-[#575757] uppercase tracking-wider block mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              )}
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <ScaleReveal delay={0.2}>
                <div className="border-2 border-[#D81B60]/30 p-2 bg-[#FAF4F7] shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="p-4 bg-[#4A1525] text-white text-left">
                    <span className="text-[10px] uppercase tracking-widest text-[#F3D5E2]/80 font-mono block">
                      Facilitated by Judith Kerr
                    </span>
                    <p className="text-xs text-[#F8EAF0] mt-1">
                      Free community participation • Virtual & In-Person support
                    </p>
                  </div>
                </div>
              </ScaleReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Offerings Breakdown */}
      <section className="py-16 sm:py-20 bg-[#FAF4F7] border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp yOffset={20}>
            <div className="max-w-3xl text-left space-y-3">
              <div className="eyebrow-accent">
                <span>Core Offerings</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                What This Program Delivers
              </h2>
              <p className="text-sm sm:text-base text-[#575757]">
                Every offering is structured to provide clear, accessible, and empathetic guidance with concrete next steps.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.offerings.map((item, index) => (
              <StaggerItem key={index} className="h-full">
                <HoverLift yOffset={-4} className="h-full">
                  <div className="bg-white border border-[#E7BDD1] p-6 text-left flex items-start gap-4 hover:border-[#D81B60] transition-colors shadow-sm h-full">
                    <span className="text-xs font-mono font-bold text-[#D81B60] shrink-0 pt-0.5">
                      0{index + 1}.
                    </span>
                    <p className="text-xs sm:text-sm text-[#1F1F1F] leading-relaxed">
                      {item}
                    </p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Tangible Outcomes & Direct Action CTA Card */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Tangible Outcomes */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <FadeUp yOffset={20}>
                <div className="space-y-3">
                  <div className="eyebrow-accent">
                    <span>Tangible Results</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1525] font-semibold">
                    Measurable Personal & Professional Outcomes
                  </h2>
                  <p className="text-sm text-[#575757]">
                    Our goal is enduring self-reliance. Here is how your life shifts through active participation in this program:
                  </p>
                </div>
              </FadeUp>

              <StaggerContainer staggerChildren={0.1} className="space-y-4">
                {service.outcomes.map((outcome, idx) => (
                  <StaggerItem key={idx}>
                    <div className="p-4 bg-[#FAF4F7] border border-[#F3D5E2] flex items-start gap-3.5 hover:border-[#D81B60] transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[#D81B60] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#404040] leading-relaxed">
                        {outcome}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Direct Action CTA Card */}
            <div className="lg:col-span-5">
              <ScaleReveal delay={0.15}>
                <div className="bg-[#4A1525] text-white border-2 border-[#D81B60] p-8 text-left space-y-6 shadow-2xl relative overflow-hidden">
                  <div className="space-y-2">
                    <div className="eyebrow-accent-dark">
                      <span>Get Started Immediately</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Access This Service
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F3D5E2] leading-relaxed">
                      Submit a quick intake request to receive direct casework, personalized guidance, or a callback from Judith Kerr.
                    </p>
                  </div>

                  <div className="p-4 bg-black/20 border border-white/10 space-y-2 text-xs text-[#F8EAF0]">
                    <div className="font-semibold text-white">Selected Program:</div>
                    <div className="text-[#D81B60] font-medium">{service.title}</div>
                    <div className="text-[11px] text-[#F3D5E2]/70">
                      No charge • 100% Confidential
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={`/contact?service=${service.slug}`}
                      className="w-full py-3.5 px-6 bg-[#D81B60] hover:bg-[#E91E63] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Submit Intake Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/contact"
                      className="w-full py-3 px-6 border border-white/30 hover:border-white text-white text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-white/5 cursor-pointer text-center block"
                    >
                      Speak with Judith Kerr
                    </Link>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-[#F3D5E2]/80 space-y-1">
                    <div>Prefer to speak directly?</div>
                    <a
                      href={`tel:${FACILITATOR_INFO.phoneRaw}`}
                      className="text-white hover:text-[#D81B60] underline font-medium"
                    >
                      Call Judith Kerr at {FACILITATOR_INFO.phone}
                    </a>
                  </div>
                </div>
              </ScaleReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Explore Other Services */}
      <section className="py-16 bg-[#FAF4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <FadeUp yOffset={16}>
            <div className="text-left">
              <h3 className="text-xl font-serif font-bold text-[#4A1525]">
                Explore Other Core Services
              </h3>
              <p className="text-xs text-[#575757]">
                Women FE Woman programs are interconnected for holistic community empowerment.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <StaggerItem key={other.id} className="h-full">
                <HoverLift yOffset={-6} className="h-full">
                  <Link
                    to={`/services/${other.slug}`}
                    className="bg-white border border-[#E7BDD1] p-6 text-left hover:border-[#D81B60] hover:shadow-md transition-all group block h-full flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#D81B60] block mb-1">
                        Program
                      </span>
                      <h4 className="text-base font-serif font-bold text-[#4A1525] group-hover:text-[#D81B60] transition-colors leading-snug">
                        {other.title}
                      </h4>
                      <p className="text-xs text-[#575757] mt-2 line-clamp-2">
                        {other.shortDescription}
                      </p>
                    </div>
                    <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#5A192E] group-hover:text-[#D81B60] inline-flex items-center gap-1">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

