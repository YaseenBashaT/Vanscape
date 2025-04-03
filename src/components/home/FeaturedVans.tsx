
import { Button } from "@/components/ui/button";
import VanCard from "../vans/VanCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample van data - this would come from your backend in production
const featuredVans = [
  {
    id: 1,
    name: "Wanderer Pro",
    type: "Camper",
    price: 149,
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
    sleeps: 2,
    available: true
  },
  {
    id: 2,
    name: "Horizon Explorer",
    type: "Luxury",
    price: 199,
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1669665462848-b977ff198756?q=80&w=1600&auto=format&fit=crop",
    sleeps: 4,
    available: true
  },
  {
    id: 3,
    name: "Road Tripper",
    type: "Budget",
    price: 99,
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=1600&auto=format&fit=crop",
    sleeps: 2,
    available: false
  }
];

const FeaturedVans = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-vanscape-charcoal">Featured Vans</h2>
          <Link to="/vans">
            <Button variant="ghost" className="text-vanscape-blue hover:text-blue-700">
              View all
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVans.map((van) => (
            <VanCard key={van.id} {...van} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVans;
