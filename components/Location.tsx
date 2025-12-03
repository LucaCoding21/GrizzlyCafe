import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { ADDRESS, PHONE } from '../constants';
import exteriorImage from '../exterior.jpg';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-0 relative">
      <div className="flex flex-col lg:flex-row h-auto lg:min-h-[700px]">

        {/* Exterior Photo Side */}
        <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden group">
          <img
            src={exteriorImage}
            alt="Grizzly Cafe Exterior"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 lg:hidden"></div>
          <div className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8 text-white lg:hidden">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">Find the Den</h3>
            <p className="opacity-80 text-sm sm:text-base">Surrey, BC</p>
          </div>
        </div>

        {/* Info Side */}
        <div className="lg:w-1/2 bg-grizzly-gray flex items-center p-6 sm:p-8 md:p-16 lg:p-24">
          <div className="w-full max-w-lg mx-auto lg:mx-0">
            <div className="mb-6 sm:mb-10">
               <span className="text-grizzly-red font-bold tracking-widest uppercase text-xs sm:text-sm block mb-2">Visit Us</span>
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-grizzly-dark">
                 Come Say Hello.
               </h2>
            </div>

            <div className="space-y-6 sm:space-y-10">
              {/* Address Block */}
              <div className="flex gap-4 sm:gap-6 group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-grizzly-dark shadow-sm group-hover:scale-110 transition-transform border border-gray-100">
                  <MapPin size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-grizzly-dark mb-1 sm:mb-2">Location</h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-snug">{ADDRESS}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 sm:mt-3 text-xs sm:text-sm font-bold text-grizzly-red uppercase tracking-wider hover:underline"
                  >
                    Get Directions <Navigation size={14} />
                  </a>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex gap-4 sm:gap-6 group">
                 <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-grizzly-dark shadow-sm group-hover:scale-110 transition-transform border border-gray-100">
                  <Clock size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg sm:text-xl text-grizzly-dark mb-2 sm:mb-3">Hours</h3>
                  <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                    <li className="flex justify-between border-b border-gray-200 pb-1 border-dashed gap-2">
                       <span className="font-medium">Mon - Thu</span>
                       <span className="text-right">9:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-1 border-dashed gap-2">
                       <span className="font-medium">Fri - Sat</span>
                       <span className="text-right">9:00 AM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-1 border-dashed gap-2">
                       <span className="font-medium">Sunday</span>
                       <span className="text-right">9:00 AM - 7:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>

               {/* Map Placeholder Graphic */}
               <a
                 href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="relative h-28 sm:h-32 w-full bg-gray-200 rounded-xl overflow-hidden shadow-inner border border-gray-300 mt-4 sm:mt-8 group cursor-pointer block"
               >
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-xs sm:text-sm shadow-sm text-grizzly-dark group-hover:scale-105 transition-transform">View on Map</span>
                  </div>
               </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;