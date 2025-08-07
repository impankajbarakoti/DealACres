import React from 'react';
import { MapPin, Bed, Bath, Square, Eye } from 'lucide-react';

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Modern Villa in Sector 15",
      location: "Sector 15, Hisar",
      price: "₹85,00,000",
      beds: 4,
      baths: 3,
      area: "2400 sq ft",
      type: "Villa"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Luxury Apartment",
      location: "Red Square Mall Area, Hisar",
      price: "₹65,00,000",
      beds: 3,
      baths: 2,
      area: "1800 sq ft",
      type: "Apartment"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Family Home",
      location: "Civil Lines, Hisar",
      price: "₹75,00,000",
      beds: 3,
      baths: 2,
      area: "2000 sq ft",
      type: "House"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Commercial Space",
      location: "Main Market, Hisar",
      price: "₹1,20,00,000",
      beds: 0,
      baths: 2,
      area: "3000 sq ft",
      type: "Commercial"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Spacious Bungalow",
      location: "Model Town, Hisar",
      price: "₹95,00,000",
      beds: 5,
      baths: 4,
      area: "2800 sq ft",
      type: "Bungalow"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Premium Flat",
      location: "Sector 7, Hisar",
      price: "₹55,00,000",
      beds: 2,
      baths: 2,
      area: "1400 sq ft",
      type: "Flat"
    }
  ];

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties in Hisar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.type}
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                </div>
                
                <div className="flex justify-between items-center text-gray-600 text-sm border-t pt-4">
                  {property.beds > 0 && (
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.beds} Beds</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-medium text-lg border-2 border-gray-300 hover:border-gray-400">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;