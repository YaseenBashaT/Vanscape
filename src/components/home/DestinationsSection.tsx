
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface DestinationCardProps {
  name: string;
  image: string;
  slug: string;
  description: string;
}

const DestinationCard = ({ name, image, slug, description }: DestinationCardProps) => (
  <Card className="overflow-hidden group">
    <Link to={`/destinations/${slug}`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>
      </div>
    </Link>
  </Card>
);

const DestinationsSection = () => {
  const destinations: DestinationCardProps[] = [
    {
      name: "Pacific Northwest",
      image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1470&auto=format&fit=crop",
      slug: "pacific-northwest",
      description: "Explore lush forests, rugged coastlines, and majestic mountains."
    },
    {
      name: "California Coast",
      image: "https://images.unsplash.com/photo-1518554122710-a09f231a8262?q=80&w=1470&auto=format&fit=crop",
      slug: "california-coast",
      description: "Drive along scenic Highway 1 with breathtaking ocean views."
    },
    {
      name: "Rocky Mountains",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1470&auto=format&fit=crop",
      slug: "rocky-mountains",
      description: "Discover alpine lakes, wildlife, and stunning mountain passes."
    },
    {
      name: "Southwest Deserts",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop",
      slug: "southwest-deserts",
      description: "Navigate through iconic red rock formations and desert landscapes."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-vanscape-charcoal mb-2">Popular Destinations</h2>
            <p className="text-gray-600 max-w-xl">
              Discover the most amazing routes and landscapes for your next adventure.
            </p>
          </div>
          <Link to="/destinations" className="mt-4 sm:mt-0">
            <Button variant="ghost" className="text-vanscape-blue hover:text-blue-700">
              All destinations
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
