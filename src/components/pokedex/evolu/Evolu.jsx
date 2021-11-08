import React, {Component} from 'react';
import PokeService from '../../service/PokeService';
import Poke from "../poke/Poke";
import M from "materialize-css"
class Evolu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            descriptions: [],
            loading: true,
        };
    }

    componentDidMount() {
        M.AutoInit();
        this.getEvolutions(this.state.id);
    }

    async getEvolutions(id){
        this.setState({
            loading: true
        });
        if(id<1) id = 1;
        const evolution = await PokeService.getEvolutionsById(id);
        this.setState({
            descriptions: evolution.data.pokemons,
            loading: false
        });
        M.AutoInit();

}


render(){
    return(
        <div className="row">
            <div className="col s12">
                { this.state.descriptions.map((element, i) =>{
                    return <Poke id={element}  />
                    
                })}
            </div>
        </div>
    )
}

}

export default Evolu;