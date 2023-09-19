import React from 'react';
import Formularios from '../Formularios';

function Registro() {
  // Define una función onSubmit que maneje la lógica de registro
  const handleRegistroSubmit = (formData) => {
    // Aquí puedes enviar los datos del formulario al servidor para el registro
    console.log('Datos de registro:', formData);
  };

  return (
    <div>
      <h2>Registro</h2>
      <Formularios onSubmit={handleRegistroSubmit} />
    </div>
  );
}

export default Registro;

