import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { FadeUp, StaggerContainer, StaggerItem, HoverLift } from '../components/MotionReveal';
import { HeroBackgroundCarousel } from '../components/HeroBackgroundCarousel';

export const ServicesIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.offerings.some((o) => o.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-0 overflow-hidden">
      {/* 1. Header Banner */}
      <section className="bg-[#4A1525] text-white py-16 sm:py-20 border-b border-[#5A192E] relative overflow-hidden">
        <HeroBackgroundCarousel />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <FadeUp yOffset={16}>
            <div className="eyebrow-accent-dark">
              <span>Direct Community Impact</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} yOffset={20}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Programs & Dedicated Services
            </h1>
          </FadeUp>
          <FadeUp delay={0.2} yOffset={20}>
            <p className="text-base sm:text-lg text-[#F8EAF0] max-w-2xl font-light">
              To provide services, supports, and direction to women to meet their goals, desires, dreams and purposes in life. We aim to empower women to recognize their own self-worth, through self-knowledge both individually and collectively.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. Search & Catalog Intro */}
      <section className="py-12 bg-white border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp yOffset={16}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <span className="text-xs uppercase tracking-widest text-[#D81B60] font-semibold block">
                  Four Pillars of Direct Support
                </span>
                <p className="text-sm text-[#575757]">
                  Click any service below to access its dedicated page, offering breakdown, and intake details.
                </p>
              </div>

              {/* Quick Search */}
              <div className="w-full sm:w-80 relative">
                <input
                  type="text"
                  placeholder="Search services or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-[#FAF4F7] border border-[#E7BDD1] text-xs text-[#1F1F1F] focus:border-[#D81B60] focus:ring-1 focus:ring-[#D81B60] transition-colors"
                />
                <Search className="w-4 h-4 text-[#8E2B4B] absolute left-3 top-3" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 3. Detailed Services Grid */}
      <section className="py-16 sm:py-24 bg-[#FAF4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <StaggerItem key={service.id} className="h-full">
                <HoverLift yOffset={-6} className="h-full">
                  <div className="bg-white border border-[#E7BDD1] overflow-hidden flex flex-col justify-between hover:border-[#D81B60] hover:shadow-lg transition-all duration-300 h-full">
                    {/* Photo & Number Tag */}
                    <div className="relative h-64 overflow-hidden group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E0B16]/85 via-[#2E0B16]/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="eyebrow-accent-dark bg-[#380E1B]/90 px-2.5 py-1">
                          <span>Program 0{index + 1}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 sm:p-8 space-y-6 text-left flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <p className="text-sm text-[#404040] leading-relaxed">
                          {service.shortDescription}
                        </p>

                        {/* Key offerings preview */}
                        <div className="space-y-2 pt-2 border-t border-[#F8EAF0]">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#5A192E] block">
                            What We Provide:
                          </span>
                          {service.offerings.slice(0, 3).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#575757]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D81B60] shrink-0 mt-0.5" />
                              <span className="line-clamp-2">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="pt-6 border-t border-[#F3D5E2] flex flex-wrap items-center justify-between gap-3">
                        <Link
                          to={`/services/${service.slug}`}
                          className="text-xs font-semibold uppercase tracking-wider text-[#4A1525] hover:text-[#D81B60] inline-flex items-center gap-1.5"
                        >
                          <span>Full Program Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <Link
                          to={`/contact?service=${service.slug}`}
                          className="px-4 py-2 bg-[#D81B60] hover:bg-[#E91E63] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow"
                        >
                          Access This Service
                        </Link>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredServices.length === 0 && (
            <div className="text-center py-12 bg-white border border-[#E7BDD1] p-8">
              <p className="text-base text-[#575757]">
                No services matched your search term "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#D81B60] underline cursor-pointer"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

