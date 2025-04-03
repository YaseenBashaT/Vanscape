
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VanType } from "@/data/vansData";

interface VanTypeFilterProps {
  vanType: VanType;
  setVanType: (type: VanType) => void;
}

const VanTypeFilter = ({ vanType, setVanType }: VanTypeFilterProps) => {
  return (
    <Select 
      value={vanType} 
      onValueChange={(value) => setVanType(value as VanType)}
    >
      <SelectTrigger 
        className="w-full md:w-[180px] transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      >
        <SelectValue placeholder="Van Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Types</SelectItem>
        <SelectItem value="budget">Budget</SelectItem>
        <SelectItem value="camper">Camper</SelectItem>
        <SelectItem value="luxury">Luxury</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default VanTypeFilter;
