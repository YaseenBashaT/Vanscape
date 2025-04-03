
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <div className="relative bg-vanscape-charcoal text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533591362725-979dfce672b5?q=80&w=1920&auto=format&fit=crop"
          alt="Van in scenic landscape"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Adventure Awaits, Wheels Included
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Explore the open road with our premium van rentals. Comfortable, reliable, and ready for your next journey.
          </p>
          
          {/* Search Form */}
          <div className="bg-white/95 rounded-lg p-5 shadow-lg text-vanscape-charcoal">
            <h3 className="text-lg font-semibold mb-4">Find Your Perfect Van</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Pick-up Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-white text-vanscape-charcoal border-vanscape-charcoal hover:bg-gray-100"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Select date"}
                  </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Drop-off Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-white text-vanscape-charcoal border-vanscape-charcoal hover:bg-gray-100"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Select date"}
                  </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <Link to="/vans">
              <Button className="w-full bg-vanscape-blue hover:bg-blue-600">
                Search Available Vans
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
