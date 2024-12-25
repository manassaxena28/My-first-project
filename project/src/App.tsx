import React from 'react';
import { Rocket, Layers, Pen } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <Feature 
            icon={<Pen className="w-8 h-8" />}
            title="Easy to Edit"
            description="Streamlined interface for quick and intuitive content editing. Perfect for both beginners and professionals."
          />
          <Feature 
            icon={<Layers className="w-8 h-8" />}
            title="Organized Layers"
            description="Structured layout system with carefully organized components for maximum flexibility."
          />
          <Feature 
            icon={<Rocket className="w-8 h-8" />}
            title="Ready to Launch"
            description="Pre-configured setup that gets your project from development to production quickly."
          />
        </div>

        <ContentSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;