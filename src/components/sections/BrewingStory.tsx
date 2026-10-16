import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { getAssetUrl } from '../../lib/utils';

export const BrewingStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'High-Altitude Sourcing',
      statement: 'Every bean tells a story.',
      desc: 'Grown at 1,950+ meters in volcanic soil. The cool nights slow cherry maturation, concentrating dense natural sugars and intricate floral aromatics.',
      image: getAssetUrl('/assets/09-roasted-coffee-beans.webp'),
      detailTag: 'Single Origin Lots',
    },
    {
      number: '02',
      title: 'Precision Micro-Roast',
      statement: 'Crafted with precision.',
      desc: 'Computer-monitored thermodynamic curves roast in micro 5kg drums to develop rich cacao and caramelization without harsh carbon notes.',
      image: getAssetUrl('/assets/story-barista.png'),
      detailTag: 'Artisan Drum Roast',
    },
    {
      number: '03',
      title: '9-Bar Golden Crema Extraction',
      statement: 'Made for the moments that matter.',
      desc: 'Extracted with temperature-stable saturated group heads at 9 bars of pressure. 27 seconds of pure transformation yielding velvety texture.',
      image: getAssetUrl('/assets/07-espresso-shot.webp'),
      detailTag: 'Micro Extraction',
    },
    {
      number: '04',
      title: 'The Signature Cold Pour',
      statement: 'Chilled to absolute perfection.',
      desc: 'Slowly layered over hand-crafted crystal clear ice cubes with organic vanilla bean foam and velvet cold brew for an unforgettable sensory ritual.',
      image: getAssetUrl('/assets/story-brewing.png'),
      detailTag: 'Signature Pour',
    },
  ];

  return (
    <section id="brewing-story" className="py-28 md:py-36 bg-espresso text-cream relative overflow-hidden">
      {/* Background radial warmth */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-mocha/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-caramel/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mocha/60 border border-cream/10 text-caramel backdrop-blur-sm">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              The Artisan Process
            </span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wide text-white">
            DISCOVER THE ART OF PERFECT BREWING
          </h2>

          <p className="font-manrope text-base sm:text-lg text-cream/70 max-w-xl mx-auto font-light">
            Every step is deliberate. From volcanic heights to your glass, experience our uncompromising brewing ceremony.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-espresso-dark/80 border border-cream/10 backdrop-blur-md overflow-x-auto max-w-full">
            {steps.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2.5 rounded-xl font-manrope text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 whitespace-nowrap ${
                  activeStep === idx
                    ? 'bg-caramel text-espresso-dark shadow-caramel-glow'
                    : 'text-cream/60 hover:text-cream hover:bg-white/5'
                }`}
              >
                <span className="font-mono text-xs opacity-75">{step.number}</span>
                <span>{step.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-espresso-light/40 border border-cream/10 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-sm">
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center space-x-3">
              <span className="font-bebas text-5xl sm:text-6xl text-caramel font-bold">
                {steps[activeStep].number}
              </span>
              <div className="h-8 w-[1px] bg-cream/20" />
              <span className="text-xs font-mono uppercase tracking-widest text-cream/60 bg-white/5 px-3 py-1 rounded-full border border-cream/10">
                {steps[activeStep].detailTag}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-manrope font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                {steps[activeStep].title}
              </h3>
              <p className="font-manrope text-lg sm:text-xl text-amber font-medium italic">
                "{steps[activeStep].statement}"
              </p>
            </div>

            <p className="font-inter text-cream/75 text-base sm:text-lg leading-relaxed">
              {steps[activeStep].desc}
            </p>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-cream/10">
              <div className="flex items-center space-x-2 text-xs font-mono text-cream/80">
                <Check size={14} className="text-caramel" />
                <span>Zero artificial additives</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-cream/80">
                <Check size={14} className="text-caramel" />
                <span>Small batch roasting</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-cream/80">
                <Check size={14} className="text-caramel" />
                <span>Barista certified pour</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-cream/80">
                <Check size={14} className="text-caramel" />
                <span>Freshness guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right: Rich Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-cream/15 group">
              <img
                key={steps[activeStep].image}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-cream/80 bg-espresso/70 backdrop-blur-md px-4 py-2 rounded-xl border border-cream/10">
                <span>Phase {steps[activeStep].number} of 04</span>
                <span className="text-caramel font-semibold">SIPIO Atelier</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
