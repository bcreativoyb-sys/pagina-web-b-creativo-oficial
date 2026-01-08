
import React from 'react';
import { Shirt, Globe, Layers, Palette, BarChart3, Image as ImageIcon } from 'lucide-react';

const services = [
  {
    title: 'Sublimación Premium',
    description: 'Personalización de alta fidelidad en textiles, tazas y artículos promocionales con colores vibrantes que no se caen.',
    icon: <Shirt className="h-8 w-8 text-white" />,
    img: 'https://images.unsplash.com/photo-1563170351-be31f88c0c8c?auto=format&fit=crop&q=80&w=600',
    color: 'bg-indigo-600'
  },
  {
    title: 'Estampado DTF',
    description: 'La tecnología más moderna de impresión textil. Durabilidad extrema y detalles minuciosos en cualquier color de prenda.',
    icon: <Layers className="h-8 w-8 text-white" />,
    img: 'https://images.unsplash.com/photo-1582733315328-849a7bb7ef72?auto=format&fit=crop&q=80&w=600',
    color: 'bg-orange-500'
  },
  {
    title: 'Diseño Web UX/UI',
    description: 'Páginas web modernas, rápidas y optimizadas para convertir visitantes en clientes. Desarrollo a medida.',
    icon: <Globe className="h-8 w-8 text-white" />,
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=600',
    color: 'bg-teal-500'
  },
  {
    title: 'Branding e Identidad',
    description: 'Creamos marcas con alma. Logotipos, manuales de identidad y estrategia visual completa para tu negocio.',
    icon: <Palette className="h-8 w-8 text-white" />,
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
    color: 'bg-purple-600'
  },
  {
    title: 'Publicidad Exterior',
    description: 'Vallas, pendones, y todo lo necesario para que tu negocio sea visible en el mundo físico.',
    icon: <ImageIcon className="h-8 w-8 text-white" />,
    img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=600',
    color: 'bg-pink-600'
  },
  {
    title: 'Marketing Digital',
    description: 'Estrategias de contenido y pauta publicitaria para escalar tus ventas de manera constante.',
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    color: 'bg-blue-600'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Nuestras Soluciones</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">Todo lo que necesitas para que tu marca brille</h3>
          <p className="text-lg text-gray-600">
            Combinamos tecnología de punta con creatividad sin límites para ofrecerte resultados excepcionales en cada proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className={`absolute top-4 left-4 ${service.color} p-3 rounded-2xl shadow-lg`}>
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold font-poppins text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-6 font-bold text-indigo-600 flex items-center hover:translate-x-2 transition-transform">
                  Saber más <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
