import React from 'react';
import { cn } from '@/lib/utils';

const Mission = () => {
  return (
    <section id="mission" className="min-h-screen bg-gradient-to-b from-[#F8F9FA] to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-[#0A5C36] text-center mb-16 font-poetsen">
            Our Mission
          </h1>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Fashion Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-[#0F5132] mb-4 font-poetsen">
                Fashion Excellence
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To offer a diverse range of trendy and high-quality clothing inspired by Bangkok's unique style, ensuring that every customer feels confident and stylish.
              </p>
            </div>

            {/* Snacks Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-[#0F5132] mb-4 font-poetsen">
                Authentic Thai Snacks
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To introduce customers to the authentic flavors of Bangkok by providing a wide variety of delicious, locally-loved snacks delivered right to their doorsteps.
              </p>
            </div>

            {/* Customer Experience Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-[#0F5132] mb-4 font-poetsen">
                Exceptional Customer Experience
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To make shopping easy and enjoyable by offering both retail and wholesale options, ensuring accessibility and satisfaction for all customers.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-[#0F5132] mb-6 font-poetsen text-center">
              Our Promise
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              We are dedicated to bringing the best of Bangkok to you, whether it's through our carefully curated fashion collection or our selection of authentic Thai snacks. Our commitment to quality, authenticity, and customer satisfaction drives everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission; 