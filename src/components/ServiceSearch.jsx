import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ServiceSearch = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const companies = useSelector((state) => state.bookings.companies);
  
  // Filtrar empresas en base a la búsqueda
  const filteredCompanies = companies.filter((company) =>
    company.services.some(service => service.toLowerCase().includes(query.toLowerCase()))
  );

  const handleSearch = () => {
    const foundCompanies = filteredCompanies; // Usar el resultado filtrado
    if (foundCompanies.length > 0) {
      navigate('/results', { state: { foundCompanies } });
    } else {
      alert('No se encontraron servicios que coincidan con tu búsqueda.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Buscar Servicios</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar servicio..."
        className="block w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Buscar
      </button>

      {/* Mostrar coincidencias en tiempo real */}
      {query && filteredCompanies.length > 0 && (
        <ul className="list-disc pl-5">
          {filteredCompanies.map((company) => (
            <li key={company.id} className="flex items-center mb-2">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="w-16 h-16 object-cover mr-4 rounded" 
              />
              <div>
                <a 
                  href={`/company/${company.id}`} 
                  className="font-bold text-blue-500 hover:underline"
                >
                  {company.name}
                </a>
                <p>Servicios: {company.services.join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceSearch;
