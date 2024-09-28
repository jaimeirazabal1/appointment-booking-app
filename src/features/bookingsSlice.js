import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: [
    {
      id: 1,
      name: 'Barbería El Estilo',
      description: 'La mejor barbería de la ciudad.',
      services: [
        {
          name: 'Corte de cabello',
          professionals: ['Juan Cortés', 'Pedro Peluquero'],
        },
        {
          name: 'Afeitado',
          professionals: ['Mario Barber', 'Luis Navajas'],
        },
        {
          name: 'Barba',
          professionals: [],
        },
      ],
      photo: 'https://i.pinimg.com/736x/43/1c/75/431c75576bae46c0b4c3fe1e78de9265.jpg',
      logo: 'https://img.freepik.com/fotos-premium/logotipo-barberia-masculina-que-consiste-peine-tijeras-lineas-doradas-sobre-fondo-negro_356871-5612.jpg',
      bookings: [
        { service: 'Corte de cabello', professional: 'Juan Cortés', date: '2024-09-30', time: '15:00' },
        { service: 'Afeitado', professional: 'Mario Barber', date: '2024-09-30', time: '16:00' },
      ],
    },
    {
      id: 2,
      name: 'Mecánica Rápida',
      description: 'Servicio mecánico rápido.',
      services: [
        {
          name: 'Cambio de aceite',
          professionals: ['José Mecánico'],
        },
        {
          name: 'Revisión de frenos',
          professionals: ['Carlos Frenos'],
        },
        {
          name: 'Alineación',
          professionals: [],
        },
      ],
      photo: 'https://www.shutterstock.com/image-photo/portrait-hispanic-latin-male-mechanic-260nw-2513921789.jpg',
      logo: 'https://img.freepik.com/vector-gratis/diseno-logotipo-reparacion-mecanica_23-2150013319.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid',
      bookings: [
        { service: 'Cambio de aceite', professional: 'José Mecánico', date: '2024-09-30', time: '09:00' },
        { service: 'Revisión de frenos', professional: 'Carlos Frenos', date: '2024-09-30', time: '10:30' },
      ],
    },
    {
      id: 3,
      name: 'Clínica Saludable',
      description: 'Consulta general.',
      services: [
        {
          name: 'Consulta general',
          professionals: ['Dr. Sánchez', 'Dra. Pérez'],
        },
        {
          name: 'Chequeo de rutina',
          professionals: ['Dr. Martín'],
        },
        {
          name: 'Vacunas',
          professionals: [],
        },
      ],
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UApDUKgTTTOzEjvH0yr1riMxlUKMcKzVew&s',
      logo: 'https://img.freepik.com/vector-premium/logotipo-clinica-medica_1160761-62.jpg',
      bookings: [
        { service: 'Consulta general', professional: 'Dr. Sánchez', date: '2024-09-28', time: '14:00' },
        { service: 'Chequeo de rutina', professional: 'Dr. Martín', date: '2024-09-28', time: '15:00' },
        { service: 'Vacunas', professional: 'Enfermera María', date: '2024-09-29', time: '09:00' },
      ],
    },
    {
      id: 4,
      name: 'Estética y Belleza',
      description: 'Todo para tu belleza y cuidado personal.',
      services: [
        {
          name: 'Manicure',
          professionals: ['Laura Belleza'],
        },
        {
          name: 'Pedicure',
          professionals: ['Sofía Belleza'],
        },
        {
          name: 'Tratamientos faciales',
          professionals: ['Elena Facial'],
        },
      ],
      photo: 'https://img.freepik.com/fotos-premium/procedimiento-estetica-salon-belleza_135427-192.jpg',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AMY6i5kp6i9T2_V-N2mo5e-8VD-Ic8UR6Q&s',
      bookings: [
        { service: 'Manicure', professional: 'Laura Belleza', date: '2024-09-29', time: '12:00' },
        { service: 'Pedicure', professional: 'Sofía Belleza', date: '2024-09-29', time: '13:00' },
      ],
    },
    {
      id: 5,
      name: 'Gimnasio Fit',
      description: 'Entrenamiento personal y clases grupales.',
      services: [
        {
          name: 'Entrenamiento personal',
          professionals: ['Carlos Entrenador'],
        },
        {
          name: 'Clases de yoga',
          professionals: ['Sara Yoga'],
        },
        {
          name: 'Clases de pilates',
          professionals: ['Lina Pilates'],
        },
      ],
      photo: 'https://pictures.smartfit.com.br/6936/big/cardio.jpg?1704756720',
      logo: 'https://img.freepik.com/vector-premium/fitness-center-logo-deporte-fitness-logo-design-gym-logo-icon-design-vector-stock_279597-366.jpg',
      bookings: [
        { service: 'Entrenamiento personal', professional: 'Carlos Entrenador', date: '2024-09-30', time: '08:00' },
        { service: 'Clases de yoga', professional: 'Sara Yoga', date: '2024-09-30', time: '09:30' },
      ],
    },
    {
      id: 6,
      name: 'Restaurante Delicias',
      description: 'Comida deliciosa y un ambiente acogedor.',
      services: [
        {
          name: 'Reserva de mesa',
          professionals: ['Atención al Cliente'],
        },
        {
          name: 'Comida para llevar',
          professionals: [],
        },
        {
          name: 'Catering',
          professionals: ['Chef Luis'],
        },
      ],
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfPeVMZxW5XEiKBzv3aOnjPRg7wph6aXupQ&s',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnrbGiJGUaXcKW-5yQq-Qj8xmSwgNrjH64A&s',
      bookings: [
        { service: 'Reserva de mesa', professional: 'Atención al Cliente', date: '2024-09-30', time: '19:00' },
      ],
    },
    {
      id: 7,
      name: 'Centro de Bienestar',
      description: 'Servicios de spa y relajación.',
      services: [
        {
          name: 'Masajes',
          professionals: ['Ana Masajes'],
        },
        {
          name: 'Tratamientos de spa',
          professionals: ['Carla Spa'],
        },
        {
          name: 'Terapias alternativas',
          professionals: ['Miguel Terapia'],
        },
      ],
      photo: 'https://images.adsttc.com/media/images/54ca/ef0f/e58e/ce5c/5e00/02a6/newsletter/18_%E2%88%8F_Vincent_Fillon.jpg?1422585590',
      logo: 'https://previews.123rf.com/images/andyadi/andyadi1801/andyadi180100184/94570981-este-ejemplo-de-dise%C3%B1o-de-logotipo-vectorial-es-perfectamente-adecuado-para-el-centro-de-bienestar.jpg',
      bookings: [
        { service: 'Masajes', professional: 'Ana Masajes', date: '2024-09-30', time: '16:30' },
      ],
    },
    {
      id: 8,
      name: 'Tiendas de Moda',
      description: 'Ropa de última moda y accesorios.',
      services: [
        {
          name: 'Personal Shopper',
          professionals: ['Estilista Alejandra'],
        },
        {
          name: 'Estilismo',
          professionals: [],
        },
        {
          name: 'Consultas de moda',
          professionals: ['Moda Carolina'],
        },
      ],
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
