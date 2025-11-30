import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2400&auto=format&fit=crop"
          alt="Dark moody coffee shop interior"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-4 max-w-5xl mx-auto mt-8 sm:mt-16">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-white/80 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Now Open in Surrey, BC</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-4 sm:mb-6 leading-[0.9] tracking-tight">
            ROASTED <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">WILD.</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed px-2">
            A modern coffee sanctuary where the rugged spirit of the Pacific Northwest meets refined espresso culture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href="#signatures"
              className="group relative w-full sm:w-auto px-8 py-4 bg-grizzly-red text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50 text-center"
            >
              <span className="relative z-10">Explore Menu</span>
              <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a
              href="#location"
              className="text-white font-bold tracking-widest uppercase text-sm hover:text-grizzly-red transition-colors border-b border-transparent hover:border-grizzly-red pb-1"
            >
              Visit the Den
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer" onClick={() => document.getElementById('story')?.scrollIntoView({behavior: 'smooth'})}>
        <ChevronDown className="text-white/50 w-10 h-10 hover:text-white transition-colors" />
      </div>
    </section>
  );
};

export default Hero;