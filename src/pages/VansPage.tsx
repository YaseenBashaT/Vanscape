import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import VanSearchBar from "@/components/vans/VanSearchBar";
import VanTypeFilter from "@/components/vans/VanTypeFilter";
import VanFilterToggle from "@/components/vans/VanFilterToggle";
import VanFilterSidebar from "@/components/vans/VanFilterSidebar";
import VanResultsHeader from "@/components/vans/VanResultsHeader";
import VanResults from "@/components/vans/VanResults";
import { useAppContext } from "@/context/AppContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getVans } from "@/lib/getVans";

const VansPage = () => {
  const { 
    searchTerm, 
    setSearchTerm, 
    vanType, 
    setVanType, 
    priceRange, 
    setPriceRange,
    sortOption,
    setSortOption
  } = useAppContext();
  
  const [vans, setVans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showDesktopSidebar, setShowDesktopSidebar] = useState(true);

  useEffect(() => {
    async function fetchVans() {
      try {
        setLoading(true);
        setError(null);
        console.log("Starting to fetch vans...");
        
        const data = await getVans();
        console.log("Fetched vans data:", data);
        
        if (Array.isArray(data)) {
          setVans(data);
          console.log("Successfully set vans:", data.length, "vans");
        } else {
          console.error("Fetched data is not an array:", data);
          setError("Invalid data format received from server");
          setVans([]);
        }
      } catch (err) {
        console.error("Error in fetchVans:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch vans");
        setVans([]);
      } finally {
        setLoading(false);
      }
    }
  
    fetchVans();
  }, []);
  
  const filteredVans = vans.filter(van => {
    const matchesSearch = van.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         van.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = vanType === "all" || van.type.toLowerCase() === vanType.toLowerCase();
    const matchesPrice = van.price >= priceRange[0] && van.price <= priceRange[1];
    
    return matchesSearch && matchesType && matchesPrice;
  });

  const sortedVans = [...filteredVans].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const clearFilters = () => {
    setSearchTerm("");
    setVanType("all");
    setPriceRange([0, 300]);
    setSortOption("featured");
  };

  useEffect(() => {
    const handleResize = () => {
      setShowDesktopSidebar(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-vanscape-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading vans...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-800 mb-2">Error Loading Vans</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-gray-100 dark:bg-gray-800 py-8 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-vanscape-charcoal dark:text-white">Browse Our Vans</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Find the perfect van for your next adventure
          </p>
          {vans.length > 0 && (
            <p className="text-sm text-gray-500 mt-1">
              Found {vans.length} vans available
            </p>
          )}
        </div>
      </div>
      
      {/* Search and Filter Bar (Mobile) */}
      <div className="border-b dark:border-gray-700 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <VanSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="flex items-center gap-2 w-full md:w-auto">
              <VanTypeFilter vanType={vanType} setVanType={setVanType} />
              <Sheet open={showMobileFilters} onOpenChange={setShowMobileFilters}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className={showMobileFilters ? "bg-gray-100 dark:bg-gray-700" : ""}>
                    <FilterIcon />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="py-6">
                    <h2 className="text-lg font-medium mb-4">Filters</h2>
                    <VanFilterSidebar 
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      clearFilters={clearFilters}
                      vanType={vanType}
                      setVanType={setVanType}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop Layout with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className={`hidden lg:block w-64 shrink-0 transition-all duration-300 ease-in-out ${showDesktopSidebar ? 'opacity-100' : 'w-0 opacity-0'}`}>
            {showDesktopSidebar && (
              <div className="sticky top-8 animate-slide-in-right">
                <div className="p-4 rounded-lg border dark:border-gray-700 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium">Filters</h2>
                    <VanFilterToggle 
                      showFilters={showDesktopSidebar} 
                      setShowFilters={setShowDesktopSidebar} 
                    />
                  </div>
                  <VanFilterSidebar 
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    clearFilters={clearFilters}
                    vanType={vanType}
                    setVanType={setVanType}
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Main Content */}
          <div className="flex-1 transition-all duration-300 ease-in-out">
            {/* Small Toggle for Sidebar on Desktop */}
            <div className="hidden lg:flex mb-4">
              {!showDesktopSidebar && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowDesktopSidebar(true)}
                  className="animate-fade-in"
                >
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Show Filters
                </Button>
              )}
              {/* Search for Desktop */}
              <div className="flex-1 ml-4">
                <VanSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </div>
            </div>
            
            {/* Results Header */}
            <VanResultsHeader 
              count={sortedVans.length}
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
            
            {/* Results Grid */}
            <VanResults filteredVans={sortedVans} clearFilters={clearFilters} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VansPage;