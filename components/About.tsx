import React from 'react';
import { FEATURES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 md:py-32 bg-grizzly-cream relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-[0.03] hidden sm:block">
        <span className="text-[20vw] font-serif font-bold text-grizzly-dark whitespace-nowrap">GRIZZLY</span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
               <div className="h-[2px] w-8 sm:w-12 bg-grizzly-red"></div>
               <span className="text-grizzly-dark font-bold tracking-widest uppercase text-xs sm:text-sm">About the Cafe</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-grizzly-dark mb-6 sm:mb-8 leading-tight">
              An Ode to the <br/>
              <span className="text-grizzly-red">Pacific Northwest.</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Grizzly Café wasn't just built to serve coffee; it was designed to capture the essence of British Columbia. From the locally sourced hemlock timber lining our walls to the ethically sourced beans roasted right here in Surrey, every detail whispers the story of the wild.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
               We believe coffee should be an experience, not a transaction. Whether you're a digital nomad seeking a power outlet and inspiration, or a neighbor catching up over a pastry, our den is your sanctuary.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-grizzly-dark/10 pt-6 sm:pt-8">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="group flex sm:block items-start gap-4 sm:gap-0">
                  <div className="mb-0 sm:mb-4 text-grizzly-red transition-transform group-hover:-translate-y-1 duration-300 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-grizzly-dark text-base mb-1 sm:mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Composition */}
          <div className="order-1 lg:order-2 relative mb-8 lg:mb-0">
            <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop"
                  alt="Barista pouring art"
                  className="w-full sm:w-4/5 rounded-2xl shadow-2xl sm:ml-auto"
                />
                <div className="absolute -bottom-6 sm:-bottom-10 left-0 w-2/5 sm:w-3/5 border-4 sm:border-8 border-grizzly-cream rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop"
                      alt="Beans"
                      className="w-full h-full object-cover"
                    />
                </div>
            </div>
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white rounded-full opacity-60 blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;