
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-spark-200 to-purple-200 opacity-50 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Transformez votre entreprise avec{' '}
            <span className="gradient-text">l'Intelligence Artificielle</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI Spark révolutionne votre productivité grâce à des solutions IA sur-mesure. 
            Automatisez, optimisez et innovez en quelques clics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-gradient-to-r from-spark-600 to-purple-600 hover:from-spark-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              Essayer gratuitement
            </Button>
            <Button variant="outline" size="lg" className="border-spark-300 text-spark-600 hover:bg-spark-50 px-8 py-4 text-lg">
              Voir une démo
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-12">
            <p className="text-sm text-gray-500 mb-4">Ils nous font confiance</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">TechCorp</div>
              <div className="text-2xl font-bold text-gray-400">InnovateCo</div>
              <div className="text-2xl font-bold text-gray-400">FutureStart</div>
              <div className="text-2xl font-bold text-gray-400">DataPro</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-spark-600 transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
