import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa'; // Importar iconos

const ServiceSearch = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const companies = useSelector((state) => state.bookings.companies);

  // Filtrar empresas en base a la búsqueda
  const filteredCompanies = companies.filter((company) =>
    company.services.some(service => service.name.toLowerCase().includes(query.toLowerCase()))
  );

  const handleSearch = () => {
    const foundCompanies = filteredCompanies;
    if (foundCompanies.length > 0) {
      navigate('/results', { state: { foundCompanies } });
    } else {
      alert('No se encontraron servicios que coincidan con tu búsqueda.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">Buscar Servicios</h2>
      <div className="flex items-center justify-center mb-6">
        <FaSearch size={24} className="text-gray-500 mr-2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar servicio..."
          className="w-full max-w-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 w-full max-w-md mx-auto flex items-center justify-center"
      >
        <FaSearch className="mr-2" /> Buscar
      </button>

      {/* Mostrar coincidencias en tiempo real */}
      {query && filteredCompanies.length > 0 && (
        <ul className="mt-6 space-y-4">
          {filteredCompanies.map((company) => (
            <li key={company.id} className="flex items-center p-4 bg-white shadow-md rounded-lg">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="w-16 h-16 object-cover mr-4 rounded-full border-2 border-blue-500"
              />
              <div>
                <a 
                  href={`/company/${company.id}`} 
                  className="text-xl font-bold text-blue-600 hover:underline"
                >
                  {company.name}
                </a>
                <p className="text-gray-500">Servicios: {company.services.map(service => service.name).join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceSearch;
