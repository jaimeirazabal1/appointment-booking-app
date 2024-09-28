import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { FaUserCircle, FaEnvelope, FaEdit } from 'react-icons/fa';

const Profile = () => {
  const user = useSelector(selectUser); // Obtener la información del usuario

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        {/* Imagen de perfil o icono */}
        <div className="flex justify-center mb-4">
          {user.profileImage ? (
            <img
              src={user.profileImage}
              alt="Imagen de perfil"
              className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
            />
          ) : (
            <FaUserCircle size={96} className="text-gray-400" />
          )}
        </div>

        {/* Información del usuario */}
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Perfil de Usuario</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-600">Información Personal</h3>
          <p className="text-gray-700 flex items-center justify-center">
            <FaUserCircle className="mr-2" /> <strong>Nombre:</strong> {user.name}
          </p>
          <p className="text-gray-700 flex items-center justify-center">
            <FaEnvelope className="mr-2" /> <strong>Email:</strong> {user.email}
          </p>
        </div>

        {/* Botón de edición */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center">
          <FaEdit className="mr-2" /> Editar Perfil
        </button>
      </div>
    </div>
  );
};

export default Profile;
