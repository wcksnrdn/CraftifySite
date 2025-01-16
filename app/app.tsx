import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './register/page'; // Ganti dengan path yang sesuai
import { SessionProvider } from "next-auth/react";
import Home from './page';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      {/* Tambahkan rute lain sesuai kebutuhan */}
    </Routes>
  );
};

export default App;
