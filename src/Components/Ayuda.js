function Ayuda(props){

    let mostrarLetra = () => {
        let id = Math.floor(Math.random() * (props.arrayLetras.length));
        let arrayAyuda = props.stringAyuda;
        console.log("id: ",id)
        console.log("letrasUsadas entero: ", props.letrasUsadas);
        console.log("props.arrayLetras: ",props.arrayLetras)

        for (let i = 0; i < props.letrasUsadas.length; i++) {
            if(props.letrasUsadas[i]===id)
            {
                id = Math.floor(Math.random() * (props.arrayLetras.length));
            }
        }
        for (let i = 0; i < props.arrayLetras.length; i++) {
            console.log("for id: ",id)
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

export default Ayuda;