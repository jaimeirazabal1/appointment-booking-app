import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../features/bookingsSlice';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const companyId = parseInt(query.get('companyId'), 10);
  const companies = useSelector((state) => state.bookings.companies);
  const company = companies.find((c) => c.id === companyId);

  const [service, setService] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');

  const bookedTimes = company?.bookings
    .filter((b) => b.date === date.toISOString().split('T')[0])
    .map((b) => b.time);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBooking = { service, date: date.toISOString().split('T')[0], time };
    
    if (bookedTimes.includes(time)) {
      await Swal.fire({
        title: '¡Error!',
        text: 'No hay disponibilidad para este servicio en esta fecha y hora.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      return;
    }

    dispatch(addBooking({ companyId: companyId, booking: newBooking }));

    await Swal.fire({
      title: '¡Reserva Confirmada!',
      text: `Has reservado ${service} el ${date.toLocaleDateString()} a las ${time} en ${company?.name}.`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });

    setService('');
    setDate(new Date());
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Reservar Cita en {company?.name}</h2>
      
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded"
        required
      >
        <option value="">Selecciona un servicio</option>
        {company?.services.map((serviceName, index) => (
          <option key={index} value={serviceName}>{serviceName}</option>
        ))}
      </select>

      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        className="block w-full p-2 border border-gray-300 rounded"
        dateFormat="yyyy-MM-dd"
        required
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded"
        required
      />
      
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Confirmar Reserva
      </button>
    </form>
  );
};

export default Booking;
