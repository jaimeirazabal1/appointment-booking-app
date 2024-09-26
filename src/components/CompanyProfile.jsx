import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CompanyProfile = () => {
  const location = useLocation();
  const companyId = parseInt(location.pathname.split('/')[2], 10);
  const companies = useSelector((state) => state.bookings.companies);
  const company = companies.find((c) => c.id === companyId);

  return (
    <div className="p-4">
      {company ? (
        <>
          <h2 className="text-2xl font-bold">{company.name}</h2>
          <img src={company.photo} alt={company.name} className="w-full h-64 object-cover rounded mb-4" />
          <p className="mb-4">{company.description}</p>
          
          <h3 className="text-xl font-semibold">Servicios Ofrecidos</h3>
          <ul className="list-disc pl-5">
            {company.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          
          <h3 className="text-lg font-semibold mt-6">Citas Ocupadas</h3>
          {company.bookings.length === 0 ? (
            <p>No hay citas ocupadas.</p>
          ) : (
            <ul className="list-disc pl-5">
              {company.bookings.map((booking, index) => (
                <li key={index}>
                  {booking.service} - {booking.date} a las {booking.time}
                </li>
              ))}
            </ul>
          )}
          
          <a href={`/booking?companyId=${company.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
            Agendar Cita
          </a>
        </>
      ) : (
        <p>Empresa no encontrada.</p>
      )}
    </div>
  );
};

export default CompanyProfile;
