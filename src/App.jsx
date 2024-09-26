import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Booking from './components/Booking';
import History from './components/History';
import Profile from './components/Profile';
import ServiceSearch from './components/ServiceSearch';
import SearchResults from './components/SearchResults';
import CompanyProfile from './components/CompanyProfile'; // Importar el nuevo componente

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ServiceSearch />} />
            <Route path="/results" element={<SearchResults />} />
            <Route path="/company/:id" element={<CompanyProfile />} /> {/* Nueva ruta para el perfil de la empresa */}
            <Route path="/booking" element={<Booking />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
