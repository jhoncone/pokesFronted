import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, CssBaseline, IconButton, Typography, Button, Drawer, Paper, Divider, Container, Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core'
import PokeService from './service/PokeService';
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
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

const ListPokes =() =>{
	const classes = useStyles()
	const history = useHistory()
	const [open, setOpen] = useState(false)
	const [pokemon, setPokemon] = useState([])
     // const viewPoke=(id)=>{
    //   this.props.history.push(`/view-poke/${id}`);
    
     //  }
     const loadData = () => {
		//axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
			//.then(resp => {
				//for (let i = 0; i < resp.data.results.length; i++) {
					//axios.get(resp.data.results[i].url)
                    PokeService.getPokes().then((resp)=>{
                        for (let i = 0; i < 20; i++) {
                            axios.get(resp.data.results[i].url)
                            .then(result => {
							setPokemon(prevArray => [...prevArray, result.data])
						})
				}
			})
	}
      // componentDidMount(){
     //   PokeService.getPokes().then((res)=>{
     //   this.setState({pokes:res.data});
       // });
    //} 


	useEffect(loadData, [],
		console.log(pokemon))
   

  
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

                 
                    {pokemon.map((poke, index) => (
                       
                         <tr key={poke.id}>
                             <td> {poke.url} </td>
                             <td> {poke.name} </td>
                             
                             <td>
                             <CardContent>
										<CardMedia
											image={poke.sprites.front_default}
											className={classes.imagePoke}
										/>
										<Typography align='center' variant='h4'>{poke.name}</Typography>
									</CardContent>
                               

                             </td>
                           
                         </tr>
                     ))
                 }
             </tbody>
            
            </table>

        </div>


        </div>
         
            );
        
    }
    

    
    export default ListPokes;