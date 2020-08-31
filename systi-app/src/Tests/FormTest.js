import React, { Component } from 'react';
import '../Tests/FormTest.css'

import Pdata from '../data/data.json'
class FormTest extends Component{
    render() {
        // for(i = 0; i<5;i++){
            
        // }
        return (        
          <div>
                <pre id="glocomponente">NFC-e                                                                   Sistema ADAPTA - SYSTi (81)3035-5700</pre>
                <div>
                    <div id="leftbox">
                        <button><i class="fa fa-bars"></i> Menu (Ctrl+M)</button>
                        <button><i class="fa fa-bars"></i> Consulta NFC-e(Ctrl+G)</button>
                        <button><i class="fa fa-bars"></i> Suprimento(Ctrl+T)</button>
                        <button><i class="fa fa-bars"></i> Sangria(Ctrl+S)</button>
                        <button><i class="fa fa-bars"></i> Pedido(F9)</button>
                        <button><i class="fa fa-bars"></i> Vendedor(F8)</button>
                        <button><i class="fa fa-bars"></i> Cliente(F7)</button>
                        <button><i class="fa fa-bars"></i> Lista(F6)</button>
                        <button><i class="fa fa-bars"></i> Cancelar(F5)</button>
                        <button><i class="fa fa-bars"></i> Recebimento(F2)</button>
                        <button><i class="fa fa-bars"></i> Emitir NFC-e(F3)</button>
                        <button><i class="fa fa-bars"></i> Devolução(F5)</button>
                        <button><i class="fa fa-bars"></i> Sair(ESC)</button>
                        <button><i class="fa fa-bars"></i> Turno(Shift + T)</button>
                    </div>
                    <div id="middlebox">
                            
                    </div>
                    <div id="rightbox">
                    
                    </div>
                </div>
                <pre id="glocomponente2">DataHora: 09/06/2020 10:46:04|Versão: 1.45.0.191|Turno: 1 -ABERTO| Operador: ED| PDV: 1|</pre>
                <h1>Test JSON</h1>
                            {Pdata.map((postDetail, index=2) => {
                                return <div>
                                    <h1>{postDetail.first_name}</h1>
                                    <p>{postDetail.last_name}</p>
                                </div>
                            })}
          </div>  
        );
      }
}


export default FormTest;
