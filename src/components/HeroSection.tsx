
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/images/green-technology-bg.jpg)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-nature-600/30 via-nature-500/20 to-ocean-600/30"></div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-nature-200/20 to-nature-300/20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-ocean-200/20 to-ocean-300/20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-earth-200/10 to-earth-300/10 animate-pulse-soft"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-nature-700 rounded-full text-sm font-medium shadow-lg">
            🌱 Solutions éco-responsables pour start-ups innovantes
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Accélérez votre{' '}
            <span className="bg-gradient-to-r from-nature-300 to-ocean-300 bg-clip-text text-transparent">
              transition écologique
            </span>
            {' '}avec HoneyCorp
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-black/10 rounded-lg p-4">
            Nous accompagnons les start-ups ambitieuses vers un avenir durable grâce à 
            des solutions d'énergie verte innovantes et des technologies respectueuses de l'environnement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#solutions')}
              className="nature-gradient hover:shadow-xl transition-all duration-300 text-white px-8 py-4 text-lg hover:scale-105"
            >
              Découvrir nos solutions
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('#contact')}
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
            >
              Demander un devis gratuit
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-12">
            <p className="text-sm text-white/70 mb-6">Ils nous font confiance pour leur transition écologique</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="text-xl font-bold text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">🌿 EcoStartup</div>
              <div className="text-xl font-bold text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">⚡ GreenTech</div>
              <div className="text-xl font-bold text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">🔋 CleanInnovation</div>
              <div className="text-xl font-bold text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">🌍 SustainableCorp</div>
            </div>
          </div>

          {/* Impact metrics */}
          <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-white/80">Start-ups accompagnées</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">-40%</div>
              <div className="text-sm text-white/80">Réduction CO₂ moyenne</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-white/80">Énergie renouvelable</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
