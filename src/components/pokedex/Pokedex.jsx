import React, {Component} from 'react';
import M from "materialize-css";
import Evolu from './evolu/Evolu';
import Poke from './poke/Poke';
import PokeService from '../service/PokeService';
class Pokedex extends Component {



    constructor(props){
        super(props);
        this.state = {
            id:this.props.match.params.id,
            poke:{}
         
        };
    }

    changeId(new_id){
        if(new_id<1) new_id = 1;
        this.setState({
            id: new_id
        });
    }
    componentDidMount(){
        PokeService.getPokeById(this.state.id).then(res=>{
            this.setState({poke:res.data});
        })
        M.AutoInit();

    }
    render(){
        return (
            <div className="container">
                <h1>Pokedex</h1>
                <div className="card">
                    <div className="card-content">
                        <Poke id={this.state.id} />
                        <ul className="collapsible">
                   
                            <li>
                                <div className="collapsible-header"><i className="material-icons">filter_drama</i>Evoluciones
                                </div>
                                <div className="collapsible-body">
                                    <Evolu id={this.state.id} />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card-action">
                        <button className="btn btn-link" onClick={ () => this.changeId(this.state.pokemon_id - 1)}>Anterior</button>
                        <button className="btn btn-link" onClick={ () => this.changeId(this.state.pokemon_id + 1)}>Siguiente</button>
                    </div>
                </div>
            </div>
        );
    }

  //  componentDidMount() {
       
   // }
}



export default Pokedex;