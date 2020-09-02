import React, { Component } from 'react'
import './CompTest.css'
import logo from '../logo.svg';
import '../App.css'

class CompTest extends Component{
    render(){
        return(<div>
            <Title />  
            {/* <MenuLadoEsquerdo /> */}
        </div>  
        );
    }
}
class MenuLadoEsquerdo extends Component{
    render(){
        return(
            <div id="menuEsquerdo">
                <button onClick={() => {alert("Teste")}}>Teste</button>
                <button onClick={() => {alert("Teste")}}>Teste</button>
            </div>
            
        );
    }
}

class Title extends Component{
    render(){
        return(
            <div id="Fundo">
            <div id="imagemTitle">
                <ImagemLogo />
            </div>
            <div id="textoTitle">
                <h1>NFC-e</h1>
            </div>  
            <div id="fimTitle">
                <h1>Sistema ADAPTA - SYSTi(81)3035-5700</h1>
            </div> 
        </div>     
        );
    }
}

class ImagemLogo extends Component{
    render(){
        return(
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>           
        );
    }
}







export default CompTest;