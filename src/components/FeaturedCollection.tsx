
import React, { useRef, useEffect, useState } from 'react';
import anime from 'animejs';
import { cn } from '@/lib/utils';

const FeaturedCollection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Sample images for shirts
  const shirtImages = [
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1588&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=1026&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582551272941-4dc13d5279d1?q=80&w=1074&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1470&auto=format&fit=crop'
  ];
  
  // Animation for image transitions
  useEffect(() => {
    // Interval for changing images every 3 seconds
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % shirtImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [shirtImages.length]);
  
  // Animation for when images transition
  useEffect(() => {
    if (sliderRef.current) {
      const currentImage = sliderRef.current.querySelector(`.image-slide-${activeIndex}`);
      
      anime({
        targets: currentImage,
        opacity: [0, 1],
        scale: [0.9, 1],
        easing: 'easeOutQuad',
        duration: 800
      });
    }
  }, [activeIndex]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Explore Our Collection</h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Text */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-3">Shirts That Define Style</h3>
            <p className="text-gray-600 mb-4">
              From casual cottons to premium fits — we blend comfort with trend. Our collection 
              represents the perfect balance between timeless classics and contemporary fashion.
            </p>
            <p className="text-gray-600">
              Each piece is carefully designed with attention to detail, quality fabrics, and 
              impeccable craftsmanship to ensure you always look your best.
            </p>
          </div>
          
          {/* Right Column - Image Slider (Reduced Size) */}
          <div className="md:w-1/2" ref={sliderRef}>
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-md">
              {/* Image Stack */}
              {shirtImages.map((image, index) => (
                <div 
                  key={index} 
                  className={cn(
                    `image-slide-${index} absolute inset-0 w-full h-full transition-opacity duration-1000`,
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
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeIndex === index 
                        ? "bg-white scale-110" 
                        : "bg-white/50 hover:bg-white/80"
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

export default FeaturedCollection;
