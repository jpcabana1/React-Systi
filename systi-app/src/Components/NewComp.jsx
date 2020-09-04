import React from 'react';
import './CSS/NewComp.css'
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import MenuEsquerdo from './MenuEsquerdo'
import Painel from './PainelPrincipal/Painel'

function NewComp(){
    return(
        <div>
            <Title />  
            <MenuEsquerdo />  
            <Painel name=""/>
            <Rodape />
        </div>  
    );
}
function Title(){
    return(
        <div id="Fundo">
            <div id="imagemTitle">
                <ImagemLogo />
            </div>
            <div id="textoTitle">
                <h1>NFC-e</h1>
            </div>  
            <div id="fimTitle">
                <h1>Sistema ADAPTA - SYSTi (81)3035-5700</h1>
            </div> 
        </div>     
    );
}
function ImagemLogo(){
    return(
        <div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>           
    );
}
function Rodape(){
    return(
        <div id="rodape">
            <h4>Data/Hora: 09/06/2020 10:46:04 | Versão: 1.45.0.191 | Turno: 1 - ABERTO|Operador: ED|PDV: 1|</h4>
        </div>
    );
}

export default NewComp;