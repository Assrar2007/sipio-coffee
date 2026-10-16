import React, { useState } from 'react';
import { Plus, Check, Sparkles, Droplet, Info } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';

export const CoffeeMenu: React.FC = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'Complete Collection' },
    { id: 'iced', label: 'Iced Specialties' },
    { id: 'hot', label: 'Hot & Espresso' },
    { id: 'specialty', label: 'Blended & Craft' },
    { id: 'beans', label: 'Reserve Beans' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-28 md:py-36 bg-cream text-espresso relative overflow-hidden">
      {/* Subtle organic texture highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-beige/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-caramel/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 border border-coffee/10 text-caramel backdrop-blur-sm">
            <Sparkles size={14} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              The SIPIO Signature Bar
            </span>
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wide text-espresso">
            DISCOVER YOUR PERFECT CUP
          </h2>

          <p className="font-manrope text-base sm:text-lg text-coffee/80 max-w-xl mx-auto font-normal">
            Carefully extracted, precisely poured, and chilled to perfection.
            Crafted with our signature single-origin roast.
          </p>

          {/* Demonstration Notice Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-amber/15 border border-amber/30 text-mocha text-xs font-mono">
            <Info size={12} className="text-caramel" />
            <span>Demonstration Storefront • Sample items for portfolio presentation</span>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-manrope text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-espresso text-cream shadow-premium scale-105'
                  : 'bg-white/70 text-coffee/70 hover:bg-white hover:text-espresso border border-coffee/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product) => {
            const isJustAdded = !!addedIds[product.id];

            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl p-5 sm:p-6 shadow-premium hover:shadow-2xl transition-all duration-500 border border-coffee/5 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Image container with subtle zoom */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-cream/50 mb-6 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-espresso/80 backdrop-blur-md text-cream text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-cream/10">
                        {product.badge}
                      </div>
                    )}

                    {/* Volume tag */}
                    {product.volume && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-coffee font-mono text-[11px] font-medium px-2.5 py-0.5 rounded-md shadow-sm">
                        {product.volume}
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-espresso tracking-tight group-hover:text-caramel transition-colors">
                        {product.name}
                      </h3>
                      <span className="font-manrope font-extrabold text-xl text-caramel">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-sm text-coffee/75 font-normal leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {product.notes && (
                      <div className="pt-2 flex items-center space-x-1.5 text-[11px] text-coffee/60 font-mono">
                        <Droplet size={11} className="text-caramel shrink-0" />
                        <span className="truncate">{product.notes}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Add to Cart Action */}
                <div className="pt-6 mt-6 border-t border-coffee/10 flex items-center justify-between">
                  <div className="text-xs font-mono text-coffee/60">
                    Handcrafted to order
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-full font-manrope font-semibold text-xs tracking-wider transition-all duration-300 ${
                      isJustAdded
                        ? 'bg-emerald-600 text-white scale-95'
                        : 'bg-espresso text-cream hover:bg-caramel hover:text-white shadow-sm'
                    }`}
                    aria-label={`Add ${product.name} to order`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check size={14} />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <Plus size={14} />
                        <span>Add To Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
