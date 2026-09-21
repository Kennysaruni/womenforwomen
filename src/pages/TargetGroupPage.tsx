import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  MessageSquareQuote,
  Sparkles,
  Users,
  Compass,
  ShieldAlert,
  Wallet,
  Briefcase,
} from 'lucide-react';
import { TARGET_GROUP_DATA, CORE_PHILOSOPHY } from '../data/content';
import { FadeUp, StaggerContainer, StaggerItem, HoverLift } from '../components/MotionReveal';
import { HeroBackgroundCarousel } from '../components/HeroBackgroundCarousel';

export const TargetGroupPage: React.FC = () => {
  const whatsInItIcons = [
    HeartHandshake,
    MessageSquareQuote,
    Sparkles,
    Compass,
    Users,
  ];

  const supportIcons = [
    Compass,
    ShieldAlert,
    Wallet,
    Briefcase,
  ];

  return (
    <div className="space-y-0 overflow-hidden">
      {/* 1. Header Banner */}
      <section className="bg-[#4A1525] text-white py-16 sm:py-20 border-b border-[#5A192E] relative overflow-hidden">
        <HeroBackgroundCarousel />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <FadeUp yOffset={16}>
            <div className="eyebrow-accent-dark">
              <span>Who We Serve & Personal Returns</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} yOffset={20}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Target Group & Member Benefits
            </h1>
          </FadeUp>
          <FadeUp delay={0.2} yOffset={20}>
            <p className="text-base sm:text-lg text-[#F8EAF0] max-w-2xl font-light">
              Founded on the proven principle that the combined energy of several people focusing on the same problem is many times greater than the sum of the individual energies involved.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. Target Group Definition */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp yOffset={20}>
            <div className="max-w-3xl text-left space-y-3">
              <div className="eyebrow-accent">
                <span>Inclusive Community</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                Who Belongs at Women FE Woman?
              </h2>
              <p className="text-sm sm:text-base text-[#575757]">
                We seek to empower all women and specifically marginalized women to recognize their own self-worth through self-knowledge both as individuals and as a collective.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TARGET_GROUP_DATA.demographics.map((demo, idx) => (
              <StaggerItem key={idx} className="h-full">
                <HoverLift yOffset={-6} className="h-full">
                  <div className="bg-[#FAF4F7] border border-[#E7BDD1] p-6 text-left flex flex-col justify-between hover:border-[#D81B60] transition-colors h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#F3D5E2]">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#D81B60] font-bold">
                          Group 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#4A1525] leading-snug">
                        {demo.title}
                      </h3>
                      <p className="text-xs text-[#575757] leading-relaxed">
                        {demo.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#F8EAF0] space-y-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-[#5A192E] font-semibold block">
                        Focus Areas:
                      </span>
                      {demo.needs.map((n, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#404040]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D81B60]" />
                          <span>{n}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. "What's In It For Me?" */}
      <section className="py-16 sm:py-24 bg-[#FAF4F7] border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp yOffset={20}>
            <div className="max-w-3xl text-left space-y-3">
              <div className="eyebrow-accent">
                <span>Personal Transformation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                {TARGET_GROUP_DATA.whatsInItForMe.title}
              </h2>
              <p className="text-sm sm:text-base text-[#575757]">
                {TARGET_GROUP_DATA.whatsInItForMe.subtitle}
              </p>
            </div>
          </FadeUp>

          <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_GROUP_DATA.whatsInItForMe.points.map((point, index) => {
              const IconComp = whatsInItIcons[index % whatsInItIcons.length];
              return (
                <StaggerItem key={index} className="h-full">
                  <HoverLift yOffset={-4} className="h-full">
                    <div className="bg-white border border-[#E7BDD1] p-6 text-left space-y-4 hover:border-[#D81B60] transition-colors shadow-sm h-full flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-full bg-[#FAF4F7] border border-[#F3D5E2] flex items-center justify-center text-[#D81B60]">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="text-base sm:text-lg font-serif font-bold text-[#4A1525] leading-snug">
                          {point}
                        </h3>
                      </div>
                      <div className="pt-3 border-t border-[#F8EAF0] flex items-center justify-between">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#D81B60]">
                          Experience 0{index + 1}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#D81B60]" />
                      </div>
                    </div>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Supports & Assistance */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp yOffset={20}>
            <div className="max-w-3xl text-left space-y-3">
              <div className="eyebrow-accent">
                <span>Action & Guidance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                Supports & Assistance
              </h2>
              <p className="text-sm sm:text-base text-[#575757]">
                Practical, confidential assistance structured to guide women step-by-step through immediate challenges and long-term milestones.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TARGET_GROUP_DATA.supportsAndAssistance.map((support, idx) => {
              const IconComp = supportIcons[idx % supportIcons.length];
              return (
                <StaggerItem key={idx} className="h-full">
                  <HoverLift yOffset={-6} className="h-full">
                    <div className="bg-[#FAF4F7] border border-[#E7BDD1] p-6 sm:p-8 text-left space-y-5 hover:border-[#D81B60] transition-colors shadow-sm h-full flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white border border-[#E7BDD1] flex items-center justify-center text-[#D81B60]">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D81B60] font-bold block">
                              Track 0{idx + 1}
                            </span>
                            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#4A1525] leading-snug">
                              {support.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-[#575757] leading-relaxed">
                          {support.description}
                        </p>

                        <div className="pt-3 border-t border-[#F3D5E2] space-y-2">
                          {support.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#333333]">
                              <CheckCircle2 className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                              <span className="leading-snug">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#F8EAF0] flex items-center justify-between">
                        <Link
                          to="/contact"
                          className="text-xs font-semibold uppercase tracking-wider text-[#4A1525] hover:text-[#D81B60] inline-flex items-center gap-1.5"
                        >
                          <span>Request Assistance</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Benefits: This Will Be An Opportunity To */}
      <section className="py-16 sm:py-24 bg-[#FAF4F7] border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp yOffset={20}>
            <div className="max-w-3xl text-left space-y-3">
              <div className="eyebrow-accent">
                <span>Your Opportunity</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                {TARGET_GROUP_DATA.benefitsAndOpportunities.title}
              </h2>
              <p className="text-sm sm:text-base text-[#575757]">
                {TARGET_GROUP_DATA.benefitsAndOpportunities.subtitle}
              </p>
            </div>
          </FadeUp>

          <StaggerContainer staggerChildren={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_GROUP_DATA.benefitsAndOpportunities.points.map((benefit, index) => (
              <StaggerItem key={index} className="h-full">
                <HoverLift yOffset={-4} className="h-full">
                  <div className="bg-white border border-[#E7BDD1] p-6 text-left space-y-4 hover:border-[#D81B60] transition-colors shadow-sm h-full flex flex-col justify-between">
                    <div className="flex items-start gap-3.5">
                      <span className="w-2 h-2 rounded-full bg-[#D81B60] shrink-0 mt-2" />
                      <p className="text-xs sm:text-sm text-[#1F1F1F] font-medium leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#F8EAF0] text-right">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A192E]">
                        Benefit 0{index + 1}
                      </span>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Inspirational Banner Callout */}
          <FadeUp delay={0.2} yOffset={20}>
            <div className="bg-[#4A1525] text-white p-8 sm:p-10 border border-[#D81B60] shadow-xl text-center space-y-4 max-w-4xl mx-auto">
              <blockquote className="text-lg sm:text-xl font-serif italic text-[#F8EAF0] max-w-2xl mx-auto leading-relaxed">
                "{CORE_PHILOSOPHY.slogan}"
              </blockquote>
              <p className="text-xs sm:text-sm text-[#F3D5E2]/80 max-w-xl mx-auto">
                {CORE_PHILOSOPHY.quoteUppercase}
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D81B60] hover:bg-[#E91E63] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow"
                >
                  <span>Connect with Judith & Our Sisters</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};
