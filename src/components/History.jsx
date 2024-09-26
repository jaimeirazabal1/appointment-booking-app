import React from 'react';
import { useSelector } from 'react-redux';
import { selectBookings } from '../features/bookingsSlice';

const History = ({ selectedCompanyId }) => {
  const companies = useSelector(selectBookings).companies; // Asegúrate de que esto sea correcto

  // Encuentra la empresa seleccionada por su ID
  const company = companies.find((c) => c.id === selectedCompanyId);
  const bookings = company ? company.bookings : []; // Asegúrate de que bookings sea un array

  return (
    <div>
      <h2 className="text-xl font-bold">Historial de Reservas</h2>
      {bookings.length === 0 ? (
        <p>No hay reservas realizadas.</p>
      ) : (
        <ul className="list-disc pl-5 mt-2">
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.service} - {booking.date} a las {booking.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
