import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

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
            <a href="#home" className="text-fashion-dark-gray hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-fashion-dark-gray hover:text-primary transition-colors">About</a>
            <a href="#feedback" className="text-fashion-dark-gray hover:text-primary transition-colors">Feedback</a>
            <a href="#contact" className="text-fashion-dark-gray hover:text-primary transition-colors">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-fashion-dark-gray"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#home" className="text-fashion-dark-gray hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-fashion-dark-gray hover:text-primary transition-colors">About</a>
              <a href="#feedback" className="text-fashion-dark-gray hover:text-primary transition-colors">Feedback</a>
              <a href="#contact" className="text-fashion-dark-gray hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
