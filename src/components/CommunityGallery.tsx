import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { COMMUNITY_GALLERY } from '../data/content';
import { FadeUp, StaggerContainer, StaggerItem, HoverLift } from './MotionReveal';
import type { CommunityGalleryItem } from '../types';

interface CommunityGalleryProps {
  showTitle?: boolean;
  maxItems?: number;
  initialCategory?: string;
  className?: string;
}

export const CommunityGallery: React.FC<CommunityGalleryProps> = ({
  showTitle = true,
  maxItems,
  initialCategory = 'All',
  className = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [activeItem, setActiveItem] = useState<CommunityGalleryItem | null>(null);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(COMMUNITY_GALLERY.map((item) => item.category)))];

  const filteredItems = COMMUNITY_GALLERY.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayItems = maxItems ? filteredItems.slice(0, maxItems) : filteredItems;

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') {
        setActiveItem(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, displayItems]);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = displayItems.findIndex((item) => item.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % displayItems.length;
    setActiveItem(displayItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = displayItems.findIndex((item) => item.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + displayItems.length) % displayItems.length;
    setActiveItem(displayItems[prevIndex]);
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {showTitle && (
        <FadeUp yOffset={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="max-w-3xl space-y-3">
              <div className="eyebrow-accent">
                <span>Our Community In Action</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A1525] font-semibold">
                Sisterhood, Solidarity & Global Outreach
              </h2>
              <p className="text-sm sm:text-base text-[#575757] leading-relaxed">
                Authentic moments of empowerment, workshops, and grassroots community outreach—from our Scarborough hub and Greater Toronto circles to our global connections in Kapenguria, Kenya.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${selectedCategory === cat
                    ? 'bg-[#4A1525] text-white shadow'
                    : 'bg-white text-[#5A192E] hover:bg-[#FAF4F7] border border-[#E7BDD1]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>
      )}

      {/* Gallery Grid */}
      <StaggerContainer
        staggerChildren={0.1}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {displayItems.map((item) => (
          <StaggerItem key={item.id} className="h-full">
            <HoverLift yOffset={-6} className="h-full">
              <div
                onClick={() => setActiveItem(item)}
                className="group relative bg-white border border-[#E7BDD1] overflow-hidden hover:border-[#D81B60] transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col h-full text-left"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#2E0B16]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E0B16]/85 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-[#4A1525]/90 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                    {item.location && (
                      <span className="px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[#4A1525] text-[10px] font-medium flex items-center gap-1 shadow-sm">
                        <MapPin className="w-3 h-3 text-[#D81B60]" />
                        <span>{item.location}</span>
                      </span>
                    )}
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#2E0B16]/30 backdrop-blur-[2px]">
                    <div className="px-4 py-2 bg-white text-[#4A1525] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-[#D81B60]" />
                      <span>View Full Image</span>
                    </div>
                  </div>
                </div>

                {/* Card Caption / Meta */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-serif font-bold text-[#4A1525] group-hover:text-[#D81B60] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#575757] leading-relaxed line-clamp-3">
                      {item.caption}
                    </p>
                  </div>

                  {item.location === 'Kapenguria, Kenya' && (
                    <div className="pt-2 border-t border-[#F8EAF0] flex items-center gap-1.5 text-[11px] font-medium text-[#D81B60]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D81B60] animate-pulse" />
                      <span>Grassroots Global Outreach with Judith Kerr</span>
                    </div>
                  )}
                </div>
              </div>
            </HoverLift>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white border border-[#E7BDD1] overflow-hidden shadow-2xl text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close image modal"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#D81B60] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Image Frame */}
              <div className="relative bg-[#1A060E] max-h-[65vh] flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                />

                {/* Left / Right Nav Buttons */}
                {displayItems.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      aria-label="Previous photo"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-[#D81B60] text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      aria-label="Next photo"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-[#D81B60] text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Details Footer */}
              <div className="p-6 bg-[#FAF4F7] border-t border-[#E7BDD1] space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-[#4A1525] text-white text-[10px] font-mono uppercase tracking-widest font-semibold">
                      {activeItem.category}
                    </span>
                    {activeItem.location && (
                      <span className="text-xs font-semibold text-[#5A192E] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D81B60]" />
                        <span>{activeItem.location}</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[#575757]">
                    Photo {displayItems.findIndex((i) => i.id === activeItem.id) + 1} of{' '}
                    {displayItems.length}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#4A1525]">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#404040] leading-relaxed">
                  {activeItem.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
