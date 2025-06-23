
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "CEO, TechInnovate",
      content: "AI Spark a transformé notre façon de traiter les données clients. Nous avons vu une amélioration de 300% de notre efficacité opérationnelle.",
      rating: 5,
      company: "TechInnovate"
    },
    {
      name: "Pierre Martin",
      role: "CTO, DataFlow",
      content: "L'équipe d'AI Spark a livré exactement ce qu'elle avait promis. Leur solution d'IA conversationnelle a révolutionné notre support client.",
      rating: 5,
      company: "DataFlow"
    },
    {
      name: "Sophie Laurent",
      role: "Directrice Marketing, GrowthCorp",
      content: "Grâce à l'analyse prédictive d'AI Spark, nous anticipons mieux les besoins de nos clients et optimisons nos campagnes marketing.",
      rating: 5,
      company: "GrowthCorp"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment AI Spark aide les entreprises à atteindre leurs objectifs 
            grâce à l'intelligence artificielle.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Rating stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                {/* Testimonial content */}
                <blockquote className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-spark-600 font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Rejoignez des centaines d'entreprises qui nous font confiance
          </p>
          <button className="bg-gradient-to-r from-spark-600 to-purple-600 hover:from-spark-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Voir tous les témoignages
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
