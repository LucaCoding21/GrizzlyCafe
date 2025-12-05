import React from 'react';
import { ChevronDown } from 'lucide-react';
import space2 from '../images/space2.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={space2}
          alt="Grizzly Cafe cozy interior with booth seating"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-4 max-w-5xl mx-auto mt-8 sm:mt-16">
        <div className="animate-fade-in-up">
          <p className="text-white/70 text-sm sm:text-base font-medium tracking-widest uppercase mb-4 sm:mb-6">Located in Surrey, BC</p>
          <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-4 sm:mb-6 leading-[0.9] tracking-tight">
            MORE THAN <br/>
            <span>A CAFE.</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed px-2">
            A gathering place for friends and family. Fresh pastries baked in-house daily, halal options available, and a warm community waiting to welcome you home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href="#menu"
              className="group relative w-full sm:w-auto px-8 py-4 bg-grizzly-red text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50 text-center"
            >
              <span className="relative z-10">Explore Menu</span>
              <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a
              href="#location"
              className="text-white font-bold tracking-widest uppercase text-sm hover:text-grizzly-red transition-colors border-b border-transparent hover:border-grizzly-red pb-1"
            >
              Join Our Community
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