// mi-ruta.js
import React from 'react';
import NavBar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Ruta = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <NavBar />
      <Body style={{ flex: 1 }} />
      <Footer />
    </div>
  );
};

export default Ruta;