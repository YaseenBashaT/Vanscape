
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";
import { AuthProvider } from "@/context/AuthContext";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import VansPage from "./pages/VansPage";
import VanDetailPage from "./pages/VanDetailPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import DestinationsPage from "./pages/DestinationsPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <AuthProvider>
            <BrowserRouter>
              <TooltipProvider>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/vans" element={<VansPage />} />
                  <Route path="/vans/:id" element={<VanDetailPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/destinations" element={<DestinationsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/auth" element={<AuthPage />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Toaster />
                <Sonner />
              </TooltipProvider>
            </BrowserRouter>
          </AuthProvider>
        </AppProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
