import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Books from './components/Books';
import Delivery from './components/Delivery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-cairo" dir="rtl">
      <div className="relative overflow-hidden">
      <Header />
      <Hero />
      <Books />
      <Delivery />
      <About />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
