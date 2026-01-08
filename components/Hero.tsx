
import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gray-900 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-white space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <Star className="text-orange-400 h-4 w-4 fill-current" />
            <span className="text-sm font-medium">Líderes en Diseño Digital e Impresión</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-poppins leading-tight">
            Elevamos tu Marca al <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-orange-400">Siguiente Nivel</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
            Desde sublimación y estampado DTF de alta calidad hasta desarrollo web de vanguardia y branding estratégico. Convertimos tus ideas en resultados tangibles.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contacto" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all hover:shadow-lg hover:shadow-indigo-500/25">
              Empieza tu Proyecto <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#servicios" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all">
              Ver Servicios
            </a>
          </div>

          <div className="flex items-center space-x-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500 h-5 w-5" />
              <span>Calidad Premium</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500 h-5 w-5" />
              <span>Entrega Rápida</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" 
              alt="Design Studio" 
              className="w-full h-auto"
            />
            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-1">Impacto Visual</p>
              <p className="text-lg">"El diseño no es solo lo que se ve, sino cómo funciona."</p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500 rounded-2xl -rotate-12 opacity-30 -z-10"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600 rounded-2xl rotate-12 opacity-30 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
