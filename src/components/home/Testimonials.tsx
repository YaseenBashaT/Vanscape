
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, location, quote, rating, image }: TestimonialProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex space-x-1 mb-3">
      {Array(5).fill(0).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
    <p className="text-gray-700 mb-4 italic">"{quote}"</p>
    <div className="flex items-center">
      <img 
        src={image} 
        alt={name} 
        className="h-10 w-10 rounded-full object-cover mr-3"
      />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Alex Johnson",
      location: "Los Angeles, CA",
      quote: "Our trip was amazing! The van was spotless, well-equipped, and exactly what we needed for our weekend adventure.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Williams",
      location: "Austin, TX",
      quote: "VacayVanscape made our family trip so convenient. Easy pickup and return process, and the van was perfect for our needs.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Mark Thompson",
      location: "Chicago, IL",
      quote: "We loved the freedom of having our accommodation and transportation in one. Will definitely rent again!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vanscape-charcoal mb-3">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from travelers who have experienced the freedom and adventure of a VacayVanscape rental.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
