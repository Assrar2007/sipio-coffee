import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ToastNotification: React.FC = () => {
  const { toastProduct, dismissToast, setIsOpen } = useCart();

  useEffect(() => {
    if (toastProduct) {
      const timer = setTimeout(() => {
        dismissToast();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastProduct, dismissToast]);

  if (!toastProduct) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-espresso/95 border border-caramel/40 text-cream p-4 rounded-2xl shadow-2xl backdrop-blur-md animate-slide-up flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-3 overflow-hidden">
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-mocha shrink-0 border border-cream/10">
          <img
            src={toastProduct.image}
            alt={toastProduct.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <div className="flex items-center space-x-1.5 text-xs text-caramel font-semibold">
            <CheckCircle2 size={13} />
            <span>Added to bag</span>
          </div>
          <div className="font-manrope font-bold text-sm text-white truncate">
            {toastProduct.name}
          </div>
          <div className="text-[11px] font-mono text-cream/60">
            ${toastProduct.price.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 shrink-0">
        <button
          onClick={() => {
            dismissToast();
            setIsOpen(true);
          }}
          className="px-3 py-1.5 bg-caramel hover:bg-caramel-hover text-espresso-dark font-manrope font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
        >
          View Bag
        </button>
        <button
          onClick={dismissToast}
          className="p-1 text-cream/40 hover:text-cream transition-colors"
          aria-label="Dismiss notification"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
