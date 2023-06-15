
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Juego from './Components/Juego';
import Ayuda from './Components/Ayuda';

function App() {
  const [respuesta, setRespuesta] = useState('');
  const [arrayPaises, setarrayPaises] = useState([]);
  const [puntos, setPuntos] = useState(0);
  const [pais, setPais] = useState({});
  const [timer, setTimer] = useState(15);
  const [referencia, setReferencia] = useState();
  const [arrayLetras,setArrayLetras] = useState([]);
  const [stringAyuda,setStringAyuda] = useState([]);
  const [letrasUsadas, setLetrasUsadas] = useState([]);


  useEffect(()=>{
    if(timer === 0){
      cambiarPais();
    }
  },[timer])
  
  useEffect(() => {
    axios.get('http://localhost:3000/data.json')
    .then((response) => {
        setReferencia(setInterval(()=> {setTimer( t => t - 1)},1000));
        const array = response.data.data;
        let id = Math.floor(Math.random() * (array.length + 1));
        setPais(array[id]);
        setArrayLetras(array[id].name)
        setarrayPaises(array);
        let arrayAux = new Array(array[id].name.length);
        for (let i = 0; i < array[id].name.length; i++) {
          arrayAux[i]=' _ '
        }
        setStringAyuda(arrayAux);
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
    clearInterval(referencia);
    setTimer(15);
    setReferencia(setInterval(()=> {setTimer( t => t - 1)},1000));
  let id = Math.floor(Math.random() * (arrayPaises.length + 1));
  setPais(arrayPaises[id]);
  setArrayLetras(arrayPaises[id].name);
  let arrayAux = new Array(arrayPaises[id].name.length);
        for (let i = 0; i < arrayPaises[id].name.length; i++) {
          arrayAux[i]=' _ ';
        };
  setStringAyuda(arrayAux);
}
  return (
    <div className="App">
      <header className="App-header">
        {console.log(pais.name)}
        <h1>Puntos: {puntos}</h1>
        {<h2>Tiempo: {timer} </h2>}
        <h2>aca : {stringAyuda.join(' ').toString()}</h2>
        <Ayuda timer = {timer} setTimer = {setTimer} setLetrasUsadas = {setLetrasUsadas} letrasUsadas = {letrasUsadas} stringAyuda = {stringAyuda} setStringAyuda = {setStringAyuda} arrayLetras = {arrayLetras}></Ayuda>
        <Juego setRespuesta={setRespuesta} flag={pais.flag} cambiarPais={cambiarPais}></Juego>
      </header>
    </div>
  );
}

export default App;
