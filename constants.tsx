import React from 'react';
import { Coffee, Wifi, MapPin, Clock, Award, Leaf } from 'lucide-react';
import { MenuItem, Testimonial, Feature, SignatureDrink } from './types';

export const BRAND_NAME = "Grizzly Café";
export const TAGLINE = "Wildly Good Coffee.";
export const ADDRESS = "102-13775 72nd Ave, Surrey, BC V3W 9Z1"; 
export const PHONE = "+1 (604) 555-0199";

export const FEATURES: Feature[] = [
  {
    title: "Artisan Roasts",
    description: "Ethically sourced beans roasted to perfection right here in the Pacific Northwest.",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    title: "Digital Nomads",
    description: "Free gigabit WiFi and individual power stations for every seat.",
    icon: <Wifi className="w-6 h-6" />,
  },
  {
    title: "Locally Sourced",
    description: "Our pastries and lunch items use ingredients from local BC farms.",
    icon: <Leaf className="w-6 h-6" />,
  },
];

export const SIGNATURE_DRINKS: SignatureDrink[] = [
  {
    id: 1,
    name: "The Red Bear Velvet",
    tagline: "Bold & Beautiful",
    description: "A striking homage to our mascot. Velvety steamed oat milk infused with natural beetroot powder, white chocolate shavings, and a double shot of our signature espresso.",
    tastingNotes: ["Earth", "Cocoa", "Sweet Cream"],
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop", 
    seasonal: true
  },
  {
    id: 2,
    name: "Surrey Fog",
    tagline: "A Local Classic",
    description: "Our West Coast twist on the London Fog. Earl Grey lavender tea, vanilla bean syrup, and frothed almond milk, finished with a dusting of cinnamon and dried rose petals.",
    tastingNotes: ["Floral", "Vanilla", "Warm Spice"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
    seasonal: false
  }
];

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: 1,
    name: "Smoked Salmon Bagel",
    description: "Wild BC salmon, capers, dill cream cheese on a house-made sourdough bagel.",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1000&auto=format&fit=crop",
    price: "$12.00"
  },
  {
    id: 2,
    name: "Grizzly Cold Brew",
    description: "Steeped for 24 hours. Bold, smooth, and served over mountain-clear ice.",
    image: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=1000&auto=format&fit=crop",
    price: "$5.75"
  },
  {
    id: 3,
    name: "Forest Berry Scone",
    description: "Baked fresh daily with seasonal berries and a lemon glaze.",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1000&auto=format&fit=crop",
    price: "$4.50"
  },
  {
    id: 4,
    name: "Avocado & Egg Toast",
    description: "Thick cut sourdough, smashed avocado, chili flakes, and a poached farm egg.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1000&auto=format&fit=crop",
    price: "$11.50"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The aesthetic is unmatched in Surrey. I come here to work every Tuesday. The Great Bear Latte is a must-try!",
    role: "Freelance Designer"
  },
  {
    id: 2,
    name: "David Chen",
    text: "Finally, a place that takes coffee seriously. The espresso pull is consistent and the staff are incredibly friendly.",
    role: "Coffee Enthusiast"
  }
];