import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'vision', 'mission', 'feedback'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
    { id: 'feedback', label: 'Feedback' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 shadow-lg py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="relative"
          >
            <span className="text-4xl font-bold tracking-tight text-[#0A5C36] font-poetsen">
              HM Fashion
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'relative text-2xl font-medium transition-all duration-300 group font-poetsen px-4 py-2 rounded-full',
                  activeSection === item.id
                    ? 'text-white bg-[#0F5132]'
                    : 'text-[#0A5C36] hover:bg-[#14452F] hover:text-white'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute inset-0 rounded-full bg-[#18392B]/20 transform scale-0 transition-transform duration-300',
                    activeSection === item.id ? 'scale-100' : 'group-hover:scale-100'
                  )}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-3 rounded-full transition-all duration-300",
              isMobileMenuOpen
                ? "bg-[#0F5132] text-white rotate-90"
                : "text-[#0A5C36] hover:bg-[#14452F]/20"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 absolute top-full left-0 right-0 shadow-lg animate-fade-in">
            <div className="flex flex-col items-center py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'text-2xl font-medium px-6 py-3 rounded-full transition-all duration-300 font-poetsen w-48 text-center',
                    activeSection === item.id
                      ? 'bg-[#0F5132] text-white transform scale-105'
                      : 'text-[#0A5C36] hover:bg-[#14452F] hover:text-white hover:scale-105'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
