import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../features/bookingsSlice';
import { addUserBooking } from '../features/userBookingsSlice'; // Importar la acción
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom'; // Importar useNavigate
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaUserAlt, FaClock, FaConciergeBell } from 'react-icons/fa'; // Importar iconos

const Booking = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate(); // Crear la instancia de navigate
  const query = new URLSearchParams(location.search);
  const companyId = parseInt(query.get('companyId'), 10);
  const companies = useSelector((state) => state.bookings.companies);
  const user = useSelector((state) => state.user.user); // Obtener información del usuario
  const company = companies.find((c) => c.id === companyId);

  const [service, setService] = useState('');
  const [professional, setProfessional] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');

  // Obtener la lista de profesionales disponibles para el servicio seleccionado
  const professionals = company?.services.find((s) => s.name === service)?.professionals || [];

  const bookedTimes = company?.bookings
    .filter((b) => b.date === date.toISOString().split('T')[0])
    .map((b) => b.time);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBooking = { service, professional, date: date.toISOString().split('T')[0], time, userId: user.id };
    
    if (bookedTimes.includes(time)) {
      await Swal.fire({
        title: '¡Error!',
        text: 'No hay disponibilidad para este servicio en esta fecha y hora.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      return;
    }

    // Añadir la reserva tanto a las empresas como al historial del usuario
    dispatch(addBooking({ companyId, booking: newBooking }));
    dispatch(addUserBooking(newBooking)); // Guardar en el slice de userBookings

    await Swal.fire({
      title: '¡Reserva Confirmada!',
      text: `Has reservado ${service} con ${professional} el ${date.toLocaleDateString()} a las ${time} en ${company?.name}.`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });

    // Redirigir al historial de reservas
    navigate('/history');

    // Limpiar el estado
    setService('');
    setProfessional('');
    setDate(new Date());
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">Reservar Cita en {company?.name}</h2>
      
      {/* Selección de servicio */}
      <div className="flex items-center mb-4">
        <FaConciergeBell className="text-blue-500 mr-3" />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          required
        >
          <option value="">Selecciona un servicio</option>
          {company?.services.map((serviceObj, index) => (
            <option key={index} value={serviceObj.name}>{serviceObj.name}</option>
          ))}
        </select>
      </div>

      {/* Selección de profesional (si está disponible) */}
      {professionals.length > 0 && (
        <div className="flex items-center mb-4">
          <FaUserAlt className="text-blue-500 mr-3" />
          <select
            value={professional}
            onChange={(e) => setProfessional(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Selecciona un profesional</option>
            {professionals.map((prof, index) => (
              <option key={index} value={prof}>{prof}</option>
            ))}
          </select>
        </div>
      )}

      {/* Selección de fecha */}
      <div className="flex items-center mb-4">
        <FaCalendarAlt className="text-blue-500 mr-3" />
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          dateFormat="yyyy-MM-dd"
          required
        />
      </div>

      {/* Selección de hora */}
      <div className="flex items-center mb-4">
        <FaClock className="text-blue-500 mr-3" />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      
      {/* Botón de confirmación */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold shadow-md transition duration-300"
      >
        Confirmar Reserva
      </button>
    </form>
  );
};

export default Booking;
