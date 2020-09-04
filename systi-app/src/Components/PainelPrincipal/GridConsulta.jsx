import React, {Component} from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import { PagingState, PagingPanel } from '@devexpress/dx-react-grid';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import '../CSS/GridConsulta.css'

class GridConsulta extends Component{
  constructor(props){
    super(props);
    this.state ={
      url: "https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1", 
      columns: [
          { name: 'id', title: 'ID' },
          { name: 'name', title: 'Nome' },
          { name: 'full_name', title: 'Nome Completo' },
        ],
      items: []
    }
  }

  componentDidMount(){
    fetch(this.state.url)
    .then(res => res.json())
    .then(
      (result) => {
        console.log('Data: ', result)
        this.setState({
            items: result
        });
      }
    )
  }

  render(){
    return(
      <div className="gridMat">
     <Grid
       rows={this.state.items}
       columns={this.state.columns}
     >
       <Table />
       <TableHeaderRow />
     </Grid>
   </div>
    )
  }

}


export default GridConsulta;
// const columns = [
//   { name: 'id', title: 'Código' },
//   { name: 'product', title: 'Descrição' },
//   { name: 'owner', title: 'Quantidade' },
// ];
// const rows = [
//   { 
//     id: 0, product: 'DevExtreme', owner: 'DevExpress' 
//   },
//   { 
//     id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' 
//   },
// ];

// export default () => (
//   <div className="card">
//     <Grid
//       rows={rows}
//       columns={columns}
//     >
//       <Table />
//       <TableHeaderRow />
//     </Grid>
//   </div>
// );
