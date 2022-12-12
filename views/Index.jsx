import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };


function Index( {pokemons} ) {
  return (
    <div>
        <h1>See All The Pokemon!</h1>
    <ul>
    {pokemons.map((pokemon, i) => {
        return (
            <li key = {i}>
                <a href = {`/pokemon/${i}`}>
                    {pokemon.name}
                </a>
                
            </li>
        )
    })}
    </ul>
    </div>
  )
}

export default Index