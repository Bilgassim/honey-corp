
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Contact, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    setTimeout(() => {
      toast({
        title: "Demande envoyée ! 🌱",
        description: "Notre équipe vous contactera dans les 24h pour discuter de votre projet.",
      });
      setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const projectTypes = [
    'Audit énergétique',
    'Installation solaire',
    'Certification environnementale',
    'Conseil stratégique RSE',
    'Mobilité électrique',
    'Autre projet'
  ];

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-nature-100 text-nature-700 rounded-full text-sm font-medium mb-4">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Démarrons votre projet ensemble
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à faire le grand saut vers la durabilité ? Nos experts vous accompagnent 
            gratuitement pour définir la meilleure stratégie pour votre start-up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="card-gradient border-0 eco-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <Mail className="mr-3 text-nature-600" size={24} />
                  Demande de devis gratuit
                </CardTitle>
                <p className="text-gray-600">
                  Remplissez ce formulaire et recevez une proposition personnalisée sous 24h
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border-nature-200 focus:border-nature-500"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email professionnel *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border-nature-200 focus:border-nature-500"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Start-up / Entreprise *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full border-nature-200 focus:border-nature-500"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Type de projet *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-nature-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nature-500"
                      >
                        <option value="">Sélectionnez un projet</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-nature-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nature-500"
                      placeholder="Parlez-nous de vos objectifs, contraintes et timeline..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full nature-gradient text-white py-3 hover:shadow-lg transition-all duration-300"
                  >
                    {isSubmitting ? 'Envoi en cours...' : '🌱 Envoyer ma demande'}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d'être contacté par HoneyCorp concernant votre projet.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact info & Newsletter */}
          <div className="space-y-6">
            <Card className="card-gradient border-0 eco-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                  <Contact className="mr-3 text-nature-600" size={20} />
                  Informations de contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-nature-600 mr-3 mt-1" size={16} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">contact@honeycorp.fr</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-nature-600 mr-3 mt-1" size={16} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Adresse</h4>
                    <p className="text-gray-600">
                      42 Avenue de la Transition<br />
                      69000 Lyon, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-nature-600 mr-3 mt-1" size={16} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Horaires</h4>
                    <p className="text-gray-600">
                      Lun-Ven : 9h-18h<br />
                      Réponse sous 24h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 eco-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  📧 Newsletter HoneyCorp
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Recevez nos conseils éco-responsables, études de cas clients et actualités de la transition énergétique.
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="votre@email.com" 
                    className="flex-1 border-nature-200"
                  />
                  <Button className="nature-gradient text-white whitespace-nowrap">
                    S'abonner
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  1 email par mois, désabonnement en 1 clic
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 eco-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  🚀 Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Consultation gratuite de 45 minutes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Solutions 100% sur-mesure
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Accompagnement de A à Z
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-nature-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    ROI garanti sous 12 mois
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
