
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import VanSearchBar from "@/components/vans/VanSearchBar";
import VanTypeFilter from "@/components/vans/VanTypeFilter";
import VanFilterToggle from "@/components/vans/VanFilterToggle";
import VanFilterSidebar from "@/components/vans/VanFilterSidebar";
import VanResultsHeader from "@/components/vans/VanResultsHeader";
import VanResults from "@/components/vans/VanResults";
import { vans } from "@/data/vansData";
import { useAppContext } from "@/context/AppContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const VansPage = () => {
  // Get filter state from context
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
  
  // Local state for mobile filter visibility
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  // For desktop, we'll use a separate sidebar state
  const [showDesktopSidebar, setShowDesktopSidebar] = useState(true);

  // Filter vans based on criteria
  let filteredVans = vans.filter(van => {
    const matchesSearch = van.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         van.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = vanType === "all" || van.type.toLowerCase() === vanType.toLowerCase();
    const matchesPrice = van.price >= priceRange[0] && van.price <= priceRange[1];
    
    return matchesSearch && matchesType && matchesPrice;
  });

  // Sort vans based on selected option
  filteredVans = [...filteredVans].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        // In a real app, you would compare dates. For demo purposes, we'll use ID
        return b.id - a.id;
      default: // featured
        return 0; // maintain the original order
    }
  });

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setVanType("all");
    setPriceRange([0, 300]);
    setSortOption("featured");
  };

  // Set initial sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      setShowDesktopSidebar(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-gray-100 dark:bg-gray-800 py-8 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-vanscape-charcoal dark:text-white">Browse Our Vans</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Find the perfect van for your next adventure
          </p>
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
              count={filteredVans.length}
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
            
            {/* Results Grid */}
            <VanResults filteredVans={filteredVans} clearFilters={clearFilters} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VansPage;
