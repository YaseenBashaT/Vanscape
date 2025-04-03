
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { VanType } from "@/data/vansData";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface VanFilterSidebarProps {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  clearFilters: () => void;
  vanType: VanType;
  setVanType: (type: VanType) => void;
}

const VanFilterSidebar = ({
  priceRange,
  setPriceRange,
  clearFilters,
  vanType,
  setVanType,
}: VanFilterSidebarProps) => {
  const [openSections, setOpenSections] = useState({
    vanType: true,
    price: true,
    location: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Van Type Section */}
      <Collapsible 
        open={openSections.vanType} 
        onOpenChange={() => toggleSection("vanType")}
        className="transition-all duration-200"
      >
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <h3 className="text-sm font-medium">Van Type</h3>
          <ChevronDown className={`h-4 w-4 transition-transform ${openSections.vanType ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2 space-y-2">
          <Select value={vanType} onValueChange={(value) => setVanType(value as VanType)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Van Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="budget">Budget</SelectItem>
              <SelectItem value="camper">Camper</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>
      
      <Separator />
      
      {/* Price Range Section */}
      <Collapsible 
        open={openSections.price} 
        onOpenChange={() => toggleSection("price")}
        className="transition-all duration-200"
      >
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <h3 className="text-sm font-medium">Price Range</h3>
          <ChevronDown className={`h-4 w-4 transition-transform ${openSections.price ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2 space-y-4">
          <div className="px-2">
            <Slider
              value={priceRange}
              min={0}
              max={300}
              step={10}
              onValueChange={setPriceRange}
              className="my-6"
            />
            <div className="flex justify-between mt-2 text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}+</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <Separator />
      
      {/* Location Section */}
      <Collapsible 
        open={openSections.location} 
        onOpenChange={() => toggleSection("location")}
        className="transition-all duration-200"
      >
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <h3 className="text-sm font-medium">Location</h3>
          <ChevronDown className={`h-4 w-4 transition-transform ${openSections.location ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2 space-y-2">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Any location" className="pl-9" />
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <Separator />
      
      {/* Clear Filters */}
      <Button 
        className="w-full animate-fade-in transition-all duration-200 hover:scale-105" 
        variant="outline" 
        onClick={clearFilters}
      >
        Clear All Filters
      </Button>
    </div>
  );
};

export default VanFilterSidebar;
