import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import GalleryGrid from "@/components/GalleryGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

import heroBackground from "@/assets/hero-background.jpg";
import privateStudio from "@/assets/private-studio.jpg";
import vipHome from "@/assets/vip-home.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const galleryImages = [
    { src: gallery1, title: "The Tools" },
    { src: gallery2, title: "The Studio" },
    { src: gallery3, title: "The Finish" },
    { src: gallery4, title: "The Products" },
    { src: gallery5, title: "The Craft" },
    { src: gallery6, title: "The Lounge" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-overlay z-10" />
          <img
            src={heroBackground}
            alt="Luxury barbershop interior"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-shadow-luxury">
            The Gentry Cut
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow-luxury max-w-2xl mx-auto">
            Exclusive Grooming, Redefined
          </p>
          <Button
            variant="hero"
            size="xl"
            onClick={() => scrollToSection("services")}
          >
            Explore Our Services
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 animate-slide-up">
            Our Exclusive Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <ServiceCard
              title="Private Studio"
              description="Experience the art of grooming in complete privacy. Our exclusive studio offers a serene, one-on-one environment where precision meets perfection."
              image={privateStudio}
            />
            <ServiceCard
              title="VIP At-Home"
              description="Luxury comes to you. Our master barbers bring the complete Gentry Cut experience to your residence, ensuring convenience without compromise."
              image={vipHome}
            />
          </div>

          {/* Packages Section */}
          <div className="mt-24">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
              Our Packages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PackageCard
                title="Standard"
                price="$85"
                features={[
                  "Precision haircut",
                  "Hot towel treatment",
                  "Styling consultation",
                  "Premium product application",
                  "45-minute session",
                ]}
              />
              
              <PackageCard
                title="Signature"
                price="$135"
                features={[
                  "Everything in Standard",
                  "Beard sculpting & shaping",
                  "Straight razor neck shave",
                  "Shoulder massage",
                  "Complimentary beverage",
                  "75-minute session",
                ]}
              />
              
              <PackageCard
                title="The Gentry Experience"
                price="$225"
                features={[
                  "Everything in Signature",
                  "Private studio booking",
                  "Custom hair & beard analysis",
                  "Luxury grooming products to take home",
                  "Pre-session consultation",
                  "Priority scheduling",
                  "120-minute session",
                ]}
                isPremium
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
            The Gallery
          </h2>
          
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Booking & Contact Section */}
      <section id="booking" className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
            Booking & Contact
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif mb-6">Visit Our Studio</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">The Gentry Cut</p>
                      <p className="text-muted-foreground">456 Madison Avenue</p>
                      <p className="text-muted-foreground">New York, NY 10022</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                    <p className="text-muted-foreground">(212) 555-GENT</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                    <p className="text-muted-foreground">appointments@thegentrycut.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-4">Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-serif mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
