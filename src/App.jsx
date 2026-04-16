import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      {currentPage === 'contact' ? (
        <Contact />
      ) : (
        <>
          <Stats />
          <Services />
          <About />
          <Gallery />
          <Testimonials />
          <Team />
          <CTA />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
