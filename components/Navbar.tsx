
import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

interface Props {
  scrolled: boolean;
}

const Navbar: React.FC<Props> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Rocket className="text-white h-6 w-6" />
          </div>
          <span className={`text-2xl font-bold font-poppins ${scrolled ? 'text-indigo-600' : 'text-white'}`}>
            DesignStudio<span className="text-orange-500">X</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-semibold transition-colors ${scrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition-transform hover:scale-105 active:scale-95"
          >
            Cotizar Ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl p-6 flex flex-col space-y-4 border-t">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 font-semibold text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-indigo-600 text-white text-center py-3 rounded-lg font-bold"
            onClick={() => setIsOpen(false)}
          >
            Cotizar Ahora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
