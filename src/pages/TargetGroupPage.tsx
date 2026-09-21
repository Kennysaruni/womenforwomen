import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { TARGET_GROUP_DATA } from '../data/content';
import { FadeUp, StaggerContainer, StaggerItem, HoverLift } from '../components/MotionReveal';
import { HeroBackgroundCarousel } from '../components/HeroBackgroundCarousel';

export const TargetGroupPage: React.FC = () => {
  const [selectedBenefitId, setSelectedBenefitId] = useState(TARGET_GROUP_DATA.benefitsShowcase[0].id);
  const selectedBenefit = TARGET_GROUP_DATA.benefitsShowcase.find((b) => b.id === selectedBenefitId)!;

  return (
    <div className="space-y-0 overflow-hidden">
      {/* 1. Header Banner */}
      <section className="bg-[#4A1525] text-white py-16 sm:py-20 border-b border-[#5A192E] relative overflow-hidden">
        <HeroBackgroundCarousel />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <FadeUp yOffset={16}>
            <div className="eyebrow-accent-dark">
              <span>Who We Serve & Community Impact</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} yOffset={20}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Target Group & Member Benefits
            </h1>
          </FadeUp>
          <FadeUp delay={0.2} yOffset={20}>
            <p className="text-base sm:text-lg text-[#F8EAF0] max-w-2xl font-light">
              Women FE Woman is built for every woman seeking to reclaim her voice, build economic security, and connect with a compassionate sisterhood.
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
                <span>Demographic Focus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                Who Belongs at Women FE Woman?
              </h2>
              <p className="text-sm sm:text-base text-[#575757]">
                Our doors are unconditional. We primarily serve women facing systemic hurdles, social isolation, economic hardship, or life transitions across the Greater Toronto Area and beyond.
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
                          Cohort 0{idx + 1}
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
                        Core Focus:
                      </span>
                      {demo.needs.map((n, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#404040]">
                          <span className="w-1 h-1 rounded-full bg-[#D81B60]" />
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

      {/* 3. "What's In It For Me?" (Interactive Benefit Showcase) */}
      <section className="py-16 sm:py-24 bg-[#FAF4F7] border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp yOffset={20}>
            <div className="max-w-3xl text-left space-y-3">
              <div className="eyebrow-accent">
                <span>Personal Transformation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                "What’s In It For Me?"
              </h2>
              <p className="text-sm sm:text-base text-[#575757]">
                Discover the tangible and emotional returns of becoming part of our community. Select an area of transformation below:
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector List */}
            <div className="lg:col-span-4 space-y-2">
              {TARGET_GROUP_DATA.benefitsShowcase.map((benefit) => {
                const isSelected = benefit.id === selectedBenefitId;
                return (
                  <motion.button
                    key={benefit.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedBenefitId(benefit.id)}
                    className={`w-full text-left p-4 border transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#4A1525] text-white border-[#D81B60] shadow-md'
                        : 'bg-white text-[#1F1F1F] border-[#E7BDD1] hover:bg-[#FDF4F8]'
                    }`}
                  >
                    <span className={`text-[10px] uppercase font-mono tracking-widest block mb-1 ${
                      isSelected ? 'text-[#E91E63]' : 'text-[#D81B60]'
                    }`}>
                      {benefit.category}
                    </span>
                    <h4 className="text-sm font-serif font-bold leading-tight">
                      {benefit.title}
                    </h4>
                  </motion.button>
                );
              })}
            </div>

            {/* Right Interactive Detail Pane */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedBenefit.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="bg-white border border-[#E7BDD1] p-8 sm:p-10 text-left space-y-6 shadow-sm"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#D81B60] font-bold">
                      {selectedBenefit.category} • The Experience
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A1525]">
                      {selectedBenefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#404040] leading-relaxed">
                      {selectedBenefit.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F3D5E2] space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5A192E]">
                      Tangible Program Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedBenefit.highlights.map((hl, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-[#FAF4F7] border border-[#E7BDD1] flex items-start gap-2.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#1F1F1F] leading-snug">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#F8EAF0] flex items-center justify-between">
                    <span className="text-xs text-[#575757]">
                      Ready to experience this community?
                    </span>
                    <Link
                      to="/contact"
                      className="px-6 py-2.5 bg-[#4A1525] hover:bg-[#D81B60] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Connect with Us
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Support & Assistance Matrix */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp yOffset={20}>
            <div className="max-w-3xl text-left space-y-3">
              <div className="eyebrow-accent">
                <span>Direct Solutions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                Support & Assistance Matrix
              </h2>
              <p className="text-sm sm:text-base text-[#575757]">
                A direct correlation between the systemic challenges our members face and the practical relief we coordinate.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} yOffset={20}>
            <div className="overflow-x-auto border border-[#E7BDD1]">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#4A1525] text-white font-serif uppercase tracking-wider text-xs">
                    <th className="p-4 border-r border-[#5A192E]">Support Area</th>
                    <th className="p-4 border-r border-[#5A192E]">What We Provide</th>
                    <th className="p-4">Primary Beneficiaries</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7BDD1]">
                  {TARGET_GROUP_DATA.matrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF4F7] transition-colors">
                      <td className="p-4 font-semibold text-[#4A1525] border-r border-[#E7BDD1] whitespace-nowrap">
                        {row.area}
                      </td>
                      <td className="p-4 text-[#404040] border-r border-[#E7BDD1]">
                        {row.whatWeProvide}
                      </td>
                      <td className="p-4 text-[#575757]">
                        {row.whoBenefits}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 5. Opportunities & Impact Checklist */}
      <section className="py-16 sm:py-24 bg-[#FAF4F7] border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp yOffset={20}>
            <div className="max-w-3xl text-left space-y-3">
              <div className="eyebrow-accent">
                <span>Tangible Takeaways</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                Opportunities & Impact Checklist
              </h2>
              <p className="text-sm sm:text-base text-[#575757]">
                Every sister who commits to our community gatherings develops lifelong, compounding competencies:
              </p>
            </div>
          </FadeUp>

          <StaggerContainer staggerChildren={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_GROUP_DATA.checklist.map((item, index) => (
              <StaggerItem key={index}>
                <div className="bg-white border border-[#E7BDD1] p-6 text-left flex items-start gap-3 hover:border-[#D81B60] transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#D81B60] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#1F1F1F] font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.2} yOffset={16}>
            <div className="pt-4 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4A1525] hover:bg-[#D81B60] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow"
              >
                <span>Connect with Our Community</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

