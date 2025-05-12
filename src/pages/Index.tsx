
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import NewArrivals from '@/components/NewArrivals';
import Testimonials from '@/components/Testimonials';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setting up main animations on component mount
    const sections = mainRef.current?.querySelectorAll('section');
    
    if (sections) {
      // Animate each section when it comes into view
      sections.forEach((section, index) => {
        if (index === 0) return; // Skip hero section as it has its own animations
        
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-fashion-light-gray">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <NewArrivals />
        <Testimonials />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
