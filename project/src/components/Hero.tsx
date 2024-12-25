import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fadeIn">
          A MINIMAL, CLEAN
          <br />
          <span className="text-gray-300">LAYOUT FOR WEB DESIGN.</span>
        </h1>
        <button className="bg-white text-black px-8 py-3 rounded-sm hover:bg-gray-200 transition-colors duration-300 text-sm tracking-wider opacity-0 animate-fadeInDelay">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;