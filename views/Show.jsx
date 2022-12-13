import React from "react";

const myStyle = {
    color: "#3B7177",
    backgroundColor: "#F1AAB7",
    padding: "5px",
    fontFamily: "Helvetica"
  };

const Show = ({ pokemon }) => {
  return (
    <div>
      <h1 style={myStyle}>Gotta Catch 'Em All</h1>
      <h2>
        {pokemon.name.charAt(0).toUpperCase()}
        {pokemon.name.slice(1)}
      </h2>
      {/* <img src={`${pokemon.img}.jpg`} /> */}
      <p>{pokemon.name}</p>
      <p>{pokemon.color}</p>
      {/* <p>{pokemon.isReadyToEvolve}</p> */}
      <br />
      <a href="/pokemon">Back</a>
    </div>
  );
};

export default Show;
