import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import Boton from './components/Boton';
import logoAlejandra from './imagenes/logo-alejandra.png'
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [ numClics, setNumClics] = useState (0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img 
          className='logo'
          src={logoAlejandra}
          alt='logo de Alejandra'/>
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Reinciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
