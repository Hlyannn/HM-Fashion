import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample images for shirts
  const shirtImages = [
    '/images/Aboutclothing1.jpg',
    '/images/Aboutclothing2.jpg',
    '/images/Aboutclothing3.jpg',
    '/images/Aboutclothing4.jpg',
    '/images/Aboutclothing5.jpg'
  ];

  // Automatically transition between images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % shirtImages.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [shirtImages.length]);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">HM Fashion Core Values</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Text */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-gray-600 mb-4">
            HM Fashion started as an online shop offering trendy clothes straight from Bangkok. 
            Now, we’ve expanded! In addition to stylish BKK outfits, we also bring you popular Bangkok snacks. Whether you're looking to buy for yourself or stock up in bulk, HM Fashion offers both retail and wholesale options all from one easy shopping platform.
            </p>
          </div>

          {/* Right Column - Image Carousel */}
          <div className="md:w-1/2">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-md">
              {/* Image Stack */}
              {shirtImages.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out`,
                    activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  )}
                >
                  <img
                    src={image}
                    alt={`Fashion shirt ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}

              {/* Pagination Dots */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
                {shirtImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      activeIndex === index
                        ? 'bg-white scale-110'
                        : 'bg-white/50 hover:bg-white/80'
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
