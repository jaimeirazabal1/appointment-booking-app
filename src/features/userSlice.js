import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del usuario
const initialState = {
  user: {
    id: 1, // Este ID puede ser dinámico según el usuario autenticado
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    profileImage: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fbcbd2a6880db6109da579a8b494f82b~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=86693&refresh_token=35a26643e7e6ef43ea0efd5043f7af6c&x-expires=1727712000&x-signature=Z6NIzyw%2FDAfw%2B4osK8zlbPhSPvo%3D&shp=a5d48078&shcp=81f88b70'
  },
};

// Crear el slice de usuario
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Puedes agregar acciones como actualizar información del usuario aquí
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

// Exportar las acciones y el selector del slice
export const { updateUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
