import React from 'react';
import { MapPin, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 text-blue-600 font-medium mb-4">
              <MapPin className="h-5 w-5" />
              <span>Hisar, Haryana</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Property Partner in{' '}
              <span className="text-blue-600">Hisar</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connecting buyers and sellers directly with complete transparency, 
              honest pricing, and 50% less brokerage than market rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Find Properties
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium text-lg">
                List Your Property
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50%</div>
                <div className="text-gray-600">Less Brokerage</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600">Properties Sold</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Modern House" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Properties</h3>
              <p className="text-gray-600">Curated selection of the finest properties in Hisar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;