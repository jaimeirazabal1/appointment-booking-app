import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaCalendarAlt, FaUserAlt, FaInfoCircle, FaConciergeBell } from 'react-icons/fa'; // Importar íconos

const CompanyProfile = () => {
  const location = useLocation();
  const companyId = parseInt(location.pathname.split('/')[2], 10);
  const companies = useSelector((state) => state.bookings.companies);
  const company = companies.find((c) => c.id === companyId);

  return (
    <div className="p-4">
      {company ? (
        <>
          {/* Información del nombre y la imagen */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">{company.name}</h2>
            <img src={company.photo} alt={company.name} className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
            <p className="text-gray-700 text-lg">{company.description}</p>
          </div>

          {/* Servicios ofrecidos */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
              <FaConciergeBell className="mr-2 text-blue-500" /> Servicios Ofrecidos
            </h3>
            <ul className="space-y-2">
              {company.services.map((service, index) => (
                <li key={index} className="bg-gray-100 p-3 rounded-lg shadow-md flex items-center">
                  <FaUserAlt className="mr-3 text-gray-500" />
                  <span className="text-gray-700 text-lg">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Citas ocupadas */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
              <FaCalendarAlt className="mr-2 text-blue-500" /> Citas Ocupadas
            </h3>
            {company.bookings.length === 0 ? (
              <p className="text-gray-500">No hay citas ocupadas.</p>
            ) : (
              <ul className="space-y-3">
                {company.bookings.map((booking, index) => (
                  <li key={index} className="bg-gray-100 p-3 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                      <p className="text-lg font-medium text-gray-700">{booking.service}</p>
                      <p className="text-gray-500">{booking.date} a las {booking.time}</p>
                    </div>
                    <FaInfoCircle className="text-blue-500" />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Botón para agendar cita */}
          <div className="mt-8 text-center">
            <a
              href={`/booking?companyId=${company.id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg text-lg transition duration-300"
            >
              Agendar Cita
            </a>
          </div>
        </>
      ) : (
        <p>Empresa no encontrada.</p>
      )}
    </div>
  );
};

export default CompanyProfile;
