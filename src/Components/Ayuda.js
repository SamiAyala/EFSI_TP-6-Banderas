import {number , string , func , arrayOf} from 'prop-types';

function Ayuda(props){

    let mostrarLetra = () => {
        let id = Math.floor(Math.random() * (props.stringLetras.length));
        let arrayAyuda = props.arrayAyuda;

        for (let i = 0; i < props.arrayLetrasUsadas.length; i++) {
            if(props.arrayLetrasUsadas[i]===id)
            {
                id = Math.floor(Math.random() * (props.stringLetras.length));
            }
        }
        for (let i = 0; i < props.stringLetras.length; i++) {
          if(i===id){
            props.setarrayLetrasUsadas([...props.arrayLetrasUsadas, i]);
            arrayAyuda[i] = props.stringLetras[i];
          }
          else{
            if(arrayAyuda[i]!==props.arrayAyuda[i]){
                if(props.arrayAyuda[i] === ' ')
                {
                    arrayAyuda[i]= ' ';
                }
                else{arrayAyuda[i] = ' _ ';}
            }
          }
        }
        props.setarrayAyuda(arrayAyuda);
        props.setTimer(t => t-2)

      }
    return(
        <button onClick={mostrarLetra}>Mostrar Ayuda</button>
    )
}

Ayuda.propTypes = {
  timer: number,
  setTimer: func,
  setarrayLetrasUsadas: func,
  arrayLetrasUsadas: arrayOf(number),
  arrayAyuda: arrayOf(string), 
  setarrayAyuda: func,
  stringLetras: string
}

export default Ayuda;