
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to change navbar styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-fashion-dark-gray">HM Fashion</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-fashion-dark-gray hover:text-primary transition-colors">Men</a>
            <a href="#" className="text-fashion-dark-gray hover:text-primary transition-colors">Women</a>
            <a href="#" className="text-fashion-dark-gray hover:text-primary transition-colors">Accessories</a>
            <a href="#" className="text-fashion-dark-gray hover:text-primary transition-colors">Collections</a>
            <button className="bg-fashion-dark-gray text-white px-6 py-2 rounded hover:bg-primary transition-colors">
              Shop Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-fashion-dark-gray"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#" className="text-fashion-dark-gray hover:text-primary transition-colors">Men</a>
              <a href="#" className="text-fashion-dark-gray hover:text-primary transition-colors">Women</a>
              <a href="#" className="text-fashion-dark-gray hover:text-primary transition-colors">Accessories</a>
              <a href="#" className="text-fashion-dark-gray hover:text-primary transition-colors">Collections</a>
              <button className="bg-fashion-dark-gray text-white px-6 py-2 rounded hover:bg-primary transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
