
import { Component } from 'react';
import Etablissement from './Etablissement';
import { Message, Card } from 'semantic-ui-react';

import './App.css';
import Recherche from './Recherche';

class App extends Component {

  state = {
    data: [],
    error:''
  }
  onEmpty = () => {
    this.setState({ data: [], error : ''})
  }
  
  renderResults = () => {
    return this.state.data.map((etablissement) => {
      return <Etablissement key={etablissement.properties.id} properties={etablissement.properties} />
    })
  }


  //onSearch= (param1,param2)=>{
   // console.log(param1,param2)
 // }
 onSearch = async (dpt, type) => {
  if (dpt && type) {
    try {
      let response = await fetch(`https://etablissements-publics.api.gouv.fr/v3/departements/${dpt}/${type}`);
      let donne= await response.json();
      this.setState({data:donne.features,error:''})
    } catch(e) {
      this.setState({ error : "Erreur lors de la recherche"})
    }
  } else {
    this.setState({ error: "Merci de choisir un département et un établissement"})
  }
}


  render() {
    return (
      <div >
        <h1> Annuaire des administrations </h1>
        <Recherche onHaythem={this.onSearch} onSearch={this.onEmpty}/>
        {this.state.error? <Message warning>{this.state.error}</Message>:undefined}
        {this.state.data ?
          <Card.Group>
            { this.renderResults() }
          </Card.Group>
          : undefined }


      </div>
    );

  }


}

export default App;
