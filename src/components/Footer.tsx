
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: "Énergie Solaire", href: "#solutions" },
      { name: "Audit Énergétique", href: "#solutions" },
      { name: "Mobilité Électrique", href: "#solutions" },
      { name: "Certification RSE", href: "#solutions" }
    ],
    entreprise: [
      { name: "À propos", href: "#about" },
      { name: "Notre équipe", href: "#" },
      { name: "Carrières", href: "#" },
      { name: "Actualités", href: "#" }
    ],
    ressources: [
      { name: "Blog éco-responsable", href: "#" },
      { name: "Guides pratiques", href: "#" },
      { name: "Cas clients", href: "#testimonials" },
      { name: "Centre d'aide", href: "#" }
    ],
    legal: [
      { name: "Mentions légales", href: "#" },
      { name: "Politique de confidentialité", href: "#" },
      { name: "CGV", href: "#" },
      { name: "RGPD", href: "#" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-nature-400 to-ocean-400 bg-clip-text text-transparent mb-4">
              🍯 HoneyCorp
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Accélérons ensemble votre transition vers un avenir durable et profitable. 
              Solutions éco-responsables pour start-ups ambitieuses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nature-400 transition-colors text-2xl" title="LinkedIn">
                💼
              </a>
              <a href="#" className="text-gray-400 hover:text-nature-400 transition-colors text-2xl" title="Twitter">
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-nature-400 transition-colors text-2xl" title="YouTube">
                📺
              </a>
              <a href="#" className="text-gray-400 hover:text-nature-400 transition-colors text-2xl" title="Instagram">
                📸
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center">
              ⚡ Solutions
            </h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-nature-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center">
              🏢 Entreprise
            </h3>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-nature-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center">
              📚 Ressources
            </h3>
            <ul className="space-y-2">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-nature-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center">
              ⚖️ Légal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-nature-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h4 className="text-white font-medium mb-2">🏆 Nos certifications</h4>
              <div className="flex space-x-4 text-sm">
                <span className="text-nature-400">🌿 B-Corp</span>
                <span className="text-ocean-400">⚡ ISO 14001</span>
                <span className="text-earth-400">🏆 ADEME</span>
              </div>
            </div>
            <div className="text-center md:text-right mt-4 md:mt-0">
              <p className="text-gray-400 text-sm mb-1">
                🌱 Impact environnemental positif garanti
              </p>
              <p className="text-nature-400 text-sm font-medium">
                +500 tonnes de CO₂ évitées cette année
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} HoneyCorp. Tous droits réservés. 🌍 Conçu avec amour pour la planète.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made in France</span>
              <span className="text-nature-400">🇫🇷</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
