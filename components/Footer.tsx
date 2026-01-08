
import React from 'react';
import { Rocket, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Rocket className="text-white h-6 w-6" />
              </div>
              <span className="text-2xl font-bold font-poppins text-gray-900">
                DesignStudio<span className="text-orange-500">X</span>
              </span>
            </a>
            <p className="text-gray-600 text-lg mb-8 max-w-sm">
              Potenciamos negocios a través de diseño innovador y soluciones publicitarias de alto impacto. Tu visión, nuestra pasión.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-indigo-600 hover:scale-110 transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-indigo-600 transition-colors">Servicios</a></li>
              <li><a href="#portafolio" className="hover:text-indigo-600 transition-colors">Portafolio</a></li>
              <li><a href="#contacto" className="hover:text-indigo-600 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Design Studio X. Todos los derechos reservados. Desarrollado con pasión.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
