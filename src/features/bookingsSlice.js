import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    companies: [
      {
        id: 1,
        name: 'Barbería El Estilo',
        description: 'La mejor barbería de la ciudad.',
        services: ['Corte de cabello', 'Afeitado', 'Barba'],
        photo: 'https://i.pinimg.com/736x/43/1c/75/431c75576bae46c0b4c3fe1e78de9265.jpg',
        logo: 'https://img.freepik.com/fotos-premium/logotipo-barberia-masculina-que-consiste-peine-tijeras-lineas-doradas-sobre-fondo-negro_356871-5612.jpg',
        bookings: [
          { service: 'Corte de cabello', date: '2024-09-30', time: '15:00' },
          { service: 'Afeitado', date: '2024-09-30', time: '16:00' },
        ],
      },
      {
        id: 2,
        name: 'Mecánica Rápida',
        description: 'Servicio mecánico rápido.',
        services: ['Cambio de aceite', 'Revisión de frenos', 'Alineación'],
        photo: 'https://www.shutterstock.com/image-photo/portrait-hispanic-latin-male-mechanic-260nw-2513921789.jpg',
        logo: 'https://img.freepik.com/vector-gratis/diseno-logotipo-reparacion-mecanica_23-2150013319.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid',
        bookings: [
          { service: 'Cambio de aceite', date: '2024-09-30', time: '09:00' },
          { service: 'Revisión de frenos', date: '2024-09-30', time: '10:30' },
        ],
      },
      {
        id: 3,
        name: 'Clínica Saludable',
        description: 'Consulta general.',
        services: ['Consulta general', 'Chequeo de rutina', 'Vacunas'],
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UApDUKgTTTOzEjvH0yr1riMxlUKMcKzVew&s',
        logo: 'https://img.freepik.com/vector-premium/logotipo-clinica-medica_1160761-62.jpg',
        bookings: [
          { service: 'Consulta general', date: '2024-09-28', time: '14:00' },
          { service: 'Chequeo de rutina', date: '2024-09-28', time: '15:00' },
          { service: 'Vacunas', date: '2024-09-29', time: '09:00' },
        ],
      },
      {
        id: 4,
        name: 'Estética y Belleza',
        description: 'Todo para tu belleza y cuidado personal.',
        services: ['Manicure', 'Pedicure', 'Tratamientos faciales'],
        photo: 'https://img.freepik.com/fotos-premium/procedimiento-estetica-salon-belleza_135427-192.jpg',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AMY6i5kp6i9T2_V-N2mo5e-8VD-Ic8UR6Q&s',
        bookings: [
          { service: 'Manicure', date: '2024-09-29', time: '12:00' },
          { service: 'Pedicure', date: '2024-09-29', time: '13:00' },
        ],
      },
      {
        id: 5,
        name: 'Gimnasio Fit',
        description: 'Entrenamiento personal y clases grupales.',
        services: ['Entrenamiento personal', 'Clases de yoga', 'Clases de pilates'],
        photo: 'https://pictures.smartfit.com.br/6936/big/cardio.jpg?1704756720',
        logo: 'https://img.freepik.com/vector-premium/fitness-center-logo-deporte-fitness-logo-design-gym-logo-icon-design-vector-stock_279597-366.jpg',
        bookings: [
          { service: 'Entrenamiento personal', date: '2024-09-30', time: '08:00' },
          { service: 'Clases de yoga', date: '2024-09-30', time: '09:30' },
        ],
      },
      {
        id: 6,
        name: 'Restaurante Delicias',
        description: 'Comida deliciosa y un ambiente acogedor.',
        services: ['Reserva de mesa', 'Comida para llevar', 'Catering'],
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfPeVMZxW5XEiKBzv3aOnjPRg7wph6aXupQ&s',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnrbGiJGUaXcKW-5yQq-Qj8xmSwgNrjH64A&s',
        bookings: [
          { service: 'Reserva de mesa', date: '2024-09-30', time: '19:00' },
        ],
      },
      {
        id: 7,
        name: 'Centro de Bienestar',
        description: 'Servicios de spa y relajación.',
        services: ['Masajes', 'Tratamientos de spa', 'Terapias alternativas'],
        photo: 'https://images.adsttc.com/media/images/54ca/ef0f/e58e/ce5c/5e00/02a6/newsletter/18_%E2%88%8F_Vincent_Fillon.jpg?1422585590',
        logo: 'https://previews.123rf.com/images/andyadi/andyadi1801/andyadi180100184/94570981-este-ejemplo-de-dise%C3%B1o-de-logotipo-vectorial-es-perfectamente-adecuado-para-el-centro-de-bienestar.jpg',
        bookings: [
          { service: 'Masajes', date: '2024-09-30', time: '16:30' },
        ],
      },
      {
        id: 8,
        name: 'Tiendas de Moda',
        description: 'Ropa de última moda y accesorios.',
        services: ['Personal Shopper', 'Estilismo', 'Consultas de moda'],
        photo: 'https://media.gq.com.mx/photos/62a8ab4b985d73aa8f300011/master/w_1600%2Cc_limit/INTERNATIONAL%2520GALLERY%2520BEAMS%2520%2520351A3902.jpg',
        logo: 'https://marketplace.canva.com/EAFg-uOorvQ/1/0/1600w/canva-logotipo-boutique-de-ropa-moderno-negro-y-rosa-uoDu8e-9ixg.jpg',
        bookings: [],
      },
    ],
  };
  
  
  

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      const { companyId, booking } = action.payload;
      const company = state.companies.find((c) => c.id === companyId);
      if (company) {
        company.bookings.push(booking);
      }
    },
  },
});

export const { addBooking } = bookingsSlice.actions;
export const selectBookings = (state) => state.bookings;

export default bookingsSlice.reducer;
