
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Map, Shield, Zap } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-vanscape-charcoal text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
            alt="Mountain road with van"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About VacayVanscape</h1>
            <p className="text-xl opacity-90 mb-6">
              We're a team of adventure enthusiasts dedicated to helping you explore the world on your terms.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-vanscape-charcoal">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                VacayVanscape started with a simple dream: to make van life accessible to everyone. Founded in 2018 by a group of friends who shared a passion for road trips and outdoor adventures, we've grown from a small fleet of three vans to becoming a leading van rental service across the western United States.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to provide well-maintained, comfortable vans that allow you to experience the freedom of the open road. We believe that the journey is just as important as the destination, and our vans are designed to make that journey unforgettable.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format&fit=crop"
                alt="Group of friends by a van"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-vanscape-charcoal">Founded in 2018</p>
                <p className="text-gray-600">Portland, Oregon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-vanscape-charcoal mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At VacayVanscape, we're guided by a set of core principles that define how we operate and serve our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-vanscape-blue/10 p-3 rounded-full inline-block mb-4">
                <Map className="h-6 w-6 text-vanscape-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Adventure First</h3>
              <p className="text-gray-600">
                We believe in the transformative power of adventure and aim to make it accessible to everyone.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-vanscape-blue/10 p-3 rounded-full inline-block mb-4">
                <Shield className="h-6 w-6 text-vanscape-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety & Quality</h3>
              <p className="text-gray-600">
                Every van in our fleet is meticulously maintained and equipped with safety features.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-vanscape-blue/10 p-3 rounded-full inline-block mb-4">
                <Calendar className="h-6 w-6 text-vanscape-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexibility</h3>
              <p className="text-gray-600">
                Your journey should be on your terms, with the freedom to explore at your own pace.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-vanscape-blue/10 p-3 rounded-full inline-block mb-4">
                <Zap className="h-6 w-6 text-vanscape-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to reducing our environmental impact and promoting responsible tourism.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-vanscape-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our selection of premium vans and find the perfect vehicle for your next journey.
          </p>
          <Button size="lg" variant="secondary">
            Browse Vans
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
