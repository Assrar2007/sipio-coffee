import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-28 md:py-36 bg-beige text-espresso relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cream rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-caramel/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 border border-coffee/10 text-caramel backdrop-blur-sm">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Guest Impressions
            </span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wide text-espresso">
            WHAT OUR CUSTOMERS SAY
          </h2>

          <p className="font-manrope text-xs font-mono text-coffee/60 uppercase tracking-wider">
            Illustrative customer experiences • Curated for demonstration
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border border-coffee/5">
          {/* Subtle quote icon watermarked */}
          <div className="absolute top-8 right-8 text-cream/70 pointer-events-none">
            <Quote size={80} className="rotate-180 transform opacity-40 text-beige" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Customer Avatar & Drink Tag */}
            <div className="flex flex-col items-center shrink-0 space-y-3">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-cream shadow-md">
                <img
                  src={activeReview.avatar}
                  alt={activeReview.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <span className="inline-block text-[11px] font-mono uppercase tracking-wider bg-cream text-coffee px-3 py-1 rounded-full border border-coffee/10">
                  {activeReview.favoriteDrink}
                </span>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              {/* Star Rating */}
              <div className="flex items-center justify-center md:justify-start space-x-1.5 text-caramel">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
                <span className="text-xs font-bold text-coffee/70 ml-2">5.0 / 5.0</span>
              </div>

              {/* Quote */}
              <blockquote className="font-manrope text-xl sm:text-2xl md:text-3xl font-medium text-espresso leading-relaxed">
                "{activeReview.comment}"
              </blockquote>

              {/* Author info */}
              <div className="pt-2">
                <div className="font-manrope font-extrabold text-lg text-espresso">
                  {activeReview.name}
                </div>
                <div className="font-inter text-xs text-coffee/70 uppercase tracking-widest mt-0.5">
                  {activeReview.role}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Footer */}
          <div className="mt-12 pt-8 border-t border-coffee/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-caramel' : 'w-2.5 bg-coffee/20 hover:bg-coffee/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-coffee/20 bg-cream/50 flex items-center justify-center text-espresso hover:bg-espresso hover:text-cream transition-all duration-200 active:scale-95"
                aria-label="Previous review"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-coffee/20 bg-cream/50 flex items-center justify-center text-espresso hover:bg-espresso hover:text-cream transition-all duration-200 active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
