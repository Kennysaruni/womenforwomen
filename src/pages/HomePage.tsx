import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { CORE_PHILOSOPHY, PRIMARY_PILLARS, SERVICES_DATA, FACILITATOR_INFO } from '../data/content';
import { FadeUp, StaggerContainer, StaggerItem, ScaleReveal, HoverLift } from '../components/MotionReveal';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* 1. Hero Section - Light Background & Visible Typography */}
      <section className="relative bg-gradient-to-b from-[#FAF4F7] via-[#FAF7F8] to-[#F5EBF0] overflow-hidden py-16 sm:py-24 border-b border-[#E7BDD1]">
        {/* Subtle luminous atmospheric accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D81B60]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F3D5E2]/60 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* <FadeUp delay={0.05} yOffset={16}>
                <div className="eyebrow-accent">
                  <span>Community Empowerment & Sisterhood</span>
                </div>
              </FadeUp> */}

              <FadeUp delay={0.1} yOffset={20}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#4A1525] tracking-tight leading-[1.12]">
                  Some People Dream of Fulfilment...{' '}
                  <span className="text-[#D81B60] italic block font-normal mt-2">
                    We Make It Happen.
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2} yOffset={20}>
                <p className="text-base sm:text-lg text-[#575757] max-w-2xl leading-relaxed font-normal">
                  Founded on the proven principle that the combined energy of several people focusing on the same problem is many times greater than the sum of the individual energies involved; we seek to empower all women and specifically marginalized women to recognize their own self-worth through self-knowledge both as individuals and as a collective.
                </p>
              </FadeUp>

              {/* Action Buttons */}
              <FadeUp delay={0.3} yOffset={20}>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-[#D81B60] hover:bg-[#E91E63] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Connect With Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/services"
                    className="px-7 py-4 border-2 border-[#4A1525] hover:bg-[#4A1525] text-[#4A1525] hover:text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Explore Our Programs</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeUp>

              {/* Verified Trust Points */}
              <FadeUp delay={0.4} yOffset={16}>
                <div className="pt-6 border-t border-[#E7BDD1] grid grid-cols-3 gap-4 text-xs text-[#575757]">
                  <div>
                    <span className="block text-lg sm:text-xl font-serif font-bold text-[#4A1525]">T.E.A.M.</span>
                    <span className="text-[11px] text-[#7A3048] font-medium">Together Each Achieve More</span>
                  </div>
                  <div>
                    <span className="block text-lg sm:text-xl font-serif font-bold text-[#4A1525]">Free Access</span>
                    <span className="text-[11px] text-[#7A3048] font-medium">No Fee or Membership Barrier</span>
                  </div>
                  <div>
                    <span className="block text-lg sm:text-xl font-serif font-bold text-[#4A1525]">GTA & Virtual</span>
                    <span className="text-[11px] text-[#7A3048] font-medium">Scarborough Hub + Zoom</span>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <ScaleReveal delay={0.2} className="w-full max-w-sm sm:max-w-md">
                <div className="relative border-2 border-[#E7BDD1] p-3 bg-white shadow-2xl">
                  <div className="relative aspect-square overflow-hidden bg-[#FAF4F7] border border-[#F3D5E2]">
                    <img
                      src={FACILITATOR_INFO.image}
                      alt={`Portrait of ${FACILITATOR_INFO.name}, ${FACILITATOR_INFO.title}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 bg-[#FAF4F7] border-t border-[#E7BDD1] text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-[#D81B60] font-semibold">
                          Group Facilitator & Founder
                        </p>
                        <p className="text-base font-serif text-[#4A1525] font-bold">
                          {FACILITATOR_INFO.name}
                        </p>
                      </div>
                      <Link
                        to="/about"
                        className="text-xs text-[#5A192E] hover:text-[#D81B60] font-medium underline decoration-[#D81B60]"
                      >
                        Read Our Story →
                      </Link>
                    </div>
                  </div>
                </div>
              </ScaleReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Philosophy / T.E.A.M. Highlight */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#F3D5E2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <FadeUp yOffset={20}>
            <div className="eyebrow-accent-center">
              <span>Guiding Principle & Philosophy</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} yOffset={20}>
            <div className="space-y-4">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#D81B60] block">
                {CORE_PHILOSOPHY.acronym} — {CORE_PHILOSOPHY.fullName}
              </span>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#4A1525] font-normal leading-snug max-w-3xl mx-auto">
                "{CORE_PHILOSOPHY.quoteUppercase}"
              </blockquote>
              <p className="text-xs sm:text-sm text-[#575757] uppercase tracking-wider">
                — {CORE_PHILOSOPHY.attribution}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} yOffset={20}>
            <p className="text-sm sm:text-base text-[#404040] max-w-3xl mx-auto leading-relaxed">
              There is more than sufficient for everyone and if we assist others to realize their dreams and successes it naturally flows back to us.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} yOffset={10}>
            <div className="w-16 h-0.5 bg-[#D81B60] mx-auto" />
          </FadeUp>
        </div>
      </section>

      {/* 3. Primary Objectives Grid (4 Distinct Pillars) */}
      <section className="py-16 sm:py-24 bg-[#FAF4F7] border-y border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <FadeUp yOffset={20}>
            <div className="max-w-3xl space-y-3 text-left">
              <div className="eyebrow-accent">
                <span>Core Mandate</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                Primary Objectives: Raising the Standard of Life
              </h2>
              <p className="text-sm sm:text-base text-[#575757] leading-relaxed">
                To raise the standard of life for women and their communities through: Information Sharing and Awareness, Community Support, Accessibility, and Financial Management.
              </p>
            </div>
          </FadeUp>

          {/* 4 Pillars Grid */}
          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRIMARY_PILLARS.map((pillar) => (
              <StaggerItem key={pillar.id} className="h-full">
                <HoverLift yOffset={-6} className="h-full">
                  <div className="bg-white border border-[#E7BDD1] p-6 text-left flex flex-col justify-between hover:border-[#D81B60] hover:shadow-md transition-all duration-200 h-full">
                    <div className="space-y-4">
                      {/* Clean floating number and inline category text */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#F3D5E2]">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#D81B60]">
                          PILLAR {pillar.number}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#D81B60]" />
                      </div>

                      <h3 className="text-lg font-serif font-bold text-[#4A1525] leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#575757] leading-relaxed">
                        {pillar.description}
                      </p>

                      {/* Bullet list converted to clean checklist items */}
                      <div className="pt-2 space-y-2">
                        {pillar.offerings.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#404040]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D81B60] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-4 border-t border-[#F8EAF0]">
                      <Link
                        to="/about"
                        className="text-xs font-semibold text-[#5A192E] hover:text-[#D81B60] inline-flex items-center gap-1 uppercase tracking-wider"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Services Preview Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp yOffset={20}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3 text-left">
                <div className="eyebrow-accent">
                  <span>Actionable Programs</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                  Dedicated Support Services
                </h2>
                <p className="text-sm sm:text-base text-[#575757]">
                  Free, confidential, and practical assistance tailored to guide you step-by-step through critical life transitions.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D81B60] hover:text-[#4A1525] transition-colors"
              >
                <span>View All 4 Service Catalogs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>

          {/* Cards Grid */}
          <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((srv) => (
              <StaggerItem key={srv.id} className="h-full">
                <HoverLift yOffset={-6} className="h-full">
                  <div className="group border border-[#E7BDD1] bg-[#FAF4F7] overflow-hidden flex flex-col justify-between hover:border-[#D81B60] transition-all duration-300 shadow-sm hover:shadow-lg h-full">
                    {/* Image top with subtle zoom */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E0B16]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <span className="text-[11px] uppercase tracking-widest text-[#F8EAF0] font-semibold">
                          Dedicated Track
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 space-y-4 text-left flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif font-bold text-[#4A1525] group-hover:text-[#D81B60] transition-colors leading-tight">
                          {srv.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#575757] leading-relaxed">
                          {srv.shortDescription}
                        </p>
                      </div>

                      {/* Offerings snippet */}
                      <div className="pt-2 border-t border-[#F3D5E2] space-y-1.5 text-xs text-[#404040]">
                        {srv.offerings.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D81B60] shrink-0 mt-1.5" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="pt-4 flex items-center justify-between border-t border-[#F3D5E2]">
                        <Link
                          to={`/services/${srv.slug}`}
                          className="text-xs font-semibold uppercase tracking-wider text-[#4A1525] group-hover:text-[#D81B60] inline-flex items-center gap-1.5"
                        >
                          <span>Explore Service Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <Link
                          to={`/contact?service=${srv.slug}`}
                          className="px-3.5 py-1.5 bg-[#4A1525] hover:bg-[#D81B60] text-white text-[11px] font-semibold uppercase tracking-wider transition-colors"
                        >
                          Request Support
                        </Link>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Community Invitation Banner - Light Surface */}
      <section className="bg-gradient-to-b from-[#FAF4F7] via-[#F8EAF0] to-[#FAF4F7] py-16 border-t border-[#E7BDD1]">
        <FadeUp yOffset={24}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="eyebrow-accent-center">
              <span>Open Welcome</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-bold">
              You Do Not Have to Walk This Journey Alone.
            </h2>
            <p className="text-sm sm:text-base text-[#575757] max-w-2xl mx-auto leading-relaxed">
              Whether you are navigating a bureaucratic roadblock, rebuilding your career, or seeking a circle of sisters who genuinely care, our community welcomes you with open arms.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-[#D81B60] hover:bg-[#E91E63] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors shadow-md hover:shadow-lg cursor-pointer"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="px-8 py-3.5 border-2 border-[#4A1525] text-[#4A1525] hover:bg-[#4A1525] hover:text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors"
              >
                Explore Our Programs
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
};

