import React from 'react';

const BookingContactSection: React.FC = () => {
  return (
    <section id="booking" className="w-full py-20 px-8 bg-deep-black">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-subtle-off-white mb-12" data-aos="fade-up">Booking & Contact</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-deep-black p-8 rounded-lg border border-gold-accent" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-serif text-2xl font-semibold text-gold-accent mb-4">Book an Appointment</h3>
            <div className="w-full h-96 bg-deep-black rounded-lg flex items-center justify-center">
              <p className="text-subtle-off-white">Booking Widget Placeholder (e.g., Booksy, Square)</p>
            </div>
          </div>
          <div className="bg-deep-black p-8 rounded-lg border border-gold-accent" data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-serif text-2xl font-semibold text-gold-accent mb-4">Contact Us</h3>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="bg-deep-black text-subtle-off-white p-3 border-b border-gold-accent focus:outline-none focus:border-b-2 placeholder-subtle-off-white" />
              <input type="email" placeholder="Email" className="bg-deep-black text-subtle-off-white p-3 border-b border-gold-accent focus:outline-none focus:border-b-2 placeholder-subtle-off-white" />
              <input type="tel" placeholder="Phone" className="bg-deep-black text-subtle-off-white p-3 border-b border-gold-accent focus:outline-none focus:border-b-2 placeholder-subtle-off-white" />
              <textarea placeholder="Message" rows={4} className="bg-deep-black text-subtle-off-white p-3 border-b border-gold-accent focus:outline-none focus:border-b-2 placeholder-subtle-off-white"></textarea>
              <button type="submit" className="px-8 py-3 bg-gold-accent text-deep-black uppercase tracking-widest font-sans font-semibold transition-all duration-300 hover:bg-secondary-accent hover:text-subtle-off-white">Send Message</button>
            </form>
            <div className="mt-8 text-subtle-off-white">
              <p>Studio Address:</p>
              <p className="font-semibold">123 Gentry Lane, Suite 100</p>
              <p>New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingContactSection;
