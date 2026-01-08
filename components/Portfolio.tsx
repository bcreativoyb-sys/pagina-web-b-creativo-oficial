
import React from 'react';

const works = [
  { img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800', category: 'Moda / DTF' },
  { img: 'https://images.unsplash.com/photo-1541462608141-67571a670297?auto=format&fit=crop&q=80&w=800', category: 'Branding' },
  { img: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800', category: 'Web Design' },
  { img: 'https://images.unsplash.com/photo-1563906267088-b02d4553584a?auto=format&fit=crop&q=80&w=800', category: 'Publicidad' },
  { img: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&q=80&w=800', category: 'Ilustración' },
  { img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800', category: 'Sublimación' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portafolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 text-left">Casos de Éxito</h2>
            <h3 className="text-4xl font-bold font-poppins text-gray-900 mb-2">Nuestro Portafolio</h3>
            <p className="text-gray-600">Echa un vistazo a algunos de nuestros trabajos más recientes. Resultados que hablan por sí solos.</p>
          </div>
          <button className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-full font-bold transition-all">
            Ver Todo el Trabajo
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer">
              <img 
                src={work.img} 
                alt={work.category} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-orange-400 font-semibold mb-2">{work.category}</span>
                <h4 className="text-white text-2xl font-bold">Proyecto Creativo X</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
