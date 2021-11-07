import React, { Component } from 'react';
import { Link ,withRouter} from 'react-router-dom';
import PokeService from './service/PokeService';
import { AppBar, Toolbar, CssBaseline, IconButton, Typography, Button, Drawer, Paper, Divider, Container, Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

class ListPokeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            pokes:[]

        }
      
       }
       viewPoke(id){
        this.props.history.push(`/view-poke/${id}`);
       // this.props.history.push(`/update-producto/${id}`);
       }

       componentDidMount(){
        PokeService.getPokesAll().then((res)=>{
        this.setState({pokes:res.data});
        });

       
    } 


     useStyles = makeStyles(theme => ({
        paper: {
            width: 240
        },
        div: {
            padding: 20,
            display: 'flex',
            alignItems: 'center'
        },
        logo: {
            height: 60,
            marginLeft: 30,
            marginRight: 'auto'
        },
        footer: {
            bottom: 0,
            position: 'fixed',
            width: '100%'
        },
        container: {
            marginTop: theme.spacing(15)
        },
        card: {
            maxWidth: 350,
            background: 'linear-gradient(45deg, #AE64F3 20%, #0C00FF 90%)'
        },
        imagePoke: {
            height: 250
        }
    }))

    render() {
       
        return (
           
            <div>
            <h2 className="text-center">Lista Pokes</h2>
        
        <div className="row">
            <table className="table table-striped-table-bordered">

             <thead>
                 <tr>
                     <th>Poke id</th>
                     <th>Poke Name</th>
                     <th>Poke Image</th> 
                     <th>Actions</th>
                 </tr>
             </thead>

             <tbody>

                 {
                     this.state.pokes.map(
                         poke=>
                         <tr key={poke.id} className="tr">
                             <td> {poke.url} </td>
                             <td> {poke.name} </td>
                             
                                                    
										<CardMedia
											image={poke.sprites.front_default}
											className={this.useStyles.imagePoke}
										/>
								
                             <td>
                              
                                 <button style={{marginLeft:"10px"}} onClick={()=>this.viewPoke(poke.id)} className="btn btn-info">View</button>

                             </td>
                           
                         </tr>
                     )
                 }
             </tbody>
            
            </table>
      

        </div>


        </div>
         
            );
        }
    }
    

    
    export default withRouter(ListPokeComponent);
