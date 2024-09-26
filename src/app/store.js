import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from '../features/bookingsSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
  },
});
