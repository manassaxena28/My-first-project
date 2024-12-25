import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">Simply.</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['HOME', 'PORTFOLIO', 'CONTACT', 'BLOG'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm tracking-wider"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;