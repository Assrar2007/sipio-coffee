import React from 'react';
import { ArrowRight, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getAssetUrl } from '../../lib/utils';

export const Footer: React.FC = () => {
  const { setIsOpen } = useCart();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#D8781E] text-espresso-dark overflow-hidden pt-20 pb-12">
      {/* Background radial warmth & grain */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mocha/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Banner: Big Call to Action & 3-Drink Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-espresso-dark/15">
          {/* Left CTA Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-espresso/15 border border-espresso/25 backdrop-blur-sm">
              <Sparkles size={14} className="text-espresso-dark" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-espresso-dark">
                The SIPIO Experience Awaits
              </span>
            </div>

            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-espresso-dark">
              READY FOR YOUR <br className="hidden sm:block" />
              PERFECT CUP?
            </h2>

            <p className="font-manrope text-lg sm:text-xl text-espresso-dark/85 font-medium max-w-xl leading-relaxed">
              Freshly brewed, richly flavored, and crafted just for you.
              Step into our coffee sanctuary or have our beans delivered straight to your door.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => scrollToSection('menu')}
                className="inline-flex items-center space-x-3 bg-espresso text-cream hover:bg-espresso-dark font-manrope font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-2xl transition-all duration-300 active:scale-95 group"
              >
                <span>Order Now</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center space-x-2 bg-cream/30 hover:bg-cream/50 text-espresso-dark border border-espresso-dark/20 font-manrope font-semibold text-sm px-6 py-4 rounded-full transition-colors"
              >
                <span>Open Cart</span>
              </button>
            </div>
          </div>

          {/* Right: Three-drink composition photograph */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-espresso-dark/10 bg-mocha/20 group">
              <img
                src={getAssetUrl('/assets/10-three-drink-footer.webp')}
                alt="SIPIO Signature Three Drink Cold Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-40" />
              <div className="absolute bottom-4 left-4 right-4 bg-espresso/85 backdrop-blur-md text-cream p-3 rounded-2xl border border-cream/10 text-center">
                <span className="text-[11px] font-mono tracking-widest text-caramel uppercase">
                  Signature Trio Collection
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Footer: Links, Brand, Socials */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full border-2 border-espresso-dark flex items-center justify-center transform -rotate-12">
                <div className="w-4 h-0.5 bg-espresso-dark rounded-full transform rotate-45" />
              </div>
              <span className="font-bebas text-3xl tracking-[0.25em] text-espresso-dark">
                SIPIO
              </span>
            </div>
            <p className="font-inter text-sm text-espresso-dark/80 max-w-sm leading-relaxed">
              Curating sensory coffee moments through single-origin sourcing, meticulous micro-roasting,
              and cinematic cold brew extraction.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#hero"
                className="w-9 h-9 rounded-full bg-espresso-dark/10 hover:bg-espresso-dark hover:text-white flex items-center justify-center text-espresso-dark transition-colors"
                aria-label="Instagram (demo)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#hero"
                className="w-9 h-9 rounded-full bg-espresso-dark/10 hover:bg-espresso-dark hover:text-white flex items-center justify-center text-espresso-dark transition-colors"
                aria-label="Twitter X (demo)"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>
              </a>
              <a
                href="#hero"
                className="w-9 h-9 rounded-full bg-espresso-dark/10 hover:bg-espresso-dark hover:text-white flex items-center justify-center text-espresso-dark transition-colors"
                aria-label="Facebook (demo)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="#hero"
                className="w-9 h-9 rounded-full bg-espresso-dark/10 hover:bg-espresso-dark hover:text-white flex items-center justify-center text-espresso-dark transition-colors"
                aria-label="YouTube (demo)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-manrope font-extrabold text-sm uppercase tracking-wider text-espresso-dark">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-espresso-dark/80 font-medium">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                  About Sipio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="hover:text-white transition-colors">
                  Craft Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-sipio')} className="hover:text-white transition-colors">
                  Why Sipio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('brewing-story')} className="hover:text-white transition-colors">
                  Art of Brewing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">
                  Customer Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Sanctuary */}
          <div className="space-y-3">
            <h4 className="font-manrope font-extrabold text-sm uppercase tracking-wider text-espresso-dark">
              Café Sanctuary
            </h4>
            <div className="space-y-2 text-xs font-mono text-espresso-dark/80 leading-relaxed">
              <p className="font-bold text-espresso-dark">Monday – Friday</p>
              <p>07:00 AM – 08:00 PM</p>
              <p className="font-bold text-espresso-dark pt-1">Saturday – Sunday</p>
              <p>08:00 AM – 09:00 PM</p>
            </div>
          </div>

          {/* Col 4: Contact & Demo details */}
          <div className="space-y-3">
            <h4 className="font-manrope font-extrabold text-sm uppercase tracking-wider text-espresso-dark">
              Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-espresso-dark/80">
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="shrink-0" />
                <span>442 Artisan Way, Roast District (Demo)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="shrink-0" />
                <span>concierge@sipio-coffee.demo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="shrink-0" />
                <span>+1 (800) 555-SIPIO</span>
              </div>
              <p className="text-[10px] text-espresso-dark/70 font-mono italic pt-1">
                *Contact details are demonstrational placeholders.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-espresso-dark/15 flex flex-col sm:flex-row items-center justify-between text-xs text-espresso-dark/75 gap-4">
          <div>
            © {new Date().getFullYear()} SIPIO Specialty Coffee. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-[11px] font-mono">
            <span>Crafted for demonstration</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Ritual</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
