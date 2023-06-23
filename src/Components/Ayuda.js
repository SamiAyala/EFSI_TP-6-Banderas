import {number , string , func , arrayOf} from 'prop-types';

function Ayuda(props){

    let mostrarLetra = () => {
        let id = Math.floor(Math.random() * (props.arrayLetras.length));
        let arrayAyuda = props.stringAyuda;

        for (let i = 0; i < props.letrasUsadas.length; i++) {
            if(props.letrasUsadas[i]===id)
            {
                id = Math.floor(Math.random() * (props.arrayLetras.length));
            }
        }
        for (let i = 0; i < props.arrayLetras.length; i++) {
          if(i===id){
            props.setLetrasUsadas([...props.letrasUsadas, i]);
            arrayAyuda[i] = props.arrayLetras[i];
          }
          else{
            if(arrayAyuda[i]!==props.stringAyuda[i]){
                if(props.stringAyuda[i] === ' ')
                {
                    arrayAyuda[i]= ' ';
                }
                else{arrayAyuda[i] = ' _ ';}
            }
          }
        }
        props.setStringAyuda(arrayAyuda);
        props.setTimer(t => t-2)

      }
    return(
        <button onClick={mostrarLetra}>Mostrar Ayuda</button>
    )
}

Ayuda.propTypes = {
  timer: number,
  setTimer: func,
  setLetrasUsadas: func,
  letrasUsadas: arrayOf(number),
  stringAyuda: arrayOf(string), 
  setStringAyuda: func,
  arrayLetras: arrayOf(string)
}

export default Ayuda;