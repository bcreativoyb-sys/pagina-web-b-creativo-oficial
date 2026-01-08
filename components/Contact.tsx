
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="text-white space-y-8">
              <h3 className="text-4xl font-bold font-poppins">¿Tienes un proyecto en mente?</h3>
              <p className="text-xl text-gray-400">
                Estamos listos para escucharte y llevar tu marca al siguiente nivel. Contáctanos hoy mismo para una asesoría personalizada.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Phone className="text-orange-500 h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Llámanos o WhatsApp</p>
                    <p className="text-xl font-semibold">+57 320 554 7765</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Mail className="text-indigo-400 h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Escríbenos</p>
                    <p className="text-xl font-semibold">hola@designstudiox.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <MapPin className="text-teal-400 h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p className="text-xl font-semibold">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
                    <input 
                      type="text" 
                      placeholder="Ej. Juan Pérez" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
                    <input 
                      type="email" 
                      placeholder="juan@empresa.com" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Servicio de Interés</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
                    <option>Sublimación / DTF</option>
                    <option>Diseño Web</option>
                    <option>Branding</option>
                    <option>Publicidad Completa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                  <textarea 
                    rows={4} 
                    placeholder="Cuéntanos un poco sobre tu proyecto..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  ></textarea>
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-indigo-500/20 group">
                  <span>Enviar Mensaje</span>
                  <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
