import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuPreview from './components/MenuPreview';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-grizzly-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <Events />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;