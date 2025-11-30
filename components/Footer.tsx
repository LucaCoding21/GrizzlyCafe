import React from 'react';
import { BRAND_NAME } from '../constants';
import grizzlyLogo from '../grizzly.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-grizzly-dark text-white pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">

          <div className="col-span-2 sm:col-span-2 md:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-6">
                <img src={grizzlyLogo} alt="Logo" className="h-10 w-10 object-contain rounded opacity-90"/>
                <span className="font-serif font-bold text-xl sm:text-2xl">{BRAND_NAME}</span>
            </div>
            <p className="text-gray-400 max-w-md text-sm sm:text-base mx-auto sm:mx-0">
              A modern sanctuary for coffee lovers in Surrey. We brew with passion, serve with a smile, and roast with a wild spirit.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Sitemap</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li><a href="#story" className="hover:text-grizzly-red transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-grizzly-red transition-colors">Menu</a></li>
              <li><a href="#location" className="hover:text-grizzly-red transition-colors">Visit</a></li>
              <li><a href="#" className="hover:text-grizzly-red transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Legal</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm gap-2">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <p>Designed with <span className="text-grizzly-red">♥</span> in BC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;