import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, Heart } from 'lucide-react';
import { FACILITATOR_INFO, CORE_PHILOSOPHY, SERVICES_DATA } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2A0915] to-[#1B050D] text-[#F3D5E2] border-t border-[#D81B60]/25 pt-10 pb-8 sm:pt-16 sm:pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-2.5 sm:space-y-4">
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block">
                Women <span className="text-[#D81B60]">FE</span> Woman
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#F8EAF0]/70 font-sans block mt-0.5">
                Founded by Judith Kerr
              </span>
            </div>
            <p className="text-xs text-[#F3D5E2]/80 leading-relaxed max-w-sm">
              Empowering women and marginalized communities to recognize self-worth through collective energy, equity, and sustainable self-reliance.
            </p>
            <div className="hidden sm:block pt-1">
              <blockquote className="border-l-2 border-[#D81B60] pl-3 italic text-xs text-[#F8EAF0]">
                "{CORE_PHILOSOPHY.quote}"
              </blockquote>
            </div>
          </div>

          {/* On mobile, combine Navigation & Services into a sleek 2-column grid */}
          <div className="grid grid-cols-2 gap-4 md:contents">
            {/* Quick Links */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-1.5 sm:pb-2">
                Navigation
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-xs">
                <li>
                  <Link to="/" className="text-[#F3D5E2]/80 hover:text-white transition-colors block py-0.5">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[#F3D5E2]/80 hover:text-white transition-colors block py-0.5">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[#F3D5E2]/80 hover:text-white transition-colors block py-0.5">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link to="/target-group" className="text-[#F3D5E2]/80 hover:text-white transition-colors block py-0.5">
                    Target Group
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#F3D5E2]/80 hover:text-white transition-colors block py-0.5">
                    Contact & Join
                  </Link>
                </li>
              </ul>
            </div>

            {/* Dedicated Services */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-1.5 sm:pb-2">
                Core Services
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-xs">
                {SERVICES_DATA.map((srv) => (
                  <li key={srv.id}>
                    <Link
                      to={`/services/${srv.slug}`}
                      className="text-[#F3D5E2]/80 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                    >
                      <span className="line-clamp-1">{srv.navTitle || srv.title}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#D81B60] transition-opacity shrink-0 ml-1 hidden sm:block" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Facilitator & Contact */}
          <div className="space-y-2.5 sm:space-y-3 bg-white/[0.02] md:bg-transparent border border-white/10 md:border-none p-3.5 sm:p-0 rounded-sm">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-1.5 sm:pb-2">
              Facilitator Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="text-white font-medium">
                {FACILITATOR_INFO.name}
                <span className="block text-[11px] font-normal text-[#F3D5E2]/75">
                  {FACILITATOR_INFO.title}
                </span>
              </div>
              <div className="space-y-1.5 pt-0.5">
                <a
                  href={`tel:${FACILITATOR_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-[#F3D5E2]/90 hover:text-white transition-colors group"
                >
                  <div className="w-5 h-5 rounded bg-[#D81B60]/20 flex items-center justify-center text-[#D81B60] shrink-0 group-hover:bg-[#D81B60] group-hover:text-white transition-colors">
                    <Phone className="w-2.5 h-2.5" />
                  </div>
                  <span className="underline decoration-[#D81B60]/60 underline-offset-2">{FACILITATOR_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${FACILITATOR_INFO.email}`}
                  className="flex items-center gap-2 text-[#F3D5E2]/90 hover:text-white transition-colors group break-all"
                >
                  <div className="w-5 h-5 rounded bg-[#D81B60]/20 flex items-center justify-center text-[#D81B60] shrink-0 group-hover:bg-[#D81B60] group-hover:text-white transition-colors">
                    <Mail className="w-2.5 h-2.5" />
                  </div>
                  <span className="underline decoration-[#D81B60]/60 underline-offset-2">{FACILITATOR_INFO.email}</span>
                </a>
                <div className="flex items-center gap-2 text-[#F3D5E2]/75 text-[11px] pt-0.5">
                  <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-[#D81B60] shrink-0">
                    <MapPin className="w-2.5 h-2.5" />
                  </div>
                  <span>{FACILITATOR_INFO.location}</span>
                </div>
              </div>
              <div className="pt-1.5">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-[#4A1525] border border-[#D81B60]/60 hover:bg-[#D81B60] text-white text-[11px] font-semibold uppercase tracking-wider transition-all rounded-sm shadow-sm"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#F3D5E2]/60">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Women FE Woman. Founded by Judith Kerr.
          </p>
          <div className="flex items-center gap-1.5 text-center">
            <span>Built with collective strength & care</span>
            <Heart className="w-3 h-3 text-[#D81B60] fill-[#D81B60]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
