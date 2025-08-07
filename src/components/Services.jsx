import React from 'react';
import { Home, TrendingUp, FileCheck, Calculator, Users, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Property Buying",
      description: "Find your dream home with our extensive property listings and expert guidance.",
      features: ["Residential Properties", "Commercial Spaces", "Investment Properties"]
    },
    {
      icon: TrendingUp,
      title: "Property Selling",
      description: "Get the best value for your property with our transparent selling process.",
      features: ["Market Analysis", "Property Valuation", "Direct Buyer Connection"]
    },
    {
      icon: FileCheck,
      title: "Legal Documentation",
      description: "Complete legal support for all your property transactions.",
      features: ["Document Verification", "Registration Support", "Legal Compliance"]
    },
    {
      icon: Calculator,
      title: "Property Valuation",
      description: "Accurate property valuations based on current market trends.",
      features: ["Market Research", "Comparative Analysis", "Fair Pricing"]
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Expert advice for all your real estate investment decisions.",
      features: ["Investment Planning", "Market Insights", "Risk Assessment"]
    },
    {
      icon: Shield,
      title: "Trusted Transactions",
      description: "Secure and transparent transactions with complete peace of mind.",
      features: ["Verified Properties", "Secure Payments", "Transaction Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate solutions designed to make your property journey smooth and transparent.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 group">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;