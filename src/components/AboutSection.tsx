
const AboutSection = () => {
  const values = [
    {
      title: "Innovation Durable",
      description: "Nous développons des solutions technologiques respectueuses de l'environnement pour un avenir meilleur.",
      icon: "🔬",
      color: "nature"
    },
    {
      title: "Impact Positif",
      description: "Chaque projet que nous menons contribue activement à la réduction de l'empreinte carbone.",
      icon: "🌍",
      color: "ocean"
    },
    {
      title: "Partenariat",
      description: "Nous créons des relations durables avec nos clients pour un accompagnement sur le long terme.",
      icon: "🤝",
      color: "earth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-nature-100 text-nature-700 rounded-full text-sm font-medium mb-4">
                À propos de HoneyCorp
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Notre Mission pour la Planète
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Chez HoneyCorp, nous sommes convaincus que la technologie et l'écologie peuvent 
                s'allier pour créer un monde meilleur. Notre équipe d'experts accompagne les 
                start-ups dans leur transformation écologique en proposant des solutions sur-mesure.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fondée en 2020 par des entrepreneurs passionnés d'environnement, HoneyCorp 
                s'est donnée pour mission de rendre accessible la transition énergétique aux 
                entreprises innovantes, quelle que soit leur taille.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 card-gradient rounded-xl eco-shadow">
                <div className="text-3xl font-bold gradient-text">2020</div>
                <div className="text-sm text-gray-600">Année de création</div>
              </div>
              <div className="text-center p-4 card-gradient rounded-xl eco-shadow">
                <div className="text-3xl font-bold gradient-text">15</div>
                <div className="text-sm text-gray-600">Experts passionnés</div>
              </div>
            </div>
          </div>

          {/* Right content - Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Nos Valeurs Fondamentales</h3>
            {values.map((value, index) => (
              <div 
                key={index} 
                className="card-gradient rounded-xl p-6 eco-shadow hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl p-3 bg-white rounded-full shadow-sm">{value.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-6">Notre Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous imaginons un monde où chaque start-up peut contribuer positivement à l'environnement 
              grâce à des technologies vertes accessibles, performantes et rentables. Un écosystème 
              d'innovation où durabilité rime avec croissance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
