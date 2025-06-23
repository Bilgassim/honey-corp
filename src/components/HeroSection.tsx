
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-nature-200 to-nature-300 opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-ocean-200 to-ocean-300 opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-earth-200 to-earth-300 opacity-20 animate-pulse-soft"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-nature-100 text-nature-700 rounded-full text-sm font-medium">
            🌱 Solutions éco-responsables pour start-ups innovantes
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Accélérez votre{' '}
            <span className="gradient-text">transition écologique</span>
            {' '}avec HoneyCorp
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nous accompagnons les start-ups ambitieuses vers un avenir durable grâce à 
            des solutions d'énergie verte innovantes et des technologies respectueuses de l'environnement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="#solutions">
              <Button size="lg" className="nature-gradient hover:shadow-xl transition-all duration-300 text-white px-8 py-4 text-lg">
                Découvrir nos solutions
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="border-nature-300 text-nature-700 hover:bg-nature-50 px-8 py-4 text-lg">
                Demander un devis gratuit
              </Button>
            </a>
          </div>

          {/* Social proof */}
          <div className="pt-12">
            <p className="text-sm text-gray-500 mb-6">Ils nous font confiance pour leur transition écologique</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-xl font-bold text-gray-400">🌿 EcoStartup</div>
              <div className="text-xl font-bold text-gray-400">⚡ GreenTech</div>
              <div className="text-xl font-bold text-gray-400">🔋 CleanInnovation</div>
              <div className="text-xl font-bold text-gray-400">🌍 SustainableCorp</div>
            </div>
          </div>

          {/* Impact metrics */}
          <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm text-gray-600">Start-ups accompagnées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">-40%</div>
              <div className="text-sm text-gray-600">Réduction CO₂ moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-gray-600">Énergie renouvelable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
