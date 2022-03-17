import React, {useState} from 'react';
import axios from 'axios';
import {Button} from './Style';

const Pokemon = () => {
    const [pokeData, setPokeData] = useState([]);

    const onClick = (e) => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
        .then((response) =>{setPokeData(response.data.results);})
        .catch(error => console.log(error));
    };
    return (
        <div>
            <Button onClick = { onClick }>All Pokemon!</Button>
            {pokeData.map((mon, i) => (
            <mon key = { i }>{ mon.name }</mon>
            ))}
        </div>
    );
}
export default Pokemon;