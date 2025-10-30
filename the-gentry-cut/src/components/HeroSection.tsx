import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center bg-black overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-deep-black opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center p-8" data-aos="fade-up">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-subtle-off-white leading-tight mb-6">
          The Gentry Cut: Exclusive Grooming, Redefined.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-4" data-aos="fade-up" data-aos-delay="200">
          <a
            href="#services"
            className="px-10 py-4 border-2 border-subtle-off-white text-subtle-off-white uppercase tracking-widest font-sans font-semibold transition-all duration-300 hover:border-gold-accent hover:text-gold-accent"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
