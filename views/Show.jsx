import React from "react";
import pokemon from "../models/pokemon";

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

const Show = ({ pokemons }) => {
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2>
        {pokemon.name.charAt(0).toUpperCase()}
        {pokemon.name.slice(1)}
      </h2>
      <img src={`${pokemon.img}.jpg`} />
      <br />
      <a href="/pokemon">Back</a>
      <ul>
        {pokemons.map((pokemon, i) => {
          return (
            <li key={i}>
              <a href={`/pokemon/${i}`}>{pokemon.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Show;
