import React from 'react';
import { Instagram } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop", // Cafe interior light
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop", // People sitting
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop", // Coffee cups
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop", // Latte Art
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop", // Barista
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop", // Pastry case
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-12 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-4 mb-8 sm:mb-12 flex flex-col md:flex-row items-start sm:items-center justify-between gap-4">
         <div className="text-center sm:text-left w-full sm:w-auto">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-grizzly-dark">Life at Grizzly</h2>
            <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">Follow us <span className="text-grizzly-red font-semibold">@grizzlycafesurrey</span></p>
         </div>
         <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-grizzly-dark font-medium text-sm sm:text-base">
            <Instagram size={18} />
            Follow on Instagram
         </a>
      </div>

      {/* Mobile-optimized Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-0">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-square group overflow-hidden sm:border-2 sm:border-white">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-grizzly-red/80 opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;