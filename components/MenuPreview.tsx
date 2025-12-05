import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import BirdsNest from '../images/BirdsNest.webp';
import food2 from '../images/food2.jpg';
import AlmondCroissant from '../images/AlmondCroissant.webp';
import PlainCroissant from '../images/PlainCroissant.webp';
import PistachioLatte from '../images/PistachioLatte.webp';
import Cappucino from '../images/Cappucino.webp';
import LavenderBlueberry from '../images/LavenderBlueberry.webp';
import LondonFog from '../images/LondonFog.webp';

const menuItems = [
  {
    id: 1,
    name: "Bird's Nest Pastries",
    description: "Delicate kataifi nests with creamy lotus filling, made fresh daily.",
    image: BirdsNest,
    price: "$4.50"
  },
  {
    id: 2,
    name: "House-Made Baklava",
    description: "Layers of flaky phyllo, honey, and pistachios. Baked fresh in our kitchen.",
    image: food2,
    price: "$4.50"
  },
  {
    id: 3,
    name: "Almond Croissant",
    description: "Buttery, flaky croissant filled with sweet almond cream. Baked fresh each morning.",
    image: AlmondCroissant,
    price: "$5.25"
  },
  {
    id: 4,
    name: "Plain Croissant",
    description: "Classic French croissant with golden, buttery layers. Simple perfection.",
    image: PlainCroissant,
    price: "$4.00"
  },
  {
    id: 5,
    name: "Pistachio Latte",
    description: "Creamy espresso with house-made pistachio cream. A customer favorite.",
    image: PistachioLatte,
    price: "$6.45"
  },
  {
    id: 6,
    name: "Cappuccino",
    description: "Rich espresso topped with velvety steamed milk foam. A timeless classic.",
    image: Cappucino,
    price: "$5.25"
  },
  {
    id: 7,
    name: "Lavender Blueberry",
    description: "Refreshing blend of lavender and blueberry. Light and floral.",
    image: LavenderBlueberry,
    price: "$6.50"
  },
  {
    id: 8,
    name: "London Fog",
    description: "Earl Grey tea with vanilla and steamed milk. Warm and comforting.",
    image: LondonFog,
    price: "$5.75"
  }
];

const MenuPreview: React.FC = () => {
  return (
    <section id="menu" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-grizzly-dark mb-3 sm:mb-4">Made Fresh, With Love</h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Our bakers start before sunrise, crafting every pastry and treat from scratch. No shortcuts. Just honest, fresh food made to share.
            </p>
            <div className="flex items-center gap-2 mt-4 text-green-700 bg-green-50 px-4 py-2 rounded-full w-fit">
              <Leaf size={18} />
              <span className="font-semibold text-sm">Halal Options Available</span>
            </div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-grizzly-dark border-b-2 border-grizzly-red pb-1 hover:text-grizzly-red transition-colors uppercase tracking-widest font-bold text-sm flex-shrink-0">
            View Full Menu <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {menuItems.map((item) => (
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
              <p className="text-gray-500 text-sm mt-1 hidden sm:block">{item.description}</p>
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