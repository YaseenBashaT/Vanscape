
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";

interface VanFilterToggleProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const VanFilterToggle = ({ 
  showFilters, 
  setShowFilters 
}: VanFilterToggleProps) => {
  return (
    <Button 
      variant="outline" 
      size="icon"
      onClick={() => setShowFilters(!showFilters)}
      className={`transition-all duration-300 ${showFilters ? "bg-gray-100 dark:bg-gray-700" : ""}`}
    >
      {showFilters ? (
        <motion.div
          initial={{ rotate: -180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <X />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SlidersHorizontal />
        </motion.div>
      )}
    </Button>
  );
};

export default VanFilterToggle;
