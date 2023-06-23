import './Juego.css' 
import {string , func} from 'prop-types';

function Juego(props){
    let handleSubmit = (e) => {
        e.preventDefault();
        props.setRespuesta(e.target.respuesta.value);
    }
    return(
        <div>
            <img className='Img' src={props.flag} alt="" ></img>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Ingrese su respuesta:</label>
            <input type="text" name="respuesta" />
            <input type="submit" value="Submit" />
        </form>
            <button onClick={props.cambiarPais}>Skip</button>
        </div>
    )
}
Juego.propTypes = {
    setRespuesta: func,
    flag: string,
    cambiarPais: func
}

export default Juego;