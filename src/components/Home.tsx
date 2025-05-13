import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2 }
    )
    .fromTo(taglineRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 },
      "-=0.8"
    );
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={heroRef} 
      id="home"
      className="relative min-h-screen flex items-center justify-center py-24"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-black bg-opacity-40 z-10"
          aria-hidden="true"
        ></div>
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="Fashion model" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 
          ref={titleRef} 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          style={{ opacity: 0 }}
        >
          Trendy Looks. Timeless Style.
        </h1>
        <p 
          ref={taglineRef} 
          className="text-xl md:text-2xl text-white mb-10"
          style={{ opacity: 0 }}
        >
          Upgrade your wardrobe with the latest fashion.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
