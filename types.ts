export interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: string;
}

export interface SignatureDrink {
  id: number;
  name: string;
  tagline: string;
  description: string;
  tastingNotes: string[];
  image: string;
  seasonal?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}