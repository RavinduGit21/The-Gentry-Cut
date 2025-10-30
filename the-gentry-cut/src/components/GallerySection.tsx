import React from 'react';

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="w-full py-20 px-8 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-subtle-off-white mb-12" data-aos="fade-up">The Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative w-full h-64 rounded-lg overflow-hidden group" data-aos="fade-up" data-aos-delay="200">
            <img src="/gallery-1.jpg" alt="Gallery Image 1" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-accent transition-all duration-300 flex items-center justify-center">
              <p className="font-serif text-subtle-off-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">The Studio</p>
            </div>
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden group" data-aos="fade-up" data-aos-delay="300">
            <img src="/gallery-2.jpg" alt="Gallery Image 2" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-accent transition-all duration-300 flex items-center justify-center">
              <p className="font-serif text-subtle-off-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Precision Cut</p>
            </div>
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden group" data-aos="fade-up" data-aos-delay="400">
            <img src="/gallery-3.jpg" alt="Gallery Image 3" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-accent transition-all duration-300 flex items-center justify-center">
              <p className="font-serif text-subtle-off-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">The Tools</p>
            </div>
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden group" data-aos="fade-up" data-aos-delay="500">
            <img src="/gallery-4.jpg" alt="Gallery Image 4" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-accent transition-all duration-300 flex items-center justify-center">
              <p className="font-serif text-subtle-off-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">The Finish</p>
            </div>
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden group" data-aos="fade-up" data-aos-delay="600">
            <img src="/gallery-5.jpg" alt="Gallery Image 5" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-accent transition-all duration-300 flex items-center justify-center">
              <p className="font-serif text-subtle-off-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Attention to Detail</p>
            </div>
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden group" data-aos="fade-up" data-aos-delay="700">
            <img src="/gallery-6.jpg" alt="Gallery Image 6" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-accent transition-all duration-300 flex items-center justify-center">
              <p className="font-serif text-subtle-off-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">The Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
