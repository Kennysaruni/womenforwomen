import React from 'react';
import { Phone, Mail, ArrowRight, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { UPCOMING_MEETING, FACILITATOR_INFO } from '../data/content';

interface MeetingCalloutProps {
  onOpenRSVP: () => void;
}

export const MeetingCallout: React.FC<MeetingCalloutProps> = ({ onOpenRSVP }) => {
  return (
    <section className="relative my-12 overflow-hidden border border-[#D81B60]/40 bg-gradient-to-br from-[#4A1525] via-[#5A192E] to-[#380E1B] text-white shadow-xl">
      {/* Subtle geometric background motif */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#D81B60]/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#F3D5E2]/10 blur-3xl pointer-events-none" />

      <div className="relative p-6 sm:p-10 lg:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Main Info */}
          <div className="max-w-2xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="eyebrow-accent-dark">
                <span>{UPCOMING_MEETING.monthTag}</span>
              </div>
              <span className="text-xs uppercase tracking-widest text-[#F3D5E2]/70 font-medium">
                • Community Assembly & Circle
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-white tracking-tight">
              {UPCOMING_MEETING.title}
            </h2>

            <p className="text-sm sm:text-base text-[#F8EAF0] leading-relaxed">
              Join us for an uplifting afternoon of sisterhood, collective problem-solving, and practical workshops. Whether you attend in person at our Scarborough hub or join virtually via Zoom, your presence enriches our circle.
            </p>

            {/* Facilitator & Contact inline strip */}
            <div className="pt-2 border-t border-[#D81B60]/30 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#F3D5E2]">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#E91E63]" />
                <span>
                  <strong className="text-white font-semibold">Facilitator:</strong> {FACILITATOR_INFO.name} ({FACILITATOR_INFO.title})
                </span>
              </div>
              <a
                href={`tel:${FACILITATOR_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 text-[#F8EAF0] hover:text-white transition-colors underline underline-offset-4 decoration-[#D81B60]"
              >
                <Phone className="w-3.5 h-3.5 text-[#E91E63]" />
                <span>{FACILITATOR_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${FACILITATOR_INFO.email}`}
                className="flex items-center gap-1.5 text-[#F8EAF0] hover:text-white transition-colors underline underline-offset-4 decoration-[#D81B60]"
              >
                <Mail className="w-3.5 h-3.5 text-[#E91E63]" />
                <span>{FACILITATOR_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Direct CTA Action */}
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenRSVP}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D81B60] hover:bg-[#E91E63] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-[#D81B60]/30 cursor-pointer"
            >
              <span>RSVP / Request Meeting Link</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <span className="text-center text-[11px] text-[#F3D5E2]/70 uppercase tracking-widest">
              Complimentary • Scarborough & Zoom
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
