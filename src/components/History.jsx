import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserBookings } from '../features/userBookingsSlice'; // Importar selector de userBookings
import { FaCalendarAlt, FaClock, FaInfoCircle, FaUser } from 'react-icons/fa'; // Importar íconos
import Modal from 'react-modal'; // Usar un modal para mostrar detalles adicionales

Modal.setAppElement('#root'); // Asegurarse de que el modal esté correctamente enlazado a la app

const History = () => {
  const bookings = useSelector(selectUserBookings); // Obtener las reservas del usuario
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  console.log('selectedBooking',selectedBooking)
  const openModal = (booking) => {
    setSelectedBooking(booking);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBooking(null);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Historial de Reservas</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500 text-center">No hay reservas realizadas.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking, index) => (
            <li key={index} className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
              {/* Parte izquierda: Icono y detalles de la reserva */}
              <div className="flex items-center">
                <div className="mr-4 text-blue-500">
                  <FaCalendarAlt size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-700">{booking.service}</p>
                  <p className="text-gray-500 flex items-center">
                    <FaClock className="mr-1" /> {booking.date} a las {booking.time}
                  </p>
                  {booking.professional && (
                    <p className="text-gray-500 flex items-center">
                      <FaUser className="mr-1" /> {booking.professional}
                    </p>
                  )}
                </div>
              </div>

              {/* Parte derecha: Botón de acción */}
              <div>
                <button
                  onClick={() => openModal(booking)}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  <FaInfoCircle size={24} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal para mostrar más detalles */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="relative bg-white p-6 rounded-lg shadow-2xl max-w-lg mx-auto border-t-4 border-blue-500"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {selectedBooking && (
          <div>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition duration-300"
            >
              ✕
            </button>

            <h2 className="text-2xl font-extrabold text-center mb-4 text-blue-600">
              Detalles de la Reserva
            </h2>

            <div className="text-left space-y-4">
              <p className="text-lg">
                <strong className="font-semibold text-gray-700">Servicio:</strong>{' '}
                <span className="text-gray-600">{selectedBooking.service}</span>
              </p>

              <p className="text-lg">
                <strong className="font-semibold text-gray-700">Profesional:</strong>{' '}
                <span className="text-gray-600">{selectedBooking.professional || 'N/A'}</span>
              </p>

              <p className="text-lg">
                <strong className="font-semibold text-gray-700">Fecha:</strong>{' '}
                <span className="text-gray-600">{selectedBooking.date}</span>
              </p>

              <p className="text-lg">
                <strong className="font-semibold text-gray-700">Hora:</strong>{' '}
                <span className="text-gray-600">{selectedBooking.time}</span>
              </p>

              <p className="text-lg">
                <strong className="font-semibold text-gray-700">Empresa:</strong>{' '}
                <span className="text-gray-600">{selectedBooking.company}</span>
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
};

export default History;
