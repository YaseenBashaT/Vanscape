
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface VanSearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const VanSearchBar = ({ searchTerm, setSearchTerm }: VanSearchBarProps) => {
  return (
    <div className="relative flex-grow transition-all duration-200 animate-fade-in">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
      <Input
        placeholder="Search by name or location..."
        className="pl-9 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default VanSearchBar;
