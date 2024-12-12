import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar 
        home="Inicio"
        about="Acerca de"
        contact="Contacto"
      />
      <h1>¡Bienvenido a mi sitio!</h1>
    </div>
  );
};

export default App;