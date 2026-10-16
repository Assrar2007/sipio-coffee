import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalItems, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Why Sipio', href: '#why-sipio' },
    { name: 'Brewing Art', href: '#brewing-story' },
    { name: 'Reviews', href: '#reviews' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-espresso/90 backdrop-blur-md border-b border-cream/10 py-3 shadow-premium'
            : 'bg-gradient-to-b from-espresso/80 via-espresso/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.slice(0, 4).map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-cream/75 hover:text-caramel transition-colors duration-300 relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-caramel transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-cream hover:text-caramel transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Center: SIPIO Logo */}
            <div className="flex items-center justify-center">
              <a
                href="#hero"
                className="group flex items-center space-x-2.5 focus:outline-none"
                aria-label="SIPIO Coffee Homepage"
              >
                {/* Minimalist Coffee Bean Symbol */}
                <div className="relative w-7 h-7 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-2 border-caramel/90 flex items-center justify-center transform -rotate-12 transition-transform duration-500 group-hover:rotate-45 group-hover:border-caramel">
                    <div className="w-3 h-0.5 bg-caramel rounded-full transform rotate-45" />
                  </div>
                  <Sparkles size={10} className="absolute -top-1 -right-1 text-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="font-bebas text-2xl sm:text-3xl tracking-[0.25em] text-white group-hover:text-caramel transition-colors duration-300">
                  SIPIO
                </span>
              </a>
            </div>

            {/* Right: Reviews link, Shopping Cart & Order Now Button */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button
                onClick={() => handleLinkClick('#reviews')}
                className="hidden xl:inline-block text-xs uppercase tracking-[0.2em] font-medium text-cream/75 hover:text-caramel transition-colors duration-300 relative group py-1"
              >
                Reviews
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-caramel transition-all duration-300 group-hover:w-full" />
              </button>

              {/* Shopping Bag Button */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative p-2 text-cream hover:text-caramel transition-colors duration-200"
                aria-label={`Shopping Cart (${totalItems} items)`}
              >
                <ShoppingBag size={21} className="transition-transform group-hover:scale-110" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-caramel text-white font-manrope text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-caramel-glow animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Order Now CTA */}
              <button
                onClick={() => handleLinkClick('#menu')}
                className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-caramel to-amber text-espresso-dark font-manrope font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full shadow-caramel-glow hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                <span>Order Now</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-espresso/90 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 bottom-0 w-4/5 max-w-sm bg-espresso border-r border-cream/10 p-6 pt-24 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-caramel font-semibold">
              Explore Sipio
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left font-bebas text-2xl tracking-widest text-cream hover:text-caramel transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-cream/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsOpen(true);
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-mocha text-cream rounded-xl text-sm font-medium hover:bg-caramel hover:text-white transition-colors"
            >
              <ShoppingBag size={18} />
              <span>View Cart ({totalItems})</span>
            </button>
            <button
              onClick={() => handleLinkClick('#menu')}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-caramel to-amber text-espresso-dark font-bold rounded-xl text-sm shadow-caramel-glow"
            >
              <span>Explore Coffee Menu</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
