import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">The Gentry Cut</h3>
            <p className="text-muted-foreground leading-relaxed">
              Exclusive grooming experiences for the modern gentleman.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("owner")}
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Owner
              </button>
              <button
                onClick={() => scrollToSection("booking")}
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Gentry Cut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
