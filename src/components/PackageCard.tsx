import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface PackageCardProps {
  title: string;
  price: string;
  features: string[];
  isPremium?: boolean;
}

const PackageCard = ({ title, price, features, isPremium = false }: PackageCardProps) => {
  return (
    <Card
      className={`overflow-hidden hover-lift ${
        isPremium
          ? "border-accent border-2 shadow-luxury bg-card"
          : "border-border shadow-card bg-card"
      }`}
    >
      <CardHeader className={isPremium ? "border-b border-accent pb-6" : "pb-6"}>
        <CardTitle className={`text-3xl font-serif ${isPremium ? "text-accent" : ""}`}>
          {title}
        </CardTitle>
        <p className="text-4xl font-bold mt-2">
          {price}
          <span className="text-lg text-muted-foreground font-normal">/session</span>
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${isPremium ? "text-accent" : "text-foreground"}`} />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant={isPremium ? "gold" : "outline"}
          className="w-full"
          size="lg"
        >
          Select Package
        </Button>
      </CardContent>
    </Card>
  );
};

export default PackageCard;
