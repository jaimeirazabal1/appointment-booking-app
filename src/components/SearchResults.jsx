import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SearchResults = () => {
    const location = useLocation();
    const { foundCompanies } = location.state || { foundCompanies: [] };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Resultados de Búsqueda</h2>
            {foundCompanies.length === 0 ? (
                <p>No se encontraron empresas para este servicio.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {foundCompanies.map((company) => (
                        <li key={company.id} className="flex items-center mb-2">
                            <img src={company.logo} alt={company.name} className="w-16 h-16 object-cover mr-4 rounded" />
                            <div>
                                <h3 className="font-bold">{company.name}</h3>
                                <p>Servicios: {company.services.join(', ')}</p>
                                {/* Aquí podrías agregar un enlace para agendar una cita */}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchResults;
