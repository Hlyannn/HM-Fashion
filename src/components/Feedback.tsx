
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';

// Testimonial type definition
type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
};

// Mock testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophie Allen',
    role: 'Fashion Blogger',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'HM Fashion has completely transformed my wardrobe. The quality and style are unmatched, and I always receive compliments on their pieces.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Roberts',
    role: 'Photographer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'As someone who works in a creative field, finding clothes that are both functional and stylish is essential. HM Fashion delivers on both fronts.',
    rating: 4
  },
  {
    id: 3,
    name: 'Amelia Parker',
    role: 'Interior Designer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'I appreciate the sustainable approach HM Fashion takes with their collections. Eco-friendly and fashionable is exactly what I look for.',
    rating: 5
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <Card className="testimonial-card h-full bg-white shadow-md">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-lg">{testimonial.name}</h4>
            <p className="text-gray-600">{testimonial.role}</p>
          </div>
        </div>
        
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={i < testimonial.rating ? "#F59E0B" : "#E5E7EB"}
              className="mr-1"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-700 italic flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
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
    
    gsap.fromTo(cardsRef.current?.querySelectorAll('.testimonial-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%"
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-fashion-lavender bg-opacity-20">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Real stories from satisfied customers</p>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
