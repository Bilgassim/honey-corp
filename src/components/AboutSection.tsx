
const AboutSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "Nous repoussons constamment les limites de l'IA pour créer des solutions révolutionnaires.",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "Notre équipe d'experts s'engage à livrer des résultats exceptionnels à chaque projet.",
      icon: "⭐"
    },
    {
      title: "Impact",
      description: "Nous mesurons notre succès par l'impact positif que nous créons pour nos clients.",
      icon: "📈"
    }
  ];

  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Chez AI Spark, nous croyons que l'intelligence artificielle doit être accessible 
                à toutes les entreprises, quelle que soit leur taille. Notre mission est de 
                démocratiser l'IA en proposant des solutions simples, puissantes et abordables.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fondée par une équipe d'experts en IA et en développement produit, nous combinons 
                innovation technique et vision business pour créer des solutions qui génèrent 
                un impact réel et mesurable.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-gray-600">Taux de satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50M+</div>
                <div className="text-sm text-gray-600">Données traitées</div>
              </div>
            </div>
          </div>

          {/* Right content - Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Nos Valeurs</h3>
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{value.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
