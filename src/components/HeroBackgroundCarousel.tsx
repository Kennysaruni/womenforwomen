import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const CAROUSEL_IMAGES = [
  '/carousel/9cc7d6_25d74fcecbf562beae580501edee61f8.avif',
  '/carousel/9cc7d6_ec3e584c1c209b4f838b8599ed8ed1c3.avif',
  '/carousel/9cc7d6_dde8bfd59e3002c958eec6c6fde91087.avif',
  '/carousel/9cc7d6_f20ec4530e9bc08dfce42131567d13b5.avif',
  '/carousel/9cc7d6_60738e17ccbb28f8860556b9ce71d262.avif',
  '/carousel/9cc7d6_43ddba5d35c52c45ea353917bbf40767.avif',
  '/carousel/9cc7d6_23e1f095aeb704675346f6c452680b78.avif',
];

interface HeroBackgroundCarouselProps {
  interval?: number;
  className?: string;
}

export const HeroBackgroundCarousel: React.FC<HeroBackgroundCarouselProps> = ({
  interval = 5500,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Animated Image Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={CAROUSEL_IMAGES[currentIndex]}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Atmospheric Brand Gradient Overlay for Flawless Typography Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2E0B16]/92 via-[#4A1525]/85 to-[#380E1B]/90" />
      <div className="absolute inset-0 bg-[#4A1525]/35" />

      {/* Subtle bottom vignette to blend seamlessly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#2E0B16]/60 to-transparent" />

      {/* Subtle Slide Indicator Dots */}
      <div className="absolute bottom-4 right-6 sm:right-8 z-10 flex items-center gap-1.5">
        {CAROUSEL_IMAGES.map((_, idx) => (
          <span
            key={idx}
            className={`transition-all duration-500 rounded-full h-1.5 ${
              idx === currentIndex
                ? 'w-6 bg-[#D81B60]'
                : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
