
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Énergie Solaire Intelligente",
      description: "Installation et optimisation de panneaux solaires avec IA pour maximiser votre production énergétique.",
      features: ["Analyse prédictive", "Maintenance automatisée", "ROI garanti en 3 ans"],
      icon: "☀️",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Audit Énergétique Complet",
      description: "Diagnostic approfondi de votre consommation pour identifier les axes d'amélioration prioritaires.",
      features: ["Mesures en temps réel", "Recommandations personnalisées", "Plan d'action détaillé"],
      icon: "📊",
      color: "from-nature-400 to-nature-600"
    },
    {
      title: "Solutions de Stockage Vert",
      description: "Batteries écologiques et systèmes de stockage d'énergie pour optimiser votre autonomie.",
      features: ["Technologie lithium-fer", "Gestion intelligente", "Recyclage intégral"],
      icon: "🔋",
      color: "from-ocean-400 to-ocean-600"
    },
    {
      title: "Mobilité Électrique",
      description: "Infrastructure de recharge et flotte électrique pour une mobilité 100% propre.",
      features: ["Bornes intelligentes", "Gestion de flotte", "Maintenance incluse"],
      icon: "🚗",
      color: "from-earth-400 to-earth-600"
    },
    {
      title: "Certification Carbone",
      description: "Accompagnement pour obtenir vos certifications environnementales et valoriser vos efforts.",
      features: ["Label B-Corp", "ISO 14001", "Bilan carbone certifié"],
      icon: "🏆",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Conseil Stratégique RSE",
      description: "Stratégie globale de responsabilité sociétale adaptée à vos objectifs business.",
      features: ["Roadmap personnalisée", "Formation équipes", "Suivi des KPI"],
      icon: "🎯",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <section id="solutions" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-nature-100 text-nature-700 rounded-full text-sm font-medium mb-4">
            Nos Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Des Solutions sur Mesure pour Votre Transition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De l'audit énergétique à la certification, nous vous accompagnons à chaque étape 
            de votre transformation écologique avec des solutions éprouvées et innovantes.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="card-gradient border-0 eco-shadow hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-nature-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <Button 
                    variant="outline" 
                    className="w-full border-nature-300 text-nature-700 hover:bg-nature-50 transition-colors"
                  >
                    En savoir plus
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 eco-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Prêt à démarrer votre transition ?
            </h3>
            <p className="text-gray-600 mb-6">
              Nos experts vous accompagnent gratuitement pour définir la solution 
              parfaitement adaptée à vos besoins et objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button className="nature-gradient text-white hover:shadow-lg transition-all duration-300">
                  Consultation gratuite
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-nature-300 text-nature-700 hover:bg-nature-50">
                  Télécharger notre brochure
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
