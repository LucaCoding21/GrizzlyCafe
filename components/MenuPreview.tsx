import React from 'react';
import { MENU_HIGHLIGHTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const MenuPreview: React.FC = () => {
  return (
    <section id="menu" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-grizzly-dark mb-3 sm:mb-4">Curated Classics</h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Beyond our espresso, we offer a selection of goods baked fresh every morning. Simple ingredients, wild flavors.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-grizzly-dark border-b-2 border-grizzly-red pb-1 hover:text-grizzly-red transition-colors uppercase tracking-widest font-bold text-sm flex-shrink-0">
            View Full Menu <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {MENU_HIGHLIGHTS.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative h-40 sm:h-52 lg:h-64 w-full overflow-hidden rounded-lg sm:rounded-xl mb-3 sm:mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-md px-2 sm:px-3 py-1 rounded-md shadow-sm">
                  <p className="text-grizzly-dark font-bold text-xs sm:text-sm">{item.price}</p>
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-grizzly-dark group-hover:text-grizzly-red transition-colors leading-tight">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 md:hidden text-center">
          <a href="#" className="inline-flex items-center gap-2 text-grizzly-dark font-bold border-b-2 border-grizzly-red pb-1 text-sm">
            View Full Menu <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;