import React from 'react'

const myStyle = {
    color: "#3B7177",
    backgroundColor: "#F1AAB7",
    padding: "5px",
    fontFamily: "Helvetica",
    textAlign: 'center'
  };
  const bodyOne = {
    color: "#3B7177",
    backgroundColor: "#F1AAB7",
    padding: "5px",
    fontFamily: "Helvetica",
    textAlign: 'center'
  };



function Index( {pokemons} ) {
  return (
    <div>
        <h1 style={myStyle}>See All The Pokemon!</h1>
        <a href="/pokemon/new"> Create a new Pokemon</a>
        <body style={bodyOne}></body>
    <ul>
    {pokemons.map((pokemon, i) => {
        return (
            <li key = {i}>
                <a href = {`/pokemon/${pokemon.id}`}>
                    {pokemon.name}
                </a>
                <br />
                <form
                  action={`/pokemon/${pokemon._id}?_method=DELETE`}
                  method="POST"
                ><input type="submit" value="EDIT" />
                </form>
                <form
                  action={`/pokemon/${pokemon._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                  </form> <br />
            </li>
        )
    })
}
    </ul>
    </div>
  )
}

export default Index;