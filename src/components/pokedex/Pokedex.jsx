import React, {Component} from 'react';
import M from "materialize-css";
import Evolu from './evolu/Evolu';
import Poke from './poke/Poke';
class Pokedex extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:this.props.match.params.id
         
        };
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
                </div>
            </div>
        );
    }

    componentDidMount() {
        M.AutoInit();
    }

}



export default Pokedex;