import React from 'react';
import { Coffee, Wifi, MapPin, Clock, Award, Leaf } from 'lucide-react';
import { MenuItem, Testimonial, Feature, SignatureDrink } from './types';

export const BRAND_NAME = "Grizzly Café";
export const TAGLINE = "Wildly Good Coffee.";
export const ADDRESS = "102-13775 72nd Ave, Surrey, BC V3W 9Z1"; 
export const PHONE = "+1 (604) 555-0199";

export const FEATURES: Feature[] = [
  {
    title: "Fresh Baked Daily",
    description: "Every pastry, croissant, and treat is made from scratch in our kitchen each morning.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Community First",
    description: "Cozy booths and communal tables designed for friends and family to gather.",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    title: "Your Third Place",
    description: "More than a cafe. A welcoming space where everyone belongs.",
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
    name: "House-Made Baklava",
    description: "Layers of flaky phyllo, honey, and pistachios. Baked fresh in our kitchen daily.",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1000&auto=format&fit=crop",
    price: "$4.50"
  },
  {
    id: 2,
    name: "Almond Croissant",
    description: "Buttery, flaky perfection filled with almond cream, baked fresh each morning.",
    image: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=1000&auto=format&fit=crop",
    price: "$5.25"
  },
  {
    id: 3,
    name: "Pistachio Latte",
    description: "Our signature espresso with house-made pistachio cream and a hint of rose.",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1000&auto=format&fit=crop",
    price: "$6.45"
  },
  {
    id: 4,
    name: "Fresh Baked Muffins",
    description: "Rotating flavors daily. Chocolate, blueberry, and more. Always warm, always fresh.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1000&auto=format&fit=crop",
    price: "$4.00"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "This isn't just a cafe. It's where our family spends Sunday mornings. The kids love the pastries and we love the community feel.",
    role: "Local Mom"
  },
  {
    id: 2,
    name: "David Chen",
    text: "I've made more friends here than anywhere else in Surrey. The baklava is incredible and you can tell everything is made fresh.",
    role: "Regular Customer"
  }
];