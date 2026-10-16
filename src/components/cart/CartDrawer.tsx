import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    totalItems,
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const freeDeliveryThreshold = 25.0;
  const progressToFreeDelivery = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);
  const amountToFree = Math.max(0, freeDeliveryThreshold - subtotal);

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutModalOpen(true);
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D8781E', '#E48A2A', '#FFF4E5', '#4A2815'],
        });
      } catch (e) {
        console.log(e);
      }
    }, 600);
  };

  const handleFinishOrder = () => {
    clearCart();
    setCheckoutModalOpen(false);
    setIsOpen(false);
  };

  const scrollToMenu = () => {
    setIsOpen(false);
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/80 backdrop-blur-md transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-espresso border-l border-cream/10 text-cream flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-cream/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-caramel/20 flex items-center justify-center text-caramel">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h3 className="font-bebas text-2xl tracking-wider text-white">Your Coffee Bag</h3>
                <p className="text-xs text-cream/60 font-mono">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-cream/70 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping / Perk Bar */}
          <div className="px-6 py-3 bg-mocha/40 border-b border-cream/5">
            <div className="flex justify-between items-center text-xs mb-1.5 font-mono">
              <span className="text-cream/80">
                {amountToFree === 0
                  ? '🎉 Complimentary Express Shipping unlocked!'
                  : `Add $${amountToFree.toFixed(2)} for Free Shipping`}
              </span>
              <span className="text-caramel font-bold">{Math.round(progressToFreeDelivery)}%</span>
            </div>
            <div className="h-1.5 w-full bg-espresso rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-caramel to-amber transition-all duration-300"
                style={{ width: `${progressToFreeDelivery}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-cream/40">
                  <ShoppingBag size={32} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bebas text-2xl tracking-wide text-cream">Your bag is empty</h4>
                  <p className="text-xs text-cream/60 max-w-xs leading-relaxed font-light">
                    Explore our single-origin roasts, cold brews, and handcrafted specialty iced coffees.
                  </p>
                </div>
                <button
                  onClick={scrollToMenu}
                  className="mt-4 px-6 py-3 rounded-full bg-caramel text-espresso-dark font-manrope font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-caramel-glow"
                >
                  Explore Coffee Menu
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex space-x-4 p-3.5 rounded-2xl bg-mocha/20 border border-cream/5 hover:border-cream/15 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-20 rounded-xl overflow-hidden bg-cream/10 shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-manrope font-bold text-sm text-white">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-cream/40 hover:text-rose-400 transition-colors p-1"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <div className="text-[11px] font-mono text-cream/60">
                        {item.product.volume || 'Standard'} • ${item.product.price.toFixed(2)}
                      </div>
                    </div>

                    {/* Quantity controls & item total */}
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center space-x-2 bg-espresso/80 border border-cream/10 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-cream/70 hover:text-white hover:bg-white/10 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-mono text-xs w-5 text-center font-bold text-cream">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-cream/70 hover:text-white hover:bg-white/10 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="font-manrope font-bold text-sm text-caramel">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-cream/10 bg-espresso-dark/60 space-y-4">
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between text-cream/70">
                  <span>Subtotal</span>
                  <span className="font-bold text-cream">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-cream/70">
                  <span>Estimated Tax</span>
                  <span className="font-bold text-cream">${(subtotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-cream/70">
                  <span>Courier Delivery</span>
                  <span className="text-caramel font-bold">
                    {amountToFree === 0 ? 'FREE' : '$4.50'}
                  </span>
                </div>
                <div className="pt-2 border-t border-cream/10 flex justify-between text-sm font-manrope font-extrabold text-white">
                  <span>Estimated Total</span>
                  <span className="text-caramel text-base">
                    ${(subtotal + subtotal * 0.08 + (amountToFree === 0 ? 0 : 4.5)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full py-3.5 bg-gradient-to-r from-caramel via-amber to-caramel text-espresso-dark font-manrope font-bold text-sm uppercase tracking-wider rounded-xl shadow-caramel-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <div className="w-5 h-5 border-2 border-espresso-dark border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Proceed To Demo Order</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <p className="text-[10px] text-center font-mono text-cream/40">
                ⚡ Demo Mode: Simulated ordering with zero real payment transaction.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Demo Checkout Order Confirmation Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-espresso/80 backdrop-blur-md"
            onClick={() => setCheckoutModalOpen(false)}
          />
          <div className="relative bg-espresso border border-cream/15 rounded-3xl max-w-lg w-full p-8 md:p-10 shadow-2xl z-10 text-cream text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-caramel/20 border-2 border-caramel flex items-center justify-center text-caramel mx-auto shadow-caramel-glow">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-widest text-caramel bg-mocha/40 px-3 py-1 rounded-full border border-caramel/20">
                <Sparkles size={12} />
                <span>Simulated Order Placed</span>
              </div>
              <h3 className="font-bebas text-4xl sm:text-5xl tracking-wide text-white">
                THANK YOU FOR YOUR ORDER!
              </h3>
              <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
                Your handcrafted SIPIO coffee selection is currently being prepared by our baristas.
                Estimated preparation time: <span className="text-caramel font-bold font-mono">12 minutes</span>.
              </p>
            </div>

            {/* Order Items Summary */}
            <div className="bg-mocha/30 rounded-2xl p-4 text-left border border-cream/5 space-y-2 max-h-48 overflow-y-auto">
              <div className="text-[11px] font-mono uppercase tracking-wider text-cream/50 mb-2">
                Order Manifest (#{Math.floor(100000 + Math.random() * 900000)})
              </div>
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-xs font-mono">
                  <span className="text-cream/80">
                    {item.quantity}x {item.product.name}
                  </span>
                  <span className="text-caramel font-bold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber/10 rounded-xl border border-amber/20 text-xs font-mono text-amber">
              ℹ️ Demonstration Notice: No charge was made and no real delivery was dispatched.
            </div>

            <button
              onClick={handleFinishOrder}
              className="w-full py-3.5 bg-caramel text-espresso-dark font-manrope font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-caramel-hover transition-colors shadow-caramel-glow"
            >
              Close & Start Fresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
