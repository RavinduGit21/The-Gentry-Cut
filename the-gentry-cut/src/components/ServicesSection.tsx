import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="w-full py-20 px-8 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-white mb-12" data-aos="fade-up">Our Exclusive Services</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
            {/* Image Placeholder */}
            <div className="relative w-full h-64 rounded-lg mb-6 overflow-hidden group">
              <img
                src="/private-studio.jpg"
                alt="Private Studio Appointment"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-deep-black opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gold-accent mb-4">Private Studio Appointment</h3>
            <p className="text-subtle-off-white max-w-md">
              A dedicated, one-on-one session in our private studio. Full privacy and the barber's undivided attention.
            </p>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
            <div className="relative w-full h-64 rounded-lg mb-6 overflow-hidden group">
              <img
                src="/vip-at-home.jpg"
                alt="VIP At-Home Grooming"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-deep-black opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-gold-accent mb-4">VIP At-Home Grooming</h3>
            <p className="text-subtle-off-white max-w-md">
              Our premium service. A senior stylist comes directly to your chosen location (home, office, hotel) for a convenient, high-end grooming experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
