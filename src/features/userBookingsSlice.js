import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userBookings: [
      {
        id: 1,
        service: 'Corte de cabello',
        professional: 'Juan Pérez',
        date: '2024-09-28',
        time: '10:00',
        company: 'Barbería El Estilo',
      },
      {
        id: 2,
        service: 'Revisión de frenos',
        professional: 'Carlos Ramírez',
        date: '2024-09-30',
        time: '14:00',
        company: 'Mecánica Rápida',
      },
      {
        id: 3,
        service: 'Masaje relajante',
        professional: 'Ana Gómez',
        date: '2024-10-01',
        time: '09:00',
        company: 'Centro de Bienestar',
      },
    ], // Reservas iniciales del usuario
  };

const userBookingsSlice = createSlice({
  name: 'userBookings',
  initialState,
  reducers: {
    // Acción para añadir una nueva reserva
    addUserBooking: (state, action) => {
      state.userBookings.push(action.payload);
    },
    // Acción para obtener las reservas de un usuario específico
    setUserBookings: (state, action) => {
      state.userBookings = action.payload;
    },
  },
});

export const { addUserBooking, setUserBookings } = userBookingsSlice.actions;
export const selectUserBookings = (state) => state.userBookings.userBookings;

export default userBookingsSlice.reducer;
