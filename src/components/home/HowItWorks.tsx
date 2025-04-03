
import { CalendarCheck, MapPin, Truck, UserCheck } from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step = ({ icon, title, description }: StepProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-vanscape-blue/10 p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps: StepProps[] = [
    {
      icon: <CalendarCheck className="h-8 w-8 text-vanscape-blue" />,
      title: "Choose Your Dates",
      description: "Select your pick-up and return dates to check availability for your adventure."
    },
    {
      icon: <Truck className="h-8 w-8 text-vanscape-blue" />,
      title: "Select Your Van",
      description: "Browse our selection of premium vans and choose the perfect one for your trip."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-vanscape-blue" />,
      title: "Book & Confirm",
      description: "Complete your booking with our secure payment system and receive instant confirmation."
    },
    {
      icon: <MapPin className="h-8 w-8 text-vanscape-blue" />,
      title: "Hit The Road",
      description: "Pick up your van and start your adventure with 24/7 roadside assistance."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-vanscape-charcoal mb-3">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Renting a van with VacayVanscape is easy. Follow these simple steps to get on the road.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Step {...step} />
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+4rem)] right-0 h-0.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
