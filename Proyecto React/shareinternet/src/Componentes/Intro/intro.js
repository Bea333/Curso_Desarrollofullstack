import React, { useSyncExternalStore } from "react";
import './intro.css';
import icono from "./icono.jpg";


const intro = ( { titulo } ) =>{
    return(
        <div className="contenedorImagen">

        <img src= {icono} className="icono" alt="icono"/>        
        <p>Internet al Hogar</p>
        </div>
    )
}
export default intro;