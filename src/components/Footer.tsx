import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, Heart } from 'lucide-react';
import { FACILITATOR_INFO, CORE_PHILOSOPHY, SERVICES_DATA } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E0B16] text-[#F3D5E2] border-t border-[#D81B60]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                Women <span className="text-[#D81B60]">FE</span> Woman
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-[#F8EAF0]/70 font-sans block mt-1">
                Founded by Judith Kerr
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#F3D5E2]/80 leading-relaxed">
              Empowering women and marginalized communities to recognize self-worth through collective energy, equity, and sustainable self-reliance.
            </p>
            <div className="pt-2">
              <blockquote className="border-l-2 border-[#D81B60] pl-3 italic text-xs text-[#F8EAF0]">
                "{CORE_PHILOSOPHY.quote}"
              </blockquote>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us & Mission
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Programs & Core Services
                </Link>
              </li>
              <li>
                <Link to="/target-group" className="hover:text-white transition-colors">
                  Target Group & Benefits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Dedicated Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="line-clamp-1">{srv.navTitle || srv.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#D81B60] transition-opacity shrink-0 ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilitator & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Facilitator Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="text-white font-medium">
                {FACILITATOR_INFO.name}
                <span className="block text-xs font-normal text-[#F3D5E2]/80">
                  {FACILITATOR_INFO.title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D81B60] shrink-0" />
                <a
                  href={`tel:${FACILITATOR_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors underline decoration-[#D81B60]"
                >
                  {FACILITATOR_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D81B60] shrink-0" />
                <a
                  href={`mailto:${FACILITATOR_INFO.email}`}
                  className="hover:text-white transition-colors underline decoration-[#D81B60] break-all"
                >
                  {FACILITATOR_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-xs text-[#F3D5E2]/80">
                <MapPin className="w-4 h-4 text-[#D81B60] shrink-0 mt-0.5" />
                <span>{FACILITATOR_INFO.location}</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-[#4A1525] border border-[#D81B60]/60 hover:bg-[#5A192E] text-white text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3D5E2]/60">
          <p>
            © {new Date().getFullYear()} Women FE Woman. Founded by Judith Kerr. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>Built with collective strength & care</span>
            <Heart className="w-3.5 h-3.5 text-[#D81B60] fill-[#D81B60]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
