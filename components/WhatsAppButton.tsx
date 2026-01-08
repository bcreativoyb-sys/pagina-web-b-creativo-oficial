
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '3205547765';
  const message = 'Hola, me gustaría recibir más información sobre sus servicios de diseño y publicidad.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end space-y-4">
      {/* Tooltip hint */}
      <div className="bg-white py-2 px-4 rounded-xl shadow-lg border border-gray-100 text-gray-800 text-sm font-semibold opacity-0 hover:opacity-100 transition-opacity flex items-center mb-[-8px]">
        Atención al cliente 📞
      </div>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group relative"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          ¡Chatea con nosotros!
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
