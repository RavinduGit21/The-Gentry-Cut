import { Card, CardContent } from "./ui/card";
import ownerImage from "@/assets/wmremove-transformed (1).png";

const OwnerSection = () => {
  return (
    <section id="owner" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-overlay z-10" />
        <div className="w-full h-full bg-secondary" />
      </div>

      <div className="container mx-auto relative z-20">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 animate-slide-up">
          Meet The Master
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2 flex justify-center">
            <Card className="overflow-hidden hover-lift bg-card border-border shadow-luxury">
              <CardContent className="p-0">
                <img
                  src={ownerImage}
                  alt="Master Barber"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-serif text-accent">
                The Artisan Behind The Craft
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over a decade of experience in the art of men's grooming, our master barber has honed his craft in some of the world's most prestigious establishments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trained in classical barbering techniques and modern styling, he brings a unique blend of tradition and innovation to every service. His attention to detail and commitment to excellence has earned him a reputation among discerning gentlemen who demand nothing but the best.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At The Gentry Cut, every appointment is a personalized experience, where precision meets artistry, and grooming becomes an art form.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <h4 className="text-xl font-serif text-accent mb-4">Credentials & Expertise</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Master Barber Certification, International Academy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>15+ Years Professional Experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Specialist in Classic & Contemporary Styles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Award-Winning Precision Cuts & Beard Sculpting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
