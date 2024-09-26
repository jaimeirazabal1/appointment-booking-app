import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl">Cita Rápida</h1>
      <nav>
        <Link to="/" className="mx-2">Inicio</Link>
        <Link to="/booking" className="mx-2">Reservar Cita</Link>
        <Link to="/history" className="mx-2">Historial</Link>
        <Link to="/profile" className="mx-2">Perfil</Link>
      </nav>
    </header>
  );
};

export default Header;
