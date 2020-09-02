import React, { Component } from 'react';
import '../Tests/FormTest.css'
//import Pdata from '../data/data.json'
import Menu from '../data/menu.json'




class FormTest extends Component{
   
    render() {
        // for(i = 0; i<5;i++){
            
        // }
        return (        
          <div>
                <pre id="glocomponente">NFC-e                                                                   Sistema ADAPTA - SYSTi (81)3035-5700</pre>
                <div>
                    <div id="leftbox">
                        {Menu.map((menivel, index) =>{
                            return <button><i class="fa fa-bars"></i> {menivel.nome}</button>})}
                    </div>
                    <div id="middlebox">
                            {/* {this.getData()} */}
                    </div>
                    <div id="rightbox">
                    
                    </div>
                </div>
                <pre id="glocomponente2">DataHora: 09/06/2020 10:46:04|Versão: 1.45.0.191|Turno: 1 -ABERTO| Operador: ED| PDV: 1|</pre>
                {/* <h1>Test json</h1> */}
                            {/* {Pdata.db.map((postDetail, index) => {
                                return <div>
                                    <h1>{postDetail.first_name}</h1>
                                    <p>{postDetail.last_name}</p>
                                </div>
                            })} */}
          </div>  
        );
      }

      getData(){
          fetch("http://localhost:3000/posts/1")
          .then(res => res.json())
          .then(
              (result) => {
                var obj = JSON.parse(result);
                alert(obj)
              }
          )
      }

}


export default FormTest;
