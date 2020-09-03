import React, { Component } from 'react';
import './CompTest.css';
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faBars } from '@fortawesome/free-solid-svg-icons'

class CompTest extends Component{
 

 MenuLadoEsquerdo(){   
            return(
                <div id="menuEsquerdo">
                    <Button variant="primary" 
                            className="NFEbutton" >
                                    <FontAwesomeIcon className="NFEbutton" 
                                    icon={faBars}/>Menu (Ctrl+M)</Button>{' '}
                </div>            
            );
    }

    Title(){
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


    ImagemLogo(){
            return(
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>           
            );
    }

     RenderAll(){
        return(
        <div>
            <Title />  
            <MenuLadoEsquerdo />            
        </div>  
        );
    }
}
export default CompTest;