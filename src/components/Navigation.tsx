
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#testimonials', label: 'Témoignages' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-nature-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
            >
              🍯 HoneyCorp
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-nature-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-nature-50 rounded-lg relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-nature-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="nature-gradient hover:shadow-lg transition-all duration-300 text-white hover:scale-105"
            >
              Demander un devis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-nature-600 hover:bg-nature-50 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-nature-100 rounded-b-lg shadow-lg">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-nature-600 hover:bg-nature-50 block w-full text-left px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full nature-gradient text-white"
                >
                  Demander un devis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
