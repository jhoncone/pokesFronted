import React, { Component } from 'react';
import PokeService from './service/PokeService';
import { makeStyles } from '@material-ui/core/styles'
class ViewPokeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            poke:{}
         

        }
    }

    componentDidMount(){
        PokeService.getPokeById(this.state.id).then(res=>{
            this.setState({poke:res.data});
        })

    }
    render() {
        return (
            <div>
            <div className="car col-md-6 offset-md-3">
            <h3 className="text-center">View Poke details</h3>
            <div className="card-body">
                <div className="row">
                    <label>Poke id</label>
                    <div>{this.state.poke.id}</div>
                </div>

                <div className="row">
                    <label>Poke nombre</label>
                    <div>{this.state.poke.name}</div>
                </div>

           

            </div>
            </div>


             
         </div>
            );
        }
    }
    

    
    export default ViewPokeComponent;