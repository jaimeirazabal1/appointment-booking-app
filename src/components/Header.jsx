import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-4">
      <h1 className="text-3xl font-bold text-center">Cita Rápida</h1>
      <nav className="flex justify-around mt-2">
        <Link to="/" className="mx-2">Inicio</Link>
        <Link to="/history" className="mx-2">Historial</Link>
        <Link to="/profile" className="mx-2">Perfil</Link>
      </nav>
    </header>
  );
};

export default Header;
