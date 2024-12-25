import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">HEARD ENOUGH?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join us in creating beautiful, minimal designs that make an impact.
            Start your journey today and transform your ideas into reality.
          </p>
          <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300">
            Get Started
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[1, 2, 3, 4].map((col) => (
            <div key={col}>
              <h3 className="text-sm font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                {['About Us', 'Meet The Team', 'What We Do', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>Copyright © {new Date().getFullYear()} Simply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;