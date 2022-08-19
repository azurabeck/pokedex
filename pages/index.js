import React , {useState} from 'react'
import { useEffect } from 'react'

export async function getStaticProps(context) {

    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/1/') 
        .then((serverResponse) => {
            const getPokemon = serverResponse && serverResponse.json()
            return getPokemon
        })
        .then((pokemonList) => {
            return pokemonList.pokemon_entries
        })


    return {
      props: {pokemons}, // will be passed to the page component as props
    }
}

export default function index(props) {

 const { pokemons } = props 

  return (
    <ul>
        {pokemons && pokemons.map((pokemon , i) => (
            <ul key={pokemon.entry_number}>
                <li>{pokemon.pokemon_species.name}</li>
            </ul>            
        ))}
    </ul>
  )
}
