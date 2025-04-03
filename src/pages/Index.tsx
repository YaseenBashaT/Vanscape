import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedVans from "@/components/home/FeaturedVans";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import DestinationsSection from "@/components/home/DestinationsSection";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedVans />
      <HowItWorks />
      <DestinationsSection />
      <Testimonials />
      
      {/* Call to Action */}
      <section className="py-16 bg-vanscape-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who have explored the country with Vanscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/vans">
              <Button size="lg" variant="secondary">
                Browse Vans
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-vanscape-blue">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
