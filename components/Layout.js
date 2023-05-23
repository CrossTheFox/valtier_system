import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import styles from '../styles/ResponsiveAppBar.module.css';

const Layout = ({ children }) => {
  return (
    <div>
        <Head>
            <title>Val.tier</title>
            <meta name="description" content="Webpage to play Icon" />
            <link rel="icon" href="/icono.png" />
        </Head>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
                <div style={{ flex: 1 }}>{children}</div>
            <Footer />
        </div>
    </div>
  );
};

export default Layout;