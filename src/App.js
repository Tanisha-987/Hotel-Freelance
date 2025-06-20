import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Header />
      <Hero />
      <Rooms />
      <About />
      <Contact />
      <Footer />
    </AnimatePresence>
  );
};

export default App;
