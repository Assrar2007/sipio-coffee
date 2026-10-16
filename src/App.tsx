import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { CoffeeMenu } from './components/sections/CoffeeMenu';
import { WhySipio } from './components/sections/WhySipio';
import { BrewingStory } from './components/sections/BrewingStory';
import { Testimonials } from './components/sections/Testimonials';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { ToastNotification } from './components/ui/ToastNotification';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-espresso text-cream font-inter selection:bg-caramel selection:text-white w-full">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="w-full">
          {/* Phase 4 & 5: Cinematic Scroll Hero with Canvas Coffee Sequence */}
          <Hero />

          {/* Phase 6: Editorial About SIPIO Section */}
          <About />

          {/* Phase 7: Discover Your Perfect Cup — Craft Menu */}
          <CoffeeMenu />

          {/* Phase 8: What Makes SIPIO Truly Special */}
          <WhySipio />

          {/* Phase 10: The Art of Perfect Brewing */}
          <BrewingStory />

          {/* Phase 9: Customer Testimonials Carousel */}
          <Testimonials />
        </main>

        {/* Phase 11: Premium Signature Caramel Footer */}
        <Footer />

        {/* Interactive Components: Cart Drawer & Toast Notification */}
        <CartDrawer />
        <ToastNotification />
      </div>
    </CartProvider>
  );
};

export default App;
