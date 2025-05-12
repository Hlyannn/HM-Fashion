
import React, { useRef, useState, FormEvent } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  const handleInputFocus = () => {
    gsap.to(inputRef.current, {
      scale: 1.02,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };
  
  const handleInputBlur = () => {
    gsap.to(inputRef.current, {
      scale: 1,
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate successful subscription
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    // Reset the form
    setEmail('');
    
    // Add animation for success
    if (inputRef.current) {
      gsap.timeline()
        .to(inputRef.current, {
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out'
        })
        .to(inputRef.current, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.in'
        });
    }
  };

  return (
    <section className="py-20 bg-fashion-blush bg-opacity-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg text-gray-600">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
          <div className="flex-grow">
            <Input
              ref={inputRef}
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="w-full px-6 py-6 text-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button 
            type="submit"
            className="bg-fashion-dark-gray hover:bg-primary text-white text-lg px-8 py-6"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
