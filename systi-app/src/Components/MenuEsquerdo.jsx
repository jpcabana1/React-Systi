import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './CSS/NewComp.css';

class MenuEsquerdo extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            url: "http://localhost:3001/menu", 
            isLoaded: true, 
            items: []
        };      
    }

    componentDidMount(){
        fetch(this.state.url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    items: result
                });
            })       
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {        
            return(
                <div id="menuEsquerdo">
                            {items.map((item, index) => (
                                <Button variant="primary" 
                                className="NFEbutton" >
                                        <FontAwesomeIcon 
                                            className="NFEbutton" 
                                            icon={faBars}/>
                                            {item.nome}
                                </Button>                            
                            )
                        )
                    }            
                </div>    
          );
        }
    }

}
   
            

export default MenuEsquerdo;