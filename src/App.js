import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [respuesta, setRespuesta] = useState('');
  const [puntos, setPuntos] = useState(0);
  const [pais, setPais] = useState({});
  useEffect(() => {
    axios.get('http://localhost:3000/data.json')
      .then((response) => {
        const arrayPaises = response.data.data;
        console.log(arrayPaises);
        let id = Math.floor(Math.random() * (arrayPaises.length + 1));
        setPais(arrayPaises[id]);
        console.log(arrayPaises[id])
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Puntos: {puntos}</h1>
      </header>
    </div>
  );
}

export default App;
