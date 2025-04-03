
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, LogOut } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useAppContext();
  const { currentUser, signOut } = useAuth();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsMenuOpen(false); // Close mobile menu if open
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const handleSignIn = () => {
    navigate("/auth");
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const getUserInitials = () => {
    if (!currentUser?.displayName) return "U";
    return currentUser.displayName
      .split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <nav className={`${isDark ? 'bg-gray-900' : 'bg-white'} shadow-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-vanscape-blue'}`}>Vanscape</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/vans" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-vanscape-blue'} font-medium`}>
              Browse Vans
            </Link>
            <Link to="/destinations" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-vanscape-blue'} font-medium`}>
              Destinations
            </Link>
            <Link to="/about" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-vanscape-blue'} font-medium`}>
              About Us
            </Link>
            <Link to="/contact" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-vanscape-blue'} font-medium`}>
              Contact
            </Link>
            <Button variant="ghost" size="icon" className="ml-2">
              <Search className="h-5 w-5" />
            </Button>
            
            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={currentUser.photoURL || undefined} alt={currentUser.displayName || "User"} />
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem disabled>
                    <span className="font-medium">{currentUser.email}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" className="ml-2" onClick={handleSignIn}>
                <User className="h-5 w-5 mr-2" />
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-expanded={isMenuOpen}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`pt-2 pb-4 space-y-1 sm:px-3 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <Link 
              to="/vans" 
              className={`block px-3 py-2 text-base font-medium ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              Browse Vans
            </Link>
            <Link 
              to="/destinations" 
              className={`block px-3 py-2 text-base font-medium ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              Destinations
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 text-base font-medium ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              {currentUser ? (
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={currentUser.photoURL || undefined} alt={currentUser.displayName || "User"} />
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">{currentUser.email}</div>
                  </div>
                  <Button variant="outline" className="w-full justify-start" onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </Button>
                </div>
              ) : (
                <Button variant="outline" className="w-full" onClick={handleSignIn}>
                  <User className="h-5 w-5 mr-2" />
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
