
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface DestinationProps {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  featured: boolean;
}

const destinations: DestinationProps[] = [
  {
    id: 1,
    name: "Pacific Northwest",
    slug: "pacific-northwest",
    description: "Explore lush forests, rugged coastlines, and majestic mountains in this breathtaking region. From Olympic National Park to the Columbia River Gorge, discover nature at its finest.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1470&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "California Coast",
    slug: "california-coast",
    description: "Drive along scenic Highway 1 with breathtaking ocean views. Experience the magic of Big Sur, Monterey, and Santa Barbara while enjoying perfect weather and stunning scenery.",
    image: "https://images.unsplash.com/photo-1518554122710-a09f231a8262?q=80&w=1470&auto=format&fit=crop",
    featured: true
  },
  {
    id: 3,
    name: "Rocky Mountains",
    slug: "rocky-mountains",
    description: "Discover alpine lakes, wildlife, and stunning mountain passes throughout Colorado, Wyoming and Montana. Perfect for outdoor enthusiasts and photographers.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1470&auto=format&fit=crop",
    featured: true
  },
  {
    id: 4,
    name: "Southwest Deserts",
    slug: "southwest-deserts",
    description: "Navigate through iconic red rock formations and desert landscapes in Utah, Arizona and New Mexico. Experience the beauty of national parks like Arches, Zion, and Grand Canyon.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop",
    featured: true
  },
  {
    id: 5,
    name: "Great Lakes Region",
    slug: "great-lakes",
    description: "Discover the vast freshwater shorelines of the Great Lakes. Visit charming coastal towns, lighthouses, and beautiful state parks throughout Michigan, Wisconsin and Minnesota.",
    image: "https://images.unsplash.com/photo-1595815771614-ade803a9f850?q=80&w=1470&auto=format&fit=crop",
    featured: false
  },
  {
    id: 6,
    name: "New England",
    slug: "new-england",
    description: "Experience the charm of historic towns, covered bridges, and stunning fall foliage. Explore coastal Maine, Vermont's mountains, and Massachusetts' historic sites.",
    image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=1534&auto=format&fit=crop",
    featured: false
  },
  {
    id: 7,
    name: "Florida Keys",
    slug: "florida-keys",
    description: "Drive along the famous Overseas Highway connecting a string of tropical islands. Enjoy crystal-clear waters, sunset views, and the laid-back island lifestyle.",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1492&auto=format&fit=crop",
    featured: false
  },
  {
    id: 8,
    name: "Alaska Wilderness",
    slug: "alaska-wilderness",
    description: "Experience the last frontier with untamed landscapes, massive glaciers, and abundant wildlife. Perfect for adventurous travelers seeking true natural wonders.",
    image: "https://images.unsplash.com/photo-1531356384731-64bb669fbd56?q=80&w=1469&auto=format&fit=crop",
    featured: false
  }
];

const DestinationCard = ({ name, description, image, slug }: DestinationProps) => (
  <Card className="overflow-hidden group h-full">
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <CardContent className="p-5">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="outline" className="w-full group-hover:bg-vanscape-blue group-hover:text-white">
        Explore
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
);

const DestinationsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-vanscape-charcoal text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1533757704860-384691529550?q=80&w=1770&auto=format&fit=crop"
            alt="Scenic mountain road"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Amazing Destinations</h1>
          <p className="text-xl max-w-xl">
            Explore breathtaking landscapes and scenic routes perfect for your van adventure
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Adventure?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Find the perfect van to explore these amazing destinations
          </p>
          <Button size="lg" className="bg-vanscape-blue hover:bg-blue-700 text-white">
            Browse Available Vans
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DestinationsPage;
