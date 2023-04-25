import React from "react";
import "../estilos/pantalla.css"

function Pantalla(props){
    return(
        <div className="pantalla">
            {props.input}
        </div>
    );
}

export default Pantalla;