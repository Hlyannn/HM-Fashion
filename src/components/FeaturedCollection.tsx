
import React, { useRef, useEffect } from 'react';
import anime from 'animejs';

const FeaturedCollection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (gridRef.current) {
      anime({
        targets: gridRef.current.querySelectorAll('.collection-image'),
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(100),
        easing: 'easeOutQuad',
        duration: 800
      });
    }
  }, []);

  // Sample images for shirts
  const shirtImages = [
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1588&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=1026&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582551272941-4dc13d5279d1?q=80&w=1074&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1470&auto=format&fit=crop'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Our Collection</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Text */}
          <div className="md:w-1/3 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Shirts That Define Style</h3>
            <p className="text-lg text-gray-600 mb-6">
              From casual cottons to premium fits — we blend comfort with trend. Our collection 
              represents the perfect balance between timeless classics and contemporary fashion.
            </p>
            <p className="text-lg text-gray-600">
              Each piece is carefully designed with attention to detail, quality fabrics, and 
              impeccable craftsmanship to ensure you always look your best.
            </p>
          </div>
          
          {/* Right Column - Grid of Images */}
          <div className="md:w-2/3" ref={gridRef}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {shirtImages.map((image, index) => (
                <div 
                  key={index} 
                  className="collection-image aspect-square overflow-hidden rounded-md shadow-md opacity-0"
                >
                  <img 
                    src={image} 
                    alt={`Fashion shirt ${index + 1}`} 
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
