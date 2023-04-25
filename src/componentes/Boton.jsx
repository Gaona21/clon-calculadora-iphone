import React from "react";
import "../estilos/boton.css";

function Boton(props){

    const tipoDeBoton = (valor) => {
        let  tipoBoton = "";

        if(!isNaN(valor) || valor == ","){
            
            if(valor == 0){
                tipoBoton = "numerico cero";
            }else{
                tipoBoton = "numerico";
            }
        }
        else if(valor != "AC" && valor != "+/-" && valor !="%"){
            tipoBoton = "operadorSimple";
        }
        else{
            tipoBoton = "operadorCompuesto";
        }

        return tipoBoton;
    }

    return(
        <div className={`boton ${tipoDeBoton(props.children)}`}
        onClick={ () => {
            props.manejarClick(props.children)
        }}>
            {props.children}
        </div>
    );
}

export default Boton;
