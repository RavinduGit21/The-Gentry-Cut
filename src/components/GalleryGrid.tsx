import { useState } from "react";

interface GalleryImage {
  src: string;
  title: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-card hover-lift cursor-pointer aspect-square"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-gradient-overlay flex items-center justify-center transition-opacity duration-300 ${
              hoveredIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-serif text-accent text-shadow-luxury">
              {image.title}
            </h3>
          </div>
          <div
            className={`absolute inset-0 border-2 transition-colors duration-300 pointer-events-none ${
              hoveredIndex === index ? "border-accent" : "border-transparent"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
