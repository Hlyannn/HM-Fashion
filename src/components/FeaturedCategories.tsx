
import React, { useRef, useEffect } from 'react';
import anime from 'animejs';

type CategoryCardProps = {
  title: string;
  image: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = cardRef.current;
    
    const handleMouseEnter = () => {
      if (element) {
        anime({
          targets: element.querySelector('img'),
          scale: 1.1,
          duration: 800,
          easing: 'easeOutQuad'
        });
        anime({
          targets: element.querySelector('.overlay'),
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          duration: 800,
          easing: 'easeOutQuad'
        });
        anime({
          targets: element.querySelector('h3'),
          translateY: -10,
          duration: 600,
          easing: 'easeOutQuad'
        });
      }
    };
    
    const handleMouseLeave = () => {
      if (element) {
        anime({
          targets: element.querySelector('img'),
          scale: 1.0,
          duration: 800,
          easing: 'easeOutQuad'
        });
        anime({
          targets: element.querySelector('.overlay'),
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          duration: 800,
          easing: 'easeOutQuad'
        });
        anime({
          targets: element.querySelector('h3'),
          translateY: 0,
          duration: 600,
          easing: 'easeOutQuad'
        });
      }
    };
    
    element?.addEventListener('mouseenter', handleMouseEnter);
    element?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element?.removeEventListener('mouseenter', handleMouseEnter);
      element?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="group cursor-pointer relative rounded-lg overflow-hidden h-[400px] shadow-lg"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-all duration-700"
        />
        <div className="overlay absolute inset-0 bg-black bg-opacity-40 transition-all duration-300"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-3xl font-bold text-white z-10">{title}</h3>
      </div>
    </div>
  );
};

const FeaturedCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Categories</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Explore our collection</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard 
            title="Men's Wear" 
            image="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          />
          <CategoryCard 
            title="Women's Wear" 
            image="https://images.unsplash.com/photo-1523260578934-e9318da58c8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          />
          <CategoryCard 
            title="Accessories" 
            image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
