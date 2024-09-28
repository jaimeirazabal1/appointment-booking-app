import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from '../features/bookingsSlice';
import userReducer from '../features/userSlice';
import userBookingsReducer from '../features/userBookingsSlice'; // Importar el userBookingsSlice

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    user: userReducer,
    userBookings: userBookingsReducer, // Añadir el userBookingsSlice al store
  },
});
