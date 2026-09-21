import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', isDropdown: true },
    { name: 'Target Group & Benefits', path: '/target-group' },
    { name: 'Contact & Join', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#4A1525]/95 backdrop-blur-md py-3 shadow-md border-b border-[#D81B60]/20'
          : 'bg-[#4A1525] py-4 border-b border-[#5A192E]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Highlighted "FE" */}
        <Link
          to="/"
          className="group flex items-center gap-2 focus:outline-none"
          aria-label="Women FE Woman - Home"
        >
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#F8EAF0] transition-colors">
              Women <span className="text-[#D81B60] group-hover:text-[#E91E63] transition-colors">FE</span> Woman
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#F3D5E2]/80 font-sans">
              Founded by Judith Kerr
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                      isActive('/services')
                        ? 'text-white border-b-2 border-[#D81B60]'
                        : 'text-[#F3D5E2] hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#D81B60]' : ''}`} />
                  </Link>

                  {/* Dropdown Menu - Clean, reduced wording */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-0 w-64 pt-2 z-50"
                      >
                        <div className="bg-[#380E1B] border border-[#D81B60]/40 shadow-2xl p-1.5 text-left">
                          <Link
                            to="/services"
                            className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#D81B60] hover:bg-white/5 transition-colors border-b border-white/10"
                          >
                            All Services
                          </Link>
                          <div className="py-1 space-y-0.5">
                            {SERVICES_DATA.map((srv) => (
                              <Link
                                key={srv.id}
                                to={`/services/${srv.slug}`}
                                className="block px-3 py-2 text-xs font-medium text-[#F3D5E2] hover:text-white hover:bg-white/10 transition-colors"
                              >
                                {srv.navTitle || srv.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isActive(link.path)
                    ? 'text-white border-b-2 border-[#D81B60]'
                    : 'text-[#F3D5E2] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#D81B60] hover:bg-[#E91E63] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow hover:shadow-md cursor-pointer"
          >
            <span>Get in Touch</span>
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F3D5E2] hover:text-white focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden bg-[#380E1B] border-b border-[#D81B60]/30"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.path}
                      className={`block px-3 py-2 text-sm font-semibold uppercase tracking-wider ${
                        isActive(link.path) ? 'text-[#D81B60] bg-white/5' : 'text-[#F3D5E2]'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.isDropdown && (
                      <div className="pl-6 space-y-1 mt-1 border-l border-[#D81B60]/30 ml-4">
                        {SERVICES_DATA.map((srv) => (
                          <Link
                            key={srv.id}
                            to={`/services/${srv.slug}`}
                            className="block py-1.5 text-xs text-[#F3D5E2]/80 hover:text-white"
                          >
                            {srv.navTitle || srv.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="pt-3 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#D81B60] text-white text-xs font-semibold uppercase tracking-wider shadow cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

