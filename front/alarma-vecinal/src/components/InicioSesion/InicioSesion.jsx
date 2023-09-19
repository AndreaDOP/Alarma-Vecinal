import React from 'react';
import Formularios from '../Formularios';

function InicioSesion() {
  const handleInicioSesionSubmit = (data) => {
    // Lógica de inicio de sesión con los datos del formulario
    console.log('Datos de inicio de sesión:', data);
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <Formularios onSubmit={handleInicioSesionSubmit} />
    </div>
  );
}

export default InicioSesion;

