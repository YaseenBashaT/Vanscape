import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock 
} from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useAppContext } from "@/context/AppContext";

const ContactPage = () => {
  const { theme } = useAppContext();
  const isDark = theme === "dark";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: ""
    });
  };

  return (
    <Layout>
      {/* Page Header */}
      <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} py-8 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-vanscape-charcoal'} mb-2`}>Contact Us</h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Have questions? We're here to help you plan your perfect van adventure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className={`${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'} p-6 rounded-lg shadow-sm h-full transition-colors duration-300`}>
              <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-inherit'}`}>Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className={`h-5 w-5 ${isDark ? 'text-blue-400' : 'text-vanscape-blue'} mr-3 mt-1`} />
                  <div>
                    <h3 className={`font-medium ${isDark ? 'text-white' : ''}`}>Email</h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>hello@vanscape.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className={`h-5 w-5 ${isDark ? 'text-blue-400' : 'text-vanscape-blue'} mr-3 mt-1`} />
                  <div>
                    <h3 className={`font-medium ${isDark ? 'text-white' : ''}`}>Phone</h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className={`h-5 w-5 ${isDark ? 'text-blue-400' : 'text-vanscape-blue'} mr-3 mt-1`} />
                  <div>
                    <h3 className={`font-medium ${isDark ? 'text-white' : ''}`}>Office</h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      123 Adventure Road<br />
                      Portland, OR 97201
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className={`h-5 w-5 ${isDark ? 'text-blue-400' : 'text-vanscape-blue'} mr-3 mt-1`} />
                  <div>
                    <h3 className={`font-medium ${isDark ? 'text-white' : ''}`}>Business Hours</h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      Monday-Friday: 9AM - 6PM<br />
                      Saturday: 10AM - 4PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className={`${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'} p-6 rounded-lg shadow-sm transition-colors duration-300`}>
              <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : ''}`}>Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : ''}`}>
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={isDark ? 'bg-gray-700 border-gray-600' : ''}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : ''}`}>
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={isDark ? 'bg-gray-700 border-gray-600' : ''}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : ''}`}>
                      Phone Number
                    </label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className={isDark ? 'bg-gray-700 border-gray-600' : ''}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : ''}`}>
                      Inquiry Type
                    </label>
                    <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                      <SelectTrigger className={isDark ? 'bg-gray-700 border-gray-600' : ''}>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="booking">Booking Question</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : ''}`}>
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                    className={isDark ? 'bg-gray-700 border-gray-600' : ''}
                  />
                </div>
                
                <Button type="submit" className="w-full sm:w-auto bg-vanscape-blue hover:bg-blue-600">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12 rounded-lg overflow-hidden h-[400px] shadow-sm">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178129.98680138782!2d-122.7341639750512!3d45.543712950771716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1648130694611!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Vanscape Location"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
