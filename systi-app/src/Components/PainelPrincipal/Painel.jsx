import React from 'react'
import '../CSS/Painel.css'
import GridConsulta from './GridConsulta'


function Painel(props){
    return(
        <div className="Fundo">
            <h1>{props.name}</h1>
            <GridConsulta />
        </div>
    )
}

export default Painel;