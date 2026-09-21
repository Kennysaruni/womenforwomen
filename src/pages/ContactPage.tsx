import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import { FACILITATOR_INFO, SERVICES_DATA, FAQ_ITEMS } from '../data/content';
import { FadeUp, ScaleReveal, HoverLift } from '../components/MotionReveal';
import { HeroBackgroundCarousel } from '../components/HeroBackgroundCarousel';


export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: initialService,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#D81B60', '#5A192E', '#F3D5E2', '#E91E63'],
        });
      } catch {
        // Fallback
      }
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <div className="space-y-0 overflow-hidden">
      {/* 1. Header Banner */}
      <section className="bg-[#4A1525] text-white py-16 sm:py-20 border-b border-[#5A192E] relative overflow-hidden">
        <HeroBackgroundCarousel />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <FadeUp yOffset={16}>
            <div className="eyebrow-accent-dark">
              <span>Direct Intake & Community Inquiries</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} yOffset={20}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Contact & Community Intake
            </h1>
          </FadeUp>
          <FadeUp delay={0.2} yOffset={20}>
            <p className="text-base sm:text-lg text-[#F8EAF0] max-w-2xl font-light">
              Reach out to request confidential program support, explore community resources, or speak directly with founder Judith Kerr.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. Main Intake & Contact Info Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#F3D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Intake Form */}
            <div className="lg:col-span-7">
              <FadeUp yOffset={20}>
                <div className="bg-[#FAF4F7] border border-[#E7BDD1] p-6 sm:p-10 text-left shadow-sm">
                  <div className="space-y-2 mb-6">
                    <div className="eyebrow-accent">
                      <span>Community & Program Intake</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A1525]">
                      Get Connected with Women FE Woman
                    </h2>
                    <p className="text-xs sm:text-sm text-[#575757]">
                      All inquiries and participant records are held in strict non-profit confidentiality.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-10 space-y-4 bg-white border border-[#E7BDD1] p-8 animate-fade-in">
                      <div className="w-16 h-16 mx-auto rounded-full bg-[#F8EAF0] border border-[#D81B60] flex items-center justify-center text-[#D81B60]">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#4A1525]">
                        Intake Request Received!
                      </h3>
                      <p className="text-sm text-[#404040] max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{formData.fullName}</strong>. Your message has been routed directly to facilitator <strong>{FACILITATOR_INFO.name}</strong>.
                      </p>
                      <p className="text-xs text-[#575757]">
                        A copy and follow-up instructions have been dispatched to <strong>{formData.email}</strong>.
                      </p>

                      <div className="pt-4">
                        <button
                          onClick={handleReset}
                          className="px-6 py-2.5 bg-[#4A1525] hover:bg-[#D81B60] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#5A192E] tracking-wider uppercase mb-1.5">
                          Full Name <span className="text-[#D81B60]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g., Jennifer Campbell"
                          className="w-full px-4 py-2.5 bg-white border border-[#E7BDD1] text-[#1F1F1F] text-sm focus:border-[#D81B60] focus:ring-1 focus:ring-[#D81B60] transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#5A192E] tracking-wider uppercase mb-1.5">
                            Email Address <span className="text-[#D81B60]">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="jennifer@example.com"
                            className="w-full px-4 py-2.5 bg-white border border-[#E7BDD1] text-[#1F1F1F] text-sm focus:border-[#D81B60] focus:ring-1 focus:ring-[#D81B60] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#5A192E] tracking-wider uppercase mb-1.5">
                            Phone Number <span className="text-[#D81B60]">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(416) 555-0199"
                            className="w-full px-4 py-2.5 bg-white border border-[#E7BDD1] text-[#1F1F1F] text-sm focus:border-[#D81B60] focus:ring-1 focus:ring-[#D81B60] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#5A192E] tracking-wider uppercase mb-1.5">
                          Service / Topic of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-[#E7BDD1] text-[#1F1F1F] text-sm focus:border-[#D81B60] focus:ring-1 focus:ring-[#D81B60] transition-colors"
                        >
                          <option value="">General Support / Meeting Participation</option>
                          {SERVICES_DATA.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#5A192E] tracking-wider uppercase mb-1.5">
                          Message / How Can We Support You? <span className="text-[#D81B60]">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please let us know how we can best assist you, any specific challenges you're facing, or questions you have about our programs..."
                          className="w-full px-4 py-2.5 bg-white border border-[#E7BDD1] text-[#1F1F1F] text-sm focus:border-[#D81B60] focus:ring-1 focus:ring-[#D81B60] transition-colors"
                        />
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-[11px] text-[#575757]">
                          Free community services • No obligations
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="px-8 py-3.5 bg-[#D81B60] hover:bg-[#E91E63] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>{isSubmitting ? 'Submitting...' : 'Send Message'}</span>
                        </motion.button>
                      </div>
                    </form>
                  )}
                </div>
              </FadeUp>
            </div>

            {/* Right: Facilitator & Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* Facilitator Card */}
              <ScaleReveal delay={0.15}>
                <div className="bg-[#4A1525] text-white p-8 border border-[#D81B60]/40 shadow-xl space-y-6">
                  <div className="space-y-2">
                    <div className="eyebrow-accent-dark">
                      <span>Direct Facilitation</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Judith Kerr
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#E91E63] font-semibold">
                      Group Facilitator & Founder
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#F8EAF0] leading-relaxed">
                    Judith coordinates group meetings, intake assessments, and institutional casework directly with women across the Greater Toronto Area.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm">
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#E91E63] shrink-0" />
                      <div>
                        <span className="text-[11px] text-[#F3D5E2]/70 block">Direct Telephone</span>
                        <a
                          href={`tel:${FACILITATOR_INFO.phoneRaw}`}
                          className="text-white hover:text-[#E91E63] font-medium underline underline-offset-4 decoration-[#D81B60]"
                        >
                          {FACILITATOR_INFO.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#E91E63] shrink-0" />
                      <div>
                        <span className="text-[11px] text-[#F3D5E2]/70 block">Alumni University Email</span>
                        <a
                          href={`mailto:${FACILITATOR_INFO.email}`}
                          className="text-white hover:text-[#E91E63] font-medium underline underline-offset-4 decoration-[#D81B60] break-all"
                        >
                          {FACILITATOR_INFO.email}
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#E91E63] shrink-0 mt-1" />
                      <div>
                        <span className="text-[11px] text-[#F3D5E2]/70 block">Regional Hub</span>
                        <span className="text-[#F8EAF0] font-medium">
                          {FACILITATOR_INFO.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleReveal>

              {/* Confidentiality & Safe Harbor Card */}
              <FadeUp delay={0.25}>
                <HoverLift yOffset={-4}>
                  <div className="bg-[#FAF4F7] border border-[#E7BDD1] p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[#D81B60]">
                      <ShieldCheck className="w-5 h-5" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        Confidentiality & Care Guarantee
                      </span>
                    </div>
                    <h4 className="text-base font-serif font-bold text-[#4A1525]">
                      Your Safe Harbor
                    </h4>
                    <p className="text-xs text-[#575757] leading-relaxed">
                      Every intake request, referral, and conversation is held in the strictest confidence. We provide a non-judgmental environment where your dignity and autonomy are always respected.
                    </p>
                  </div>
                </HoverLift>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions Accordion */}
      <section className="py-16 sm:py-24 bg-[#FAF4F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          <FadeUp yOffset={20}>
            <div className="space-y-2 text-center">
              <div className="eyebrow-accent-center">
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1525] font-semibold">
                Meeting & Support Guidance
              </h2>
            </div>
          </FadeUp>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E7BDD1] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF4F7] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-serif font-bold text-[#4A1525]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D81B60] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#575757] leading-relaxed border-t border-[#F8EAF0]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

