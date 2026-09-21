import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Target,
  CheckCircle2,
  ArrowRight,
  Layers,
} from 'lucide-react';
import {
  ABOUT_CONTENT,
  ORGANIZATIONAL_GOALS,
  FACILITATOR_INFO,
} from '../data/content';
import { FadeUp, StaggerContainer, StaggerItem, ScaleReveal, HoverLift } from '../components/MotionReveal';
import { HeroBackgroundCarousel } from '../components/HeroBackgroundCarousel';

export const AboutPage: React.FC = () => {
  const [activeGoalIndex, setActiveGoalIndex] = useState(0);
  const activeGoal = ORGANIZATIONAL_GOALS[activeGoalIndex];

  return (
    <div className="space-y-0 overflow-hidden">
      {/* 1. Page Banner */}
      <section className="bg-[#4A1525] text-white py-16 sm:py-20 border-b border-[#5A192E] relative overflow-hidden">
        <HeroBackgroundCarousel />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <FadeUp yOffset={16}>
            <div className="eyebrow-accent-dark">
              <span>About Women FE Woman</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} yOffset={20}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Elevating Women Through Collective Energy
            </h1>
          </FadeUp>
          <FadeUp delay={0.2} yOffset={20}>
            <p className="text-base sm:text-lg text-[#F8EAF0] max-w-2xl font-light">
              Rooted in the proven principle that together, our combined strength multiplies beyond any individual challenge.
            </p>
          </FadeUp>
        </div>
      </section>


      {/* 2. Mission & Vision Statement */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <FadeUp yOffset={20}>
                <div className="eyebrow-accent">
                  <span>Core Foundation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                  {ABOUT_CONTENT.missionVision.headline}
                </h2>
              </FadeUp>

              <FadeUp delay={0.1} yOffset={20}>
                <blockquote className="p-6 bg-[#FAF4F7] border-l-4 border-[#D81B60] text-lg sm:text-xl font-serif text-[#5A192E] italic leading-relaxed">
                  "{ABOUT_CONTENT.missionVision.quote}"
                </blockquote>
              </FadeUp>

              <FadeUp delay={0.2} yOffset={20}>
                <div className="space-y-4 text-sm sm:text-base text-[#404040] leading-relaxed">
                  {ABOUT_CONTENT.missionVision.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <ScaleReveal delay={0.2}>
                <div className="border-2 border-[#D81B60]/30 p-2 bg-[#F8EAF0] shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80"
                    alt="Supportive community circle of women"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-4 bg-white border-t border-[#E7BDD1] text-left">
                    <span className="text-xs uppercase tracking-wider text-[#D81B60] font-semibold block">
                      Our Philosophy
                    </span>
                    <p className="text-sm font-serif text-[#4A1525] mt-0.5">
                      "Together Each Achieve More (T.E.A.M.)"
                    </p>
                  </div>
                </div>
              </ScaleReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Purpose & Mandate Side-by-Side Comparison */}
      <section className="py-16 sm:py-20 bg-[#FAF4F7] border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp yOffset={20}>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="eyebrow-accent-center">
                <span>Guiding Framework</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                Purpose & Mandate
              </h2>
              <p className="text-sm sm:text-base text-[#575757]">
                Two complementary directives that keep our programs focused on long-term systemic impact and immediate personal relief.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Purpose */}
            <StaggerItem className="h-full">
              <HoverLift yOffset={-6} className="h-full">
                <div className="bg-white border border-[#E7BDD1] p-8 text-left space-y-6 shadow-sm hover:border-[#D81B60] transition-colors h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#D81B60]">
                        <Target className="w-5 h-5" />
                        <span className="text-xs font-mono font-bold uppercase tracking-widest">Directive 01</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#4A1525]">
                        {ABOUT_CONTENT.purposeAndMandate.purpose.title}
                      </h3>
                      <p className="text-sm text-[#404040] leading-relaxed">
                        {ABOUT_CONTENT.purposeAndMandate.purpose.content}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#F3D5E2] space-y-2.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#5A192E] block">
                        Key Focus Areas
                      </span>
                      {ABOUT_CONTENT.purposeAndMandate.purpose.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#575757]">
                          <CheckCircle2 className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverLift>
            </StaggerItem>

            {/* Mandate */}
            <StaggerItem className="h-full">
              <HoverLift yOffset={-6} className="h-full">
                <div className="bg-white border border-[#E7BDD1] p-8 text-left space-y-6 shadow-sm hover:border-[#D81B60] transition-colors h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#D81B60]">
                        <Layers className="w-5 h-5" />
                        <span className="text-xs font-mono font-bold uppercase tracking-widest">Directive 02</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#4A1525]">
                        {ABOUT_CONTENT.purposeAndMandate.mandate.title}
                      </h3>
                      <p className="text-sm text-[#404040] leading-relaxed">
                        {ABOUT_CONTENT.purposeAndMandate.mandate.content}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#F3D5E2] space-y-2.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#5A192E] block">
                        Operational Commitments
                      </span>
                      {ABOUT_CONTENT.purposeAndMandate.mandate.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#575757]">
                          <CheckCircle2 className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverLift>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Organizational Goals (Interactive Tabbed Showcase) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp yOffset={20}>
            <div className="text-left max-w-3xl space-y-3">
              <div className="eyebrow-accent">
                <span>Five Core Commitments</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                Organizational Goals
              </h2>
              <p className="text-sm sm:text-base text-[#575757]">
                Explore how Women FE Woman translates community vision into concrete, multi-phased initiatives. Select any goal to review its strategy and operational execution.
              </p>
            </div>
          </FadeUp>

          {/* Tab Selection Bar */}
          <div className="flex flex-wrap gap-2 border-b border-[#E7BDD1] pb-2">
            {ORGANIZATIONAL_GOALS.map((goal, index) => {
              const isActive = index === activeGoalIndex;
              return (
                <motion.button
                  key={goal.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveGoalIndex(index)}
                  className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-[#4A1525] text-white border-b-2 border-[#D81B60]'
                      : 'bg-[#FAF4F7] text-[#5A192E] hover:bg-[#F3D5E2] border border-[#E7BDD1]'
                  }`}
                >
                  <span className="mr-1.5 opacity-60">0{index + 1}.</span>
                  {goal.tabLabel}
                </motion.button>
              );
            })}
          </div>

          {/* Active Goal Display Card with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGoal.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-[#FAF4F7] border border-[#E7BDD1] p-8 sm:p-12 text-left space-y-8 shadow-sm"
            >
              <div className="space-y-3 max-w-3xl">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D81B60]">
                  Goal 0{activeGoalIndex + 1} of 05 • Strategic Objective
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A1525]">
                  {activeGoal.title}
                </h3>
                <p className="text-sm sm:text-base text-[#404040] leading-relaxed">
                  {activeGoal.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-[#E7BDD1]">
                {/* Action items */}
                <div className="lg:col-span-8 space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5A192E]">
                    Concrete Actions & Programs
                  </h4>
                  <div className="space-y-3">
                    {activeGoal.actions.map((act, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 border border-[#E7BDD1] flex items-start gap-3 hover:border-[#D81B60] transition-colors"
                      >
                        <span className="text-xs font-mono font-bold text-[#D81B60] shrink-0 mt-0.5">
                          {idx + 1}.
                        </span>
                        <p className="text-xs sm:text-sm text-[#1F1F1F] leading-snug">{act}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vision side-panel */}
                <div className="lg:col-span-4 bg-white p-6 border border-[#E7BDD1] flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#D81B60] font-semibold block">
                      Enduring Vision
                    </span>
                    <p className="text-sm font-serif text-[#4A1525] italic leading-relaxed">
                      "{activeGoal.vision}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#F8EAF0]">
                    <Link
                      to="/contact"
                      className="block text-center w-full py-2.5 bg-[#4A1525] hover:bg-[#D81B60] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Support This Goal
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Judith Kerr Leadership Profile */}
      <section className="py-16 sm:py-24 bg-[#FAF4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E7BDD1] overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Photo */}
              <div className="lg:col-span-5 relative flex items-center justify-center bg-[#380E1B] p-6 sm:p-8">
                <ScaleReveal delay={0.15} className="w-full max-w-sm">
                  <div className="relative w-full aspect-square overflow-hidden border border-[#D81B60]/40 shadow-xl">
                    <img
                      src={FACILITATOR_INFO.image}
                      alt={FACILITATOR_INFO.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </ScaleReveal>
              </div>

              {/* Right Profile */}
              <div className="lg:col-span-7 p-8 sm:p-12 text-left space-y-6 flex flex-col justify-between">
                <FadeUp yOffset={20}>
                  <div className="space-y-4">
                    <div className="eyebrow-accent">
                      <span>Leadership & Facilitation</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A1525]">
                      {FACILITATOR_INFO.name}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#D81B60] font-semibold">
                      {FACILITATOR_INFO.title}
                    </p>

                    <p className="text-sm sm:text-base text-[#404040] leading-relaxed">
                      {FACILITATOR_INFO.bio}
                    </p>

                    <div className="pt-2 border-t border-[#F3D5E2] space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 text-[#575757]">
                        <span className="font-semibold text-[#5A192E]">Direct Line:</span>
                        <a
                          href={`tel:${FACILITATOR_INFO.phoneRaw}`}
                          className="text-[#D81B60] font-medium underline"
                        >
                          {FACILITATOR_INFO.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-[#575757]">
                        <span className="font-semibold text-[#5A192E]">Alumni Email:</span>
                        <a
                          href={`mailto:${FACILITATOR_INFO.email}`}
                          className="text-[#D81B60] font-medium underline"
                        >
                          {FACILITATOR_INFO.email}
                        </a>
                      </div>
                      <div className="text-xs text-[#575757]">
                        <span className="font-semibold text-[#5A192E]">Community Hub:</span>{' '}
                        {FACILITATOR_INFO.location}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#F8EAF0] flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-[#4A1525] hover:bg-[#D81B60] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                    >
                      <span>Connect with Judith</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/services"
                      className="px-6 py-3 border border-[#4A1525] text-[#4A1525] hover:bg-[#FAF4F7] text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Explore Our Programs
                    </Link>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

