import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold">Bienvenido a Cita Rápida</h2>
      <p className="mt-4">Reserva tu cita fácilmente con nosotros.</p>
      <Link to="/booking" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Reservar Cita
      </Link>
    </div>
  );
};

export default Home;
