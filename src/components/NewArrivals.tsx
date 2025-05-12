
import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';

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
  const sliderRef = useRef<HTMLDivElement>(null);
  
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
    
    gsap.fromTo(sliderRef.current?.querySelectorAll('.product-card'),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 70%"
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section ref={sectionRef} className="py-20 bg-fashion-cream">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-4">New Arrivals</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Fresh styles just landed</p>
        
        <div ref={sliderRef} className="px-4">
          <Slider {...sliderSettings}>
            {products.map(product => (
              <div key={product.id} className="product-card px-2">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
