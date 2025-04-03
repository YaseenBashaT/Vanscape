
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortOption } from "@/data/vansData";

interface VanResultsHeaderProps {
  count: number;
  sortOption: SortOption;
  setSortOption: (option: SortOption) => void;
}

const VanResultsHeader = ({
  count,
  sortOption,
  setSortOption,
}: VanResultsHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <p className="text-gray-600">
        Showing {count} {count === 1 ? "van" : "vans"}
      </p>
      <Select 
        value={sortOption} 
        onValueChange={(value) => setSortOption(value as SortOption)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured">Featured</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
          <SelectItem value="newest">Newest First</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default VanResultsHeader;
