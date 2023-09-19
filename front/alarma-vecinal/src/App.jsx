import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registro from './components/Registro/Registro';
import InicioSesion from './components/InicioSesion/InicioSesion';


function App() {
  return (
    <>
      <div className="App">        
        <InicioSesion />
        <Registro />
      </div>
      <h1>Alarma Vecinal</h1>
        <p>         
          Barrio Altos de Don Carlos II
        </p>
      <div className="card">
        {/* Mantén la funcionalidad del botón de alarma vecinal */}
        <button onClick={enviarNotificacion}>
          <img src="public/boton1.png" alt="Imagen de boton" />
        </button>       
      </div>
    </>
  );
}

// Función para enviar una notificación
function enviarNotificacion() {
  // Coloca aquí el código para enviar la notificación a los demás usuarios
  console.log('Notificación enviada a los demás usuarios');
}

export default App;
