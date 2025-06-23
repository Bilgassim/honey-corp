
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-fondatrice",
      company: "EcoStartup",
      content: "HoneyCorp nous a aidés à réduire notre consommation énergétique de 45% en 6 mois. Leur approche personnalisée et leur expertise technique sont remarquables.",
      rating: 5,
      avatar: "👩‍💼",
      impact: "45% de réduction énergétique"
    },
    {
      name: "Marc Dubois",
      role: "CTO",
      company: "GreenTech Solutions",
      content: "L'installation de panneaux solaires par HoneyCorp a dépassé nos attentes. Nous sommes maintenant autonomes énergétiquement et économisons 2000€/mois.",
      rating: 5,
      avatar: "👨‍💻",
      impact: "2000€/mois économisés"
    },
    {
      name: "Julie Martin",
      role: "Directrice RSE",
      company: "InnovateCorp",
      content: "Grâce à HoneyCorp, nous avons obtenu notre certification B-Corp en temps record. Leur accompagnement stratégique a été décisif pour notre transformation.",
      rating: 5,
      avatar: "👩‍🎓",
      impact: "Certification B-Corp obtenue"
    }
  ];

  const certifications = [
    { name: "🌿 B-Corp Certified", logo: "🌿" },
    { name: "⚡ ISO 14001", logo: "⚡" },
    { name: "🏆 Label E+C-", logo: "🏆" },
    { name: "🌍 ADEME Partenaire", logo: "🌍" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-nature-100 text-nature-700 rounded-full text-sm font-medium mb-4">
            Témoignages
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Ils ont fait le choix de l'écologie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos solutions ont transformé ces start-ups et les ont aidées 
            à atteindre leurs objectifs environnementaux tout en optimisant leurs coûts.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-gradient border-0 eco-shadow hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Rating stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                {/* Testimonial content */}
                <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Impact badge */}
                <div className="bg-nature-100 text-nature-700 px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
                  💚 {testimonial.impact}
                </div>
                
                {/* Author info */}
                <div className="border-t pt-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                      <div className="text-sm text-nature-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Partners */}
        <div className="bg-gradient-to-r from-nature-50 to-ocean-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Certifications & Partenaires</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white rounded-xl eco-shadow">
                <div className="text-3xl mb-2">{cert.logo}</div>
                <div className="text-sm font-medium text-gray-700">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Rejoignez plus de 50 start-ups qui nous font confiance
          </p>
          <button className="nature-gradient text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Voir tous les cas clients
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
