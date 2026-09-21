import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Clock, MapPin, Mail } from 'lucide-react';
import { UPCOMING_MEETING, FACILITATOR_INFO } from '../data/content';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeetingModal: React.FC<MeetingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    format: 'Hybrid / Either',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D81B60', '#5A192E', '#F3D5E2', '#E91E63'],
        });
      } catch {
        // Confetti fallback safely ignored
      }
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      format: 'Hybrid / Either',
      notes: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white border border-[#E7BDD1] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
          >

        {/* Header Ribbon */}
        <div className="bg-[#4A1525] text-white px-6 py-5 flex items-start justify-between border-b border-[#D81B60]/30">
          <div>
            <div className="eyebrow-accent-dark mb-2">
              <span>{UPCOMING_MEETING.monthTag}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-serif text-white font-medium">
              RSVP for Upcoming June Group Meeting
            </h2>
            <p className="text-xs sm:text-sm text-[#F3D5E2] mt-1">
              Facilitated by {FACILITATOR_INFO.name} • Scarborough Community Hub & Zoom
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#F3D5E2] hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-[#1F1F1F]">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#F8EAF0] border border-[#D81B60] flex items-center justify-center text-[#D81B60]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-[#4A1525] font-semibold">
                Your Seat is Reserved!
              </h3>
              <p className="text-sm text-[#404040] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. A confirmation email and the secure Zoom / venue access instructions have been sent to <strong>{formData.email}</strong>.
              </p>

              <div className="p-4 bg-[#F8EAF0] border border-[#F3D5E2] text-left text-xs sm:text-sm space-y-2 max-w-lg mx-auto">
                <div className="flex items-center gap-2 text-[#5A192E] font-medium">
                  <Clock className="w-4 h-4 text-[#D81B60]" />
                  <span>{UPCOMING_MEETING.dateString} • {UPCOMING_MEETING.timeString}</span>
                </div>
                <div className="flex items-center gap-2 text-[#5A192E]">
                  <MapPin className="w-4 h-4 text-[#D81B60]" />
                  <span>{UPCOMING_MEETING.format}</span>
                </div>
                <div className="pt-2 border-t border-[#E7BDD1] text-[#575757]">
                  Questions prior to the meeting? Contact Judith Kerr directly at{' '}
                  <a href={`tel:${FACILITATOR_INFO.phoneRaw}`} className="text-[#D81B60] underline font-medium">
                    {FACILITATOR_INFO.phone}
                  </a>{' '}
                  or{' '}
                  <a href={`mailto:${FACILITATOR_INFO.email}`} className="text-[#D81B60] underline font-medium">
                    {FACILITATOR_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#4A1525] hover:bg-[#5A192E] text-white text-sm font-medium tracking-wide transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Meeting Quick Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-[#FAF4F7] border border-[#F3D5E2] text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#4A1525] block">Time & Date</span>
                    <span className="text-[#575757]">{UPCOMING_MEETING.dateString}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#4A1525] block">Location</span>
                    <span className="text-[#575757]">{UPCOMING_MEETING.format}</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5A192E] tracking-wider uppercase mb-1">
                    Full Name <span className="text-[#D81B60]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Sarah Johnson"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E7BDD1] text-[#1F1F1F] text-sm focus:border-[#D81B60] focus:ring-1 focus:ring-[#D81B60] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5A192E] tracking-wider uppercase mb-1">
                      Email Address <span className="text-[#D81B60]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E7BDD1] text-[#1F1F1F] text-sm focus:border-[#D81B60] focus:ring-1 focus:ring-[#D81B60] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5A192E] tracking-wider uppercase mb-1">
                      Phone Number <span className="text-[#D81B60]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(416) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E7BDD1] text-[#1F1F1F] text-sm focus:border-[#D81B60] focus:ring-1 focus:ring-[#D81B60] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5A192E] tracking-wider uppercase mb-1">
                    Attendance Preference
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E7BDD1] text-[#1F1F1F] text-sm focus:border-[#D81B60] focus:ring-1 focus:ring-[#D81B60] transition-colors"
                  >
                    <option value="Hybrid / Either">Hybrid / Either (Send me both In-Person & Zoom)</option>
                    <option value="In-Person Scarborough Hub">In-Person (Scarborough Community Hub)</option>
                    <option value="Virtual Zoom Access">Virtual Zoom Access Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5A192E] tracking-wider uppercase mb-1">
                    What topic or support are you most interested in?
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g., Financial literacy, job search coaching, meeting other women in the community..."
                    className="w-full px-3.5 py-2 bg-white border border-[#E7BDD1] text-[#1F1F1F] text-sm focus:border-[#D81B60] focus:ring-1 focus:ring-[#D81B60] transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#F3D5E2]">
                  <div className="text-xs text-[#575757] flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D81B60]" />
                    <span>Free attendance • No membership fee</span>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 sm:flex-initial px-4 py-2.5 border border-[#E7BDD1] text-[#5A192E] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF4F7] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#D81B60] hover:bg-[#E91E63] text-white text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Confirming...' : 'Confirm RSVP'}
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
};

