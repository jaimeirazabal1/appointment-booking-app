import React from 'react';
import { useSelector } from 'react-redux';
import { selectBookings } from '../features/bookingsSlice';

const Profile = () => {
  const companies = useSelector(selectBookings).companies; // Asegúrate de que esta sea la ruta correcta
  const bookings = companies.flatMap(company => company.bookings); // Aplanar los bookings

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Perfil</h2>
      
      <h3 className="text-lg font-semibold mt-6">Historial de Reservas</h3>
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

export default Profile;
