
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Product type definition
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
};

// Mock product data
const products: Product[] = [
  {
    id: 1,
    name: 'Classic White Tee',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: "Men's"
  },
  {
    id: 2,
    name: 'Summer Dress',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: "Women's"
  },
  {
    id: 3,
    name: 'Leather Jacket',
    price: '$199.99',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: "Men's"
  },
  {
    id: 4,
    name: 'Designer Bag',
    price: '$129.99',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  },
  {
    id: 5,
    name: 'Spring Blouse',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: "Women's"
  },
  {
    id: 6,
    name: 'Silver Watch',
    price: '$159.99',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-fashion-dark-gray text-white text-xs px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-fashion-dark-gray font-bold mt-2">{product.price}</p>
      </CardContent>
    </Card>
  );
};

const NewArrivals = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = Math.ceil(products.length / getItemsPerView());
  
  // Determine how many items to show based on screen width
  function getItemsPerView() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  }
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );
    
    gsap.fromTo(productsRef.current?.querySelectorAll('.product-card'),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top 70%"
        }
      }
    );
    
    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const itemsPerView = getItemsPerView();
  const visibleProducts = products.slice(
    currentSlide * itemsPerView,
    (currentSlide * itemsPerView) + itemsPerView
  );

  return (
    <section ref={sectionRef} className="py-20 bg-fashion-cream">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-4">New Arrivals</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Fresh styles just landed</p>
        
        <div className="relative px-4">
          <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProducts.map(product => (
              <div key={product.id} className="product-card px-2">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Previous products"
            >
              <ChevronLeft size={20} />
            </button>
            {Array.from({ length: maxSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-fashion-dark-gray' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Next products"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
