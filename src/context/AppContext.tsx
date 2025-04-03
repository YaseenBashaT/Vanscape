
import { createContext, useContext, useState, useEffect } from "react";
import { SortOption, VanType } from "@/data/vansData";

// Types for our context
type AppContextType = {
  // Filter state
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  vanType: VanType;
  setVanType: (type: VanType) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  sortOption: SortOption;
  setSortOption: (option: SortOption) => void;
  // Theme state
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

// Provider component
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // Filter state
  const [searchTerm, setSearchTerm] = useState(() => {
    const stored = localStorage.getItem("vanscape_searchTerm");
    return stored ? stored : "";
  });

  const [vanType, setVanType] = useState<VanType>(() => {
    const stored = localStorage.getItem("vanscape_vanType");
    return (stored as VanType) || "all";
  });

  const [priceRange, setPriceRange] = useState<number[]>(() => {
    const stored = localStorage.getItem("vanscape_priceRange");
    return stored ? JSON.parse(stored) : [0, 300];
  });

  const [sortOption, setSortOption] = useState<SortOption>(() => {
    const stored = localStorage.getItem("vanscape_sortOption");
    return (stored as SortOption) || "featured";
  });

  // Theme state
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("vanscape_theme");
    if (stored) return stored as "light" | "dark";
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    
    return "light";
  });

  // Effect to update localStorage when filter state changes
  useEffect(() => {
    localStorage.setItem("vanscape_searchTerm", searchTerm);
    localStorage.setItem("vanscape_vanType", vanType);
    localStorage.setItem("vanscape_priceRange", JSON.stringify(priceRange));
    localStorage.setItem("vanscape_sortOption", sortOption);
  }, [searchTerm, vanType, priceRange, sortOption]);

  // Effect to update localStorage and document when theme changes
  useEffect(() => {
    localStorage.setItem("vanscape_theme", theme);
    
    // Update document class
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // Context value
  const value = {
    searchTerm,
    setSearchTerm,
    vanType,
    setVanType,
    priceRange,
    setPriceRange,
    sortOption,
    setSortOption,
    theme,
    toggleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
