
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface VanExtendedFiltersProps {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  clearFilters: () => void;
}

const VanExtendedFilters = ({
  priceRange,
  setPriceRange,
  clearFilters,
}: VanExtendedFiltersProps) => {
  return (
    <div className="mt-4 pt-4 border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Price Range</h3>
          <div className="px-2">
            <Slider
              defaultValue={priceRange}
              min={0}
              max={300}
              step={10}
              onValueChange={setPriceRange}
            />
            <div className="flex justify-between mt-2 text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}+</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Location</h3>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Any location" className="pl-9" />
          </div>
        </div>
        <div className="flex items-end">
          <Button className="w-full" variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VanExtendedFilters;
