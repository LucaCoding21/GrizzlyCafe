import React from 'react';
import { SIGNATURE_DRINKS } from '../constants';
import { Sparkles } from 'lucide-react';

const SignatureDrinks: React.FC = () => {
  return (
    <section id="signatures" className="py-16 sm:py-24 bg-grizzly-dark text-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-16">
           <span className="text-grizzly-red font-bold tracking-widest uppercase text-xs sm:text-sm flex items-center justify-center gap-2">
              <Sparkles size={16} /> Seasonal Specials
           </span>
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-3 sm:mt-4">Signature Sips</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-24">
          {SIGNATURE_DRINKS.map((drink) => (
            <div key={drink.id} className="group flex flex-col items-center text-center">
              <div className="relative w-3/4 sm:w-full aspect-square mb-6 sm:mb-8 overflow-hidden rounded-full border-4 border-white/5">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2 text-white group-hover:text-grizzly-red transition-colors">{drink.name}</h3>
              <p className="text-amber-400 font-medium italic mb-3 sm:mb-4 text-sm sm:text-base">{drink.tastingNotes.join(' · ')}</p>
              <p className="text-gray-400 leading-relaxed max-w-sm mb-5 sm:mb-6 text-sm sm:text-base px-2">
                {drink.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDrinks;