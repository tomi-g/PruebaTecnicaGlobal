import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Articulos from './components/articulos/Articulos';
import Menu from './components/menu/Menu';


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="divBody">
          <Routes>
            <Route path="/" element={<Articulos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;