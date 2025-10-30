import React from 'react';

const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="w-full py-20 px-8 bg-deep-black">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-subtle-off-white mb-12" data-aos="fade-up">Our Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-deep-black p-8 rounded-lg border border-subtle-off-white transition-all duration-300 hover:border-gold-accent" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-serif text-2xl font-semibold text-subtle-off-white mb-4">The Standard Cut</h3>
            <p className="text-subtle-off-white mb-4">(Price/Duration)</p>
            <p className="text-subtle-off-white">Includes: Consult, Precision Haircut, Hot Towel Finish.</p>
          </div>
          <div className="bg-deep-black p-8 rounded-lg border border-subtle-off-white transition-all duration-300 hover:border-gold-accent" data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-serif text-2xl font-semibold text-subtle-off-white mb-4">The Signature Groom</h3>
            <p className="text-subtle-off-white mb-4">(Price/Duration)</p>
            <p className="text-subtle-off-white">Includes: Precision Haircut, Classic Hot Lather Shave, Scalp Massage.</p>
          </div>
          <div className="bg-deep-black p-8 rounded-lg border-2 border-gold-accent transform hover:-translate-y-2 transition-all duration-300 shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <h3 className="font-serif text-2xl font-semibold text-gold-accent mb-4">The Gentry Experience</h3>
            <p className="text-subtle-off-white mb-4">(Price/Duration)</p>
            <p className="text-subtle-off-white">Includes: Everything in Signature Groom, plus a Hair Treatment, and a complimentary premium beverage.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
