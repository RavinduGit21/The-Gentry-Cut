import { Card, CardContent } from "./ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift bg-card border-border shadow-card">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-serif mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
