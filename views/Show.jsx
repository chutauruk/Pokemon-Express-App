import React from "react";

const myStyle = {
    color: "#3B7177",
    backgroundColor: "#F1AAB7",
    padding: "5px",
    fontFamily: "Helvetica",
    textAlign: 'center'
  };

  const headerTwo = {
    color: "#3B7177",
    backgroundColor: "#F1AAB7",
    padding: "5px",
    fontFamily: "Helvetica",
    textAlign: 'center'
  };

  const paraOne = {
    color: "#3B7177",
    backgroundColor: "#F1AAB7",
    padding: "5px",
    fontFamily: "Helvetica",
    textAlign: 'center'
  };

  const paraTwo = {
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

const Show = ({ pokemon }) => {
  return (
    // <body style={divStyle}>
    <div>
      <h1 style={myStyle}>Gotta Catch 'Em All</h1>
      <h2 style={headerTwo}>
        {pokemon.name.charAt(0).toUpperCase()}
        {pokemon.name.slice(1)}
      </h2>
      <body style={bodyOne}></body>
      <div>
        <img style={{display: "block", alignItems: "center", border: "dotted", width: "400px", margin: "auto"}} src={`${pokemon.img}`} />
      </div>
      <p style={paraOne}>{pokemon.name}</p>
      <p style={paraTwo}>{pokemon.color}</p>
      {/* <p>{pokemon.isReadyToEvolve}</p> */}
      <br />
      <a href="/pokemon">Back</a>
    </div>
  );
};

export default Show;

//pokemondb.net/pokedex/all