import React, { Component } from 'react';
import {useEffect, useState} from "react";
import { Card,Container, Dimmer, Divider, Icon, Image, Input, Loader, Statistic} from 'semantic-ui-react';
import PokeService from './service/PokeService';
const Home = () => {

    const [poke, setPoke] = useState([]);
    const [search, setSearch] = useState([])

    useEffect(() => {
        
        const fetchData =  () => {
           PokeService.getPokesAll()
                .then(json => {
                    setPoke(json.data)
                    setSearch(json.data)
                })
                .then()
                .catch(reason => {
                    alert("error fetching datos")
                })
        };
        fetchData();
    }, [])

    function PokemonCardList() {
        return (
            <Card.Group itemsPerRow={8}>
                {search.map(poke => (
                    <Card key={poke.id}
                          raised
                          as='a'
                          image={poke.sprites.front_default}
                          href={`view-poke/${poke.id}`}
                    />
                ))}
            </Card.Group>
        );
    }

    return (
        <Container>
            <Input
                style={{marginTop: "10px"}}
                size={"large"}
                icon={<Icon name='search' inverted circular link/>}
                placeholder='Buscar...'
                onChange={event => {
                    setSearch(poke.filter(
                        value => value.name.includes(event.target.value)
                    ))
                }}
            />
            <Statistic inverted float={"right"} style={{marginLeft: "100px"}} size={"tiny"}>
                <Statistic.Value>{search.length}</Statistic.Value>
                <Statistic.Label>Pokémon</Statistic.Label>
            </Statistic>
            <Divider/>
            <Image src="pokeapi_256.png" centered size={"medium"}/>
            {
                poke.length === 0 ?
                    <Dimmer active>
                        <Loader size='large'>Cargando</Loader>
                    </Dimmer> :
                    <PokemonCardList/>
            }
        </Container>

    )

}

export default Home;