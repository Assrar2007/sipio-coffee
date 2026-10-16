import React, { useRef, useState } from 'react';
import { ArrowRight, Sparkles, Droplets } from 'lucide-react';
import { CoffeeScrollSequence } from '../animation/CoffeeScrollSequence';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrameNum, setCurrentFrameNum] = useState(1);

  const handleProgressChange = (progress: number, frame: number) => {
    setScrollProgress(progress);
    setCurrentFrameNum(frame);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full bg-espresso"
      style={{ height: '320vh' }}
    >
      {/* Sticky Fullscreen Container - Pins for 320vh while sequence plays */}
      <div
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          zIndex: 10,
        }}
      >
        {/* Layer 0: Fullscreen Canvas Coffee Animation */}
        <div className="absolute inset-0 z-0">
          <CoffeeScrollSequence
            containerRef={containerRef}
            onProgressChange={handleProgressChange}
          />
        </div>

        {/* Soft Radial Vignette: clear in center so coffee is fully visible, dark on edges for text legibility */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(23, 16, 8, 0.05) 0%, rgba(23, 16, 8, 0.35) 65%, rgba(23, 16, 8, 0.8) 100%)',
          }}
        />

        {/* Top Spacer & Frame Counter */}
        <div className="relative z-20 pt-24 px-6 md:px-12 flex justify-between items-center pointer-events-none">
          <div className="hidden md:flex items-center space-x-2 text-[11px] font-mono tracking-widest text-cream/70 uppercase bg-espresso/70 px-3 py-1.5 rounded-full border border-cream/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-caramel animate-ping" />
            <span>Interactive Pour</span>
            <span className="text-caramel font-bold ml-1">
              {String(currentFrameNum).padStart(3, '0')} / 300
            </span>
          </div>

          <div className="text-[11px] font-mono tracking-widest text-caramel uppercase bg-espresso/70 px-3 py-1.5 rounded-full border border-caramel/30 backdrop-blur-md">
            <span>Scroll Controlled</span>
          </div>
        </div>

        {/* Center: Main Editorial Headline */}
        <div className="relative z-20 flex-1 flex flex-col justify-center items-center px-4 sm:px-6 pointer-events-none text-center select-none">
          <div className="space-y-0 transform -translate-y-2 md:-translate-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-caramel/20 border border-caramel/40 backdrop-blur-md mb-3 sm:mb-5">
              <Sparkles size={12} className="text-caramel" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-caramel">
                Specialty Cold Pour Experience
              </span>
            </div>

            <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[12rem] leading-[0.85] tracking-normal text-white text-shadow-hero font-normal">
              <span className="block drop-shadow-2xl">LIFE BEGINS</span>
              <span className="block text-cream/95 drop-shadow-2xl">
                AFTER COFFEE
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom Bar: Left Badge + Right Statement & CTA */}
        <div className="relative z-20 pb-8 sm:pb-12 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side: 100% Organic & Details */}
          <div className="flex items-center space-x-4 bg-espresso/80 backdrop-blur-md border border-cream/15 px-4 py-3 rounded-2xl max-w-xs sm:max-w-sm pointer-events-auto shadow-2xl">
            <div className="w-10 h-10 rounded-xl bg-caramel/20 border border-caramel/40 flex items-center justify-center text-caramel shrink-0">
              <Droplets size={20} />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-caramel">
                100% Organic Sourcing
              </div>
              <div className="text-[12px] text-cream/75 leading-snug">
                Single-origin beans roasted in micro-batches for peak flavor.
              </div>
            </div>
          </div>

          {/* Center: Scroll down indicator */}
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-1.5 text-cream/70 hover:text-caramel transition-colors pointer-events-auto group cursor-pointer"
            aria-label="Scroll down to learn more"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium font-mono text-cream/60 group-hover:text-caramel">
              Scroll To Pour
            </span>
            <div className="w-6 h-10 rounded-full border border-cream/30 flex items-start justify-center p-1.5 group-hover:border-caramel/80 transition-colors">
              <div
                className="w-1.5 h-2.5 bg-caramel rounded-full transition-transform duration-100"
                style={{
                  transform: `translateY(${Math.min(16, scrollProgress * 16)}px)`,
                }}
              />
            </div>
          </button>

          {/* Right Side: Brand Statement & Orange Order Now CTA */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-md pointer-events-auto space-y-3.5">
            <p className="text-xs sm:text-sm text-cream/90 font-light leading-relaxed text-shadow-sm">
              "Experience the perfect balance of rich aroma, smooth taste, and handcrafted quality in every single cup."
            </p>
            <div className="flex items-center space-x-3">
              <button
                onClick={scrollToMenu}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-caramel via-amber to-caramel text-espresso-dark font-manrope font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-caramel-glow hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                <span>Order Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Scroll Progress Bar at very bottom of sticky viewport */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-espresso-dark/80 z-30">
          <div
            className="h-full bg-gradient-to-r from-mocha via-caramel to-amber transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};
