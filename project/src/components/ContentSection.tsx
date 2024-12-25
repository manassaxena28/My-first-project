import React from 'react';

const ContentSection = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">FEATURED CONTENT</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover our carefully curated collection of content that showcases the best of what we offer.
          Each piece is crafted with attention to detail and purpose.
        </p>
      </div>

      <div className="relative aspect-video mb-20 group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Ocean waves"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-300">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((item) => (
          <div key={item} className="group cursor-pointer">
            <img 
              src={`https://images.unsplash.com/photo-${item === 1 ? '1470071459604-3b5ec3a7fe05' : '1477346611705-65d1883cee1e'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80`}
              alt="Nature"
              className="w-full h-64 object-cover mb-6 transform transition-transform duration-500 group-hover:scale-105"
            />
            <h3 className="text-xl font-semibold mb-3">SECONDARY CONTENT</h3>
            <p className="text-gray-400 mb-4">Experience the beauty of simplicity through our carefully curated secondary content.</p>
            <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-300">
              View more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentSection;