import React from 'react'

const myStyle = {
  color: "#3B7177",
  backgroundColor: "#F1AAB7",
  padding: "5px",
  fontFamily: "Helvetica",
  
};



function Index( {pokemons} ) {
  return (
    <div>
        <h1 style={myStyle}>See All The Pokemon!</h1>
        <a href="/pokemon/new"> Create a new Pokemon</a>
    <ul>
    {pokemons.map((pokemon, i) => {
        return (
            <li key = {i}>
                <a href = {`/pokemon/${pokemon.id}`}>
                    {pokemon.name}
                </a>
                <a href={`/pokemon/${pokemon._id}/edit`}>Edit This Pokemon</a>
                <form
                  action={`/pokemon/${pokemon._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                  </form>
            </li>
        )
    });
    </ul>
    </div>
  )
}

export default Index;