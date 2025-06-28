import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Gauge,
  CalendarIcon,
  User,
  MapPin,
  Star,
  Check,
  Award,
  ChevronLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { getVanById } from "@/lib/getVans";

const VanDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [van, setVan] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [activeImage, setActiveImage] = useState(0);
  const [days, setDays] = useState(3);

  useEffect(() => {
    const fetchVan = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!id) {
          throw new Error('Van ID is required');
        }
        
        console.log('Fetching van with ID:', id);
        const data = await getVanById(id);
        console.log('Fetched van data:', data);
        setVan(data);
      } catch (err) {
        console.error('Error fetching van:', err);
        setError(err instanceof Error ? err.message : 'Failed to load van details');
      } finally {
        setLoading(false);
      }
    };

    fetchVan();
  }, [id]);

  const handleStartDateChange = (date: Date | undefined) => {
    setStartDate(date);
    if (date && endDate && date > endDate) {
      setEndDate(undefined);
    }
  };

  const handleEndDateChange = (date: Date | undefined) => {
    setEndDate(date);
    if (date && startDate) {
      const diffTime = Math.abs(date.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
      setDays(diffDays);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-vanscape-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading van details...</p>
        </div>
      </Layout>
    );
  }

  if (error || !van) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Van Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the van you're looking for.</p>
          <p className="text-sm text-gray-500 mb-6">Error: {error}</p>
          <Link to="/vans">
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Vans
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Default images if van doesn't have images
  const defaultImages = [
    van.image || "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551876513-c53dd0f71689?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515876305430-f06edab8282a?q=80&w=1600&auto=format&fit=crop"
  ];

  const images = van.images || defaultImages;
  const totalPrice = van.price * days;

  // Default features and specifications
  const features = van.features || [
    "Comfortable sleeping area", 
    "Kitchenette", 
    "Storage space", 
    "USB charging", 
    "Bluetooth speakers", 
    "Outdoor equipment"
  ];

  const specifications = van.specifications || {
    sleeps: van.sleeps || 2,
    length: "15 ft",
    transmission: "Automatic",
    fuel: "Gasoline",
    mileage: "Unlimited",
    year: 2020,
    mpg: 22
  };

  return (
    <Layout>
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/vans">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Vans
          </Button>
        </Link>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
                <img 
                  src={images[activeImage]} 
                  alt={van.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-vanscape-blue text-white">
                    {van.type}
                  </Badge>
                </div>
                {!van.available && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive" className="text-lg font-semibold px-3 py-1.5">
                      Booked
                    </Badge>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((image: string, index: number) => (
                  <button
                    key={index}
                    className={`aspect-[4/3] rounded-md overflow-hidden ${activeImage === index ? 'ring-2 ring-vanscape-blue' : ''}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${van.name} - Image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Van Information */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold">{van.name}</h1>
                <div className="text-right">
                  <span className="text-2xl font-bold">${van.price}</span>
                  <span className="text-gray-500">/night</span>
                </div>
              </div>
              
              <div className="flex items-center mb-6 text-sm text-gray-600">
                <div className="flex items-center mr-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {van.location}
                </div>
                <div className="flex items-center mr-4">
                  <User className="h-4 w-4 mr-1" />
                  Sleeps {specifications.sleeps}
                </div>
                <div className="flex items-center mr-4">
                  <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400" />
                  <span>4.8</span>
                  <span className="ml-1 text-gray-500">(24 reviews)</span>
                </div>
              </div>
              
              <p className="mb-8 text-gray-700">
                {van.description || `The perfect ${van.type.toLowerCase()} van for your next adventure. This well-equipped van has everything you need for a comfortable journey, featuring modern amenities and reliable performance.`}
              </p>
              
              {/* Features */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-vanscape-green" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Specifications */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-sm text-gray-500">Sleeps</div>
                    <div className="font-medium">{specifications.sleeps} people</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Length</div>
                    <div className="font-medium">{specifications.length}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Transmission</div>
                    <div className="font-medium">{specifications.transmission}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Fuel</div>
                    <div className="font-medium">{specifications.fuel}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Mileage</div>
                    <div className="font-medium">{specifications.mileage}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Year</div>
                    <div className="font-medium">{specifications.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Fuel Efficiency</div>
                    <div className="font-medium">{specifications.mpg} MPG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Booking Card */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md border sticky top-4">
              <div className="mb-6 pb-4 border-b">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">${van.price} x {days} nights</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Cleaning fee</span>
                  <span>$45</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Service fee</span>
                  <span>$30</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total</span>
                  <span>${totalPrice + 45 + 30}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Pick-up Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={startDate}
                          onSelect={handleStartDateChange}
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
                          className="w-full justify-start text-left font-normal"
                          disabled={!startDate}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={endDate}
                          onSelect={handleEndDateChange}
                          disabled={(date) => date < (startDate || new Date())}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full mb-4" 
                size="lg" 
                disabled={!startDate || !endDate || !van.available}
              >
                {van.available ? "Book Now" : "Currently Unavailable"}
              </Button>
              
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Award className="h-4 w-4 mr-1" />
                <span>Free cancellation up to 48 hours before pick-up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VanDetailPage;