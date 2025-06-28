import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // 'Routes' importado diretamente
import { Dashboard, Login } from '../pages';

export const AppRoutes = () => { 
  return (
    // BrowserRouter é o roteador principal que usa a API de histórico do HTML5.
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<h1>Olá, você está na página inicial!</h1>} />
        <Route path="/caminho-antigo" element={<Navigate to="/novo-caminho" replace />} />
        <Route path="/novo-caminho" element={<h2>Esta é a nova página após o redirecionamento!</h2>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>404 - Página Não Encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
