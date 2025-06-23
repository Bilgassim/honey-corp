
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "IA Conversationnelle",
      description: "Chatbots intelligents et assistants virtuels pour améliorer l'expérience client 24/7.",
      features: ["Support client automatisé", "Traitement du langage naturel", "Intégration omnicanale"],
      icon: "🤖"
    },
    {
      title: "Analyse Prédictive",
      description: "Anticipez les tendances et prenez des décisions éclairées grâce à l'analyse de données avancée.",
      features: ["Prévisions de ventes", "Détection d'anomalies", "Optimisation des processus"],
      icon: "📊"
    },
    {
      title: "Automatisation Intelligente",
      description: "Automatisez vos tâches répétitives et libérez le potentiel de vos équipes.",
      features: ["Workflows automatisés", "Traitement de documents", "Intégrations API"],
      icon: "⚡"
    },
    {
      title: "Vision par Ordinateur",
      description: "Analysez et comprenez vos données visuelles pour des insights révolutionnaires.",
      features: ["Reconnaissance d'images", "Contrôle qualité", "Surveillance intelligente"],
      icon: "👁️"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Nos Solutions IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos solutions d'intelligence artificielle peuvent transformer 
            votre entreprise et accélérer votre croissance.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-gradient border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-spark-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Prêt à transformer votre entreprise ?
          </p>
          <button className="bg-gradient-to-r from-spark-600 to-purple-600 hover:from-spark-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Planifier une consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
