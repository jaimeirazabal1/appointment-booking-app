
# Aplicación de Reservas de Citas

## Descripción

Esta aplicación permite a los usuarios buscar y reservar citas en diferentes empresas, como barberías, mecánicas, clínicas, gimnasios y más. Los usuarios pueden ver los servicios ofrecidos por cada empresa, así como las citas disponibles y realizar reservas de manera sencilla.

## Funcionalidades

1. **Buscador de Servicios:**
   - Los usuarios pueden buscar servicios específicos.
   - Se muestran sugerencias en tiempo real mientras el usuario escribe, incluyendo el logo de la empresa y un enlace al perfil de la empresa.

2. **Perfil de Empresa:**
   - Cada empresa tiene un perfil que incluye:
     - Nombre y descripción.
     - Logo y foto de la empresa.
     - Lista de servicios ofrecidos.
     - Citas ocupadas y próximas.

3. **Reservas de Citas:**
   - Los usuarios pueden seleccionar un servicio, una fecha y una hora para realizar una reserva.
   - Un calendario muestra las fechas ocupadas para cada servicio y empresa, evitando reservas en horarios ya ocupados.
   - Se proporciona retroalimentación visual mediante alertas cuando se confirma una reserva o si no hay disponibilidad.

4. **Perfil de Usuario:**
   - Los usuarios pueden ver sus citas próximas con información de referencia, incluyendo el logo y el nombre de la empresa correspondiente.
   - Se muestran todas las citas futuras que el usuario ha reservado.

## Tecnologías Utilizadas

- **Frontend:**
  - React
  - Redux (para manejo de estado)
  - React Router (para navegación)
  - Tailwind CSS (para estilos)

- **Calendario:**
  - React Datepicker (para selección de fechas)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/jaimeirazabal1/appointment-booking-app.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd nombre_del_repositorio
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre tu navegador y visita `http://localhost:5173`.

## Ejemplos de Datos

- **Empresas:** Barbería El Estilo, Mecánica Rápida, Clínica Saludable, Estética y Belleza, Gimnasio Fit, Restaurante Delicias, Centro de Bienestar, Tiendas de Moda.
- **Servicios:** Corte de cabello, Afeitado, Cambio de aceite, Consulta general, Masajes, Manicure, etc.
- **Citas de Ejemplo:**
  - Barbería El Estilo: Corte de cabello el 30/09/2024 a las 15:00.
  - Mecánica Rápida: Cambio de aceite el 30/09/2024 a las 09:00.
  - Clínica Saludable: Consulta general el 28/09/2024 a las 14:00.

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un nuevo Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.
