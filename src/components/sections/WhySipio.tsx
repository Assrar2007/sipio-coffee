import React from 'react';
import { Sparkles, Compass, CheckCircle2, Globe, Coffee, Flame } from 'lucide-react';
import { getAssetUrl } from '../../lib/utils';

export const WhySipio: React.FC = () => {
  const leftBenefits = [
    {
      title: 'Artisan Precision',
      desc: 'Perfect blend of quality, taste, and care in every pour.',
      icon: Sparkles,
    },
    {
      title: 'Trusted Micro-Lots',
      desc: 'Premium beans sourced from trusted, high-altitude family farms.',
      icon: Compass,
    },
    {
      title: 'Consistent Signature Roast',
      desc: 'Consistent taste profile you can always rely on day after day.',
      icon: CheckCircle2,
    },
  ];

  const rightBenefits = [
    {
      title: 'Ethical Direct Trade',
      desc: 'Ethically sourced ingredients ensuring fair compensation for growers.',
      icon: Globe,
    },
    {
      title: 'Atmospheric Sanctuaries',
      desc: 'Cozy spaces thoughtfully designed for unhurried relaxation.',
      icon: Coffee,
    },
    {
      title: 'Balanced Velvet Finish',
      desc: 'Rich flavor with a smooth, balanced, never-bitter finish.',
      icon: Flame,
    },
  ];

  return (
    <section id="why-sipio" className="py-28 md:py-36 bg-white text-espresso relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cream/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cream border border-caramel/20 text-caramel">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              The SIPIO Standard
            </span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wide text-espresso">
            WHAT MAKES SIPIO TRULY SPECIAL
          </h2>

          <p className="font-manrope text-base sm:text-lg text-coffee/80 max-w-2xl mx-auto font-normal leading-relaxed">
            "We go beyond the ordinary by combining high-quality beans, sustainable sourcing, and expert brewing techniques."
          </p>
        </div>

        {/* Central Composition: 3 benefits left, Image center, 3 benefits right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Benefits Column */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-12">
            {leftBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row lg:flex-col lg:items-end items-start text-left lg:text-right space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-0 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cream border border-caramel/20 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300 shadow-sm shrink-0 lg:order-2 lg:ml-4">
                    <Icon size={22} />
                  </div>
                  <div className="lg:order-1">
                    <h3 className="font-manrope font-bold text-lg text-espresso group-hover:text-caramel transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm text-coffee/75 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Featured Coffee Image */}
          <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream group">
              <img
                src={getAssetUrl('/assets/01-hero-iced-caramel-coffee.webp')}
                alt="Featured SIPIO Caramel Iced Coffee"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent pointer-events-none" />

              {/* Center Floating Pill */}
              <div className="absolute bottom-6 left-6 right-6 text-center text-white p-4 rounded-2xl bg-espresso/75 backdrop-blur-md border border-cream/10">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-caramel">
                  Masterpiece of the Day
                </span>
                <div className="font-bebas text-2xl tracking-wider text-cream mt-0.5">
                  Artisan Caramel Cold Pour
                </div>
              </div>
            </div>
          </div>

          {/* Right Benefits Column */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-12">
            {rightBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start text-left space-y-3 sm:space-y-0 sm:space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cream border border-caramel/20 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-lg text-espresso group-hover:text-caramel transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm text-coffee/75 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
