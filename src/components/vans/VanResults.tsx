
import { Van } from "@/data/vansData";
import VanCard from "@/components/vans/VanCard";
import { Button } from "@/components/ui/button";

interface VanResultsProps {
  filteredVans: Van[];
  clearFilters: () => void;
}

const VanResults = ({ filteredVans, clearFilters }: VanResultsProps) => {
  return (
    <>
      {filteredVans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVans.map((van) => (
            <VanCard key={van.id} {...van} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No vans found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search filters to find what you're looking for.
          </p>
          <Button variant="outline" onClick={clearFilters}>
            Reset All Filters
          </Button>
        </div>
      )}
    </>
  );
};

export default VanResults;
