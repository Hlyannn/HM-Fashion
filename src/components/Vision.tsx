import React from 'react';
import { cn } from '@/lib/utils';

const Vision = () => {
  return (
    <section id="vision" className="min-h-screen bg-gradient-to-b from-[#8DB580] to-[#8DB580]/90 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-white text-center mb-16 font-poetsen">
            Our Vision
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/95 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-3xl font-semibold text-[#0F5132] mb-6 font-poetsen">
                Bringing Bangkok's Best to Your Doorstep
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At HM Fashion, we envision becoming the premier online destination that seamlessly connects global customers with the vibrant fashion and culinary treasures of Bangkok. Our platform is dedicated to delivering an exceptional shopping experience that combines convenience, quality, and variety.
              </p>
            </div>

            <div className="bg-white/95 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-3xl font-semibold text-[#0F5132] mb-6 font-poetsen">
                Global Fashion Hub
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We aim to be the bridge between Bangkok's unique fashion scene and the world, bringing you the latest trends and styles that make you stand out. Our curated collections reflect the perfect blend of traditional Thai aesthetics and contemporary fashion.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/95 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-[#0F5132] mb-4 font-poetsen">
                Fashion Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We curate the finest fashion pieces from Bangkok's most talented designers and boutiques, bringing you unique styles that blend traditional Thai aesthetics with contemporary trends.
              </p>
            </div>

            <div className="bg-white/95 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-[#0F5132] mb-4 font-poetsen">
                Culinary Delights
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Experience the authentic flavors of Bangkok through our carefully selected range of snacks and treats, delivered fresh to your doorstep from Thailand's most beloved local producers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision; 