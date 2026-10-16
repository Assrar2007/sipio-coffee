import React, { useState } from 'react';
import { ArrowRight, Sparkles, Coffee, Award, Compass, X } from 'lucide-react';
import { getAssetUrl } from '../../lib/utils';

export const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToStory = () => {
    const el = document.getElementById('brewing-story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-28 md:py-36 bg-white text-espresso overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-beige/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cream/70 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Subtle pill tag */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cream border border-caramel/20 text-caramel">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Our Guiding Philosophy
            </span>
          </div>
        </div>

        {/* Large Editorial Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-manrope text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-espresso">
            AT SIPIO, WE BELIEVE COFFEE IS{' '}
            <span className="text-caramel underline decoration-caramel/30 decoration-wavy decoration-2">
              MORE THAN JUST A DRINK.
            </span>
          </h2>

          <p className="font-manrope text-xl sm:text-2xl md:text-3xl text-coffee/80 font-normal leading-relaxed max-w-3xl mx-auto">
            It's a <span className="text-caramel font-semibold">daily ritual</span>, a moment of{' '}
            <span className="text-caramel font-semibold">comfort</span>, and an endless source of{' '}
            <span className="text-caramel font-semibold">inspiration</span>.
          </p>
        </div>

        {/* Editorial 2-column detail grid with coffee photography */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column: Image with caption */}
          <div className="md:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-cream aspect-[4/5] border border-coffee/5">
              <img
                src={getAssetUrl('/assets/08-latte-art-cup.webp')}
                alt="SIPIO Velvet Latte Art Cup"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-mono tracking-widest text-caramel bg-espresso/80 px-2.5 py-1 rounded-md">
                  Artisan Microfoam
                </span>
                <p className="text-sm font-manrope font-semibold mt-2">
                  Handcrafted rosetta poured by master baristas every morning.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center space-x-3 bg-espresso text-cream p-4 rounded-2xl shadow-premium border border-cream/10">
              <div className="w-10 h-10 rounded-xl bg-caramel/20 flex items-center justify-center text-caramel">
                <Coffee size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase font-mono tracking-wider text-caramel">Heritage</div>
                <div className="text-sm font-bold text-white">Est. 2024</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial story & Call to action */}
          <div className="md:col-span-7 space-y-6 md:pl-6 text-left">
            <div className="space-y-4 text-coffee/85 text-base sm:text-lg font-normal leading-relaxed">
              <p>
                Founded on the principle that exceptional coffee requires uncompromising patience,
                SIPIO partners exclusively with family-owned micro-lots in high-altitude volcanic regions.
                Every harvest is curated for bean density, natural sugar content, and terroir clarity.
              </p>
              <p>
                We roast gently in small batches to preserve vibrant fruit aromatics and delicate floral
                undertones, never scorching the bean. The result is a cup of quiet sophistication—rich,
                balanced, and memorable to the last sip.
              </p>
            </div>

            {/* Feature mini list */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-coffee/10">
              <div className="flex items-start space-x-3">
                <Award className="text-caramel shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-sm text-espresso">Specialty Grade 88+</h4>
                  <p className="text-xs text-coffee/70">Top 1% of global harvests evaluated.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Compass className="text-caramel shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-sm text-espresso">Direct-Trade Ethics</h4>
                  <p className="text-xs text-coffee/70">Fair premiums paid directly to growers.</p>
                </div>
              </div>
            </div>

            {/* Action button */}
            <div className="pt-6 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-espresso text-cream hover:bg-caramel hover:text-white transition-all duration-300 font-manrope font-semibold text-sm shadow-premium group"
              >
                <span>More About Us</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToStory}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-coffee/20 text-espresso hover:border-caramel hover:text-caramel transition-colors font-manrope font-medium text-sm"
              >
                <span>Explore The Art of Brewing</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Heritage Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-espresso/80 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          />
          <div className="relative bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl z-10 border border-coffee/10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-cream transition-colors text-espresso"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="inline-flex items-center space-x-2 text-caramel text-xs uppercase font-mono tracking-widest mb-3">
              <Sparkles size={14} />
              <span>SIPIO Brand Chronicle</span>
            </div>

            <h3 className="font-bebas text-4xl text-espresso tracking-wide">
              The SIPIO Philosophy
            </h3>

            <div className="mt-6 space-y-4 text-coffee/80 leading-relaxed text-sm sm:text-base">
              <p>
                SIPIO was born from an obsession with the subtle transitions in flavor that occur when specialty
                espresso slowly cools over hand-carved ice. Most commercial coffee relies on dark roasting to mask
                flaws, leading to bitter astringency.
              </p>
              <p>
                Our signature profile is deliberately balanced: medium roast curves that unlock natural honey,
                apricot, and roasted hazelnut notes without requiring heavy artificial syrups.
              </p>
              <p>
                Whether you visit our calm café spaces or prepare our reserve beans in your kitchen,
                every touchpoint is crafted to invite presence, clarity, and genuine pleasure.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-coffee/10 flex justify-between items-center">
              <span className="text-xs text-coffee/60 font-mono">SIPIO Specialty Roastery</span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 bg-caramel text-white rounded-full font-manrope font-semibold text-xs uppercase tracking-wider hover:bg-caramel-hover transition-colors"
              >
                Return To Website
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
