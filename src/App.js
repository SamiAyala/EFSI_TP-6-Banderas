import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Components/Todo';

function App() {
  const [respuesta, setRespuesta] = useState('');
  const [arrayPaises, setarrayPaises] = useState([]);
  const [puntos, setPuntos] = useState(0);
  const [pais, setPais] = useState({});
  const [timer, setTimer] = useState(15);
  
  setInterval(()=> {setTimer(timer - 1)},1000);
  
  useEffect(()=>{
    if(timer === 0){
      cambiarPais();
    }
  },[timer])

  useEffect(() => {
    axios.get('http://localhost:3000/data.json')
      .then((response) => {
        const array = response.data.data;
        let id = Math.floor(Math.random() * (array.length + 1));
        setPais(array[id]);
        setarrayPaises(array);
      });
  }, []);
  useEffect(()=>{
    if (respuesta === pais.name) {
      console.log("correcto")
      setPuntos(puntos + 10 + timer);
      cambiarPais();
    } else {
      console.log("incorrecto")
      if (puntos > 0) setPuntos(puntos - 1);
    }
  },[respuesta]);

  let cambiarPais = () => {
  setTimer(15);
  let id = Math.floor(Math.random() * (arrayPaises.length + 1));
  setPais(arrayPaises[id]);
}
  return (
    <div className="App">
      <header className="App-header">
        {console.log(pais.name)}
        <h1>Puntos: {puntos}</h1>
        <h2>Tiempo: {timer} </h2>
        <Todo setRespuesta={setRespuesta} flag={pais.flag} cambiarPais={cambiarPais}></Todo>
      </header>
    </div>
  );
}

export default App;
