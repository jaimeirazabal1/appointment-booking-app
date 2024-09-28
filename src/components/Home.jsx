import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarCheck } from 'react-icons/fa'; // Importar icono

const Home = () => {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Bienvenido a <span className="text-blue-500">Cita Rápida</span></h2>
      <p className="text-lg text-gray-700 mb-6">Reserva tu cita de manera rápida y sencilla con nosotros.</p>
      
      <div className="flex justify-center">
        <FaCalendarCheck size={120} className="text-blue-500 mb-6" />
      </div>

      <Link 
        to="/booking" 
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-block"
      >
        Reservar Cita
      </Link>
    </div>
  );
};

export default Home;
