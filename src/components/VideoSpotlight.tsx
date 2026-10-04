import React, { useState } from 'react';
import { Play, Sparkles, Heart, Users, MapPin } from 'lucide-react';
import { FadeUp, HoverLift } from './MotionReveal';

interface VideoSpotlightProps {
  className?: string;
  id?: string;
}

export const VideoSpotlight: React.FC<VideoSpotlightProps> = ({
  className = '',
  id = 'community-video',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoIframeUrl =
    'https://player.vimeo.com/video/1232537598?title=0&byline=0&portrait=0&badge=0&autopause=0&color=d81b60&autoplay=1';

  return (
    <section id={id} className={`py-16 sm:py-24 bg-[#230711] text-white relative overflow-hidden ${className}`}>
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D81B60]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#4A1525]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Narrative Column */}
          <div className="lg:col-span-5 space-y-6 text-left">

            <FadeUp delay={0.1} yOffset={20}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                “We WFW Believe”
              </h2>
            </FadeUp>

            <FadeUp delay={0.2} yOffset={20}>
              <p className="text-sm sm:text-base text-[#F3D5E2]/85 leading-relaxed font-light">
                Witness our collective journey in action—from grassroots hospital relief and borehole clean water projects to vibrant community hall assemblies and women’s empowerment circles in Uganda, Kenya, and the Greater Toronto Area.
              </p>
            </FadeUp>

            {/* Quick Impact Tags */}
            <FadeUp delay={0.3} yOffset={20}>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm">
                  <div className="flex items-center gap-1.5 text-[#D81B60] text-xs font-semibold uppercase tracking-wider mb-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>Global Outreach</span>
                  </div>
                  <span className="text-xs text-[#F8EAF0]/90">
                    Tororo, Kapenguria & Toronto
                  </span>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-sm">
                  <div className="flex items-center gap-1.5 text-[#D81B60] text-xs font-semibold uppercase tracking-wider mb-1">
                    <Heart className="w-3.5 h-3.5" />
                    <span>Core Purpose</span>
                  </div>
                  <span className="text-xs text-[#F8EAF0]/90">
                    Dignity, Health & Uplift
                  </span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.4} yOffset={16}>
              <blockquote className="border-l-2 border-[#D81B60] pl-4 text-xs italic text-[#F8EAF0]/80">
                “There is more than sufficient for everyone and if we assist others to realize their dreams and successes it naturally flows back to us.”
              </blockquote>
            </FadeUp>
          </div>

          {/* Video Player Column */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.15} yOffset={24}>
              <div className="relative rounded-lg overflow-hidden border border-[#D81B60]/40 shadow-2xl bg-black aspect-video group">
                {isPlaying ? (
                  <iframe
                    src={videoIframeUrl}
                    title="Women FE Woman Community Presentation - We WFW Believe"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full border-0 absolute inset-0"
                    allowFullScreen
                  />
                ) : (
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setIsPlaying(true);
                      }
                    }}
                    aria-label="Play Women FE Woman Community Video"
                  >
                    {/* Thumbnail Image */}
                    <img
                      src="/images/community/vimeo-thumbnail.jpg"
                      alt="Women FE Woman video presentation thumbnail"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 group-hover:via-black/20 transition-colors" />

                    {/* Top Pill */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-[#D81B60]/40 text-[#F8EAF0] text-[11px] font-mono uppercase tracking-wider font-semibold rounded-full flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#D81B60] animate-ping" />
                        <span>Watch Presentation</span>
                      </span>
                      <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-[#F8EAF0] text-[11px] font-mono font-medium rounded-full">
                        0:53
                      </span>
                    </div>

                    {/* Pulsating Play Button */}
                    <HoverLift yOffset={-4}>
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-20 h-20 rounded-full bg-[#D81B60]/30 animate-ping pointer-events-none" />
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D81B60] hover:bg-[#E91E63] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                        </div>
                      </div>
                    </HoverLift>

                    {/* Bottom Title Bar */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                      <div>
                        <p className="text-white font-serif font-bold text-sm sm:text-base drop-shadow">
                          We WFW Believe — Sisterhood in Motion
                        </p>
                        <p className="text-xs text-[#F8EAF0]/80 flex items-center gap-1 drop-shadow">
                          <MapPin className="w-3 h-3 text-[#D81B60]" />
                          <span>Tororo, Uganda • Kapenguria, Kenya • Toronto, Canada</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
};
