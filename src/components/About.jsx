import React from 'react';
import { Heart, Handshake, DollarSign, Users2 } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users2,
      title: "Direct Connection",
      description: "We eliminated unclear middlemen — buyers and sellers meet directly."
    },
    {
      icon: Handshake,
      title: "One-to-One Meetings",
      description: "Every deal starts with a one-to-one meeting. No guesswork."
    },
    {
      icon: DollarSign,
      title: "Honest Pricing",
      description: "We charge 50% less brokerage than market rates — honest pricing."
    },
    {
      icon: Heart,
      title: "Reshaping Real Estate",
      description: "Join us in reshaping real estate, one honest deal at a time."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Deal Acres</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Deal Acres Office" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in Hisar, Haryana, we started with a mission — to bring trust and 
              transparency to the property market.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every home has a story — and this is ours. We believe that finding the 
              perfect property should be a transparent, trustworthy, and affordable experience 
              for everyone involved.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-blue-800 font-medium italic">
                "Join us in reshaping real estate, one honest deal at a time."
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;