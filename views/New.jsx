import React, { Component } from "react";

const myStyle = {
  color: "#3B7177",
  backgroundColor: "#F1AAB7",
  padding: "5px",
  fontFamily: "Helvetica",
  textAlign: "center",
};
const bodyOne = {
  color: "#3B7177",
  backgroundColor: "#F1AAB7",
  padding: "5px",
  fontFamily: "Helvetica",
  textAlign: "center",
};

export default class New extends Component {
  render() {
    return (
      <div>
        <h1 style={myStyle}> New Pokemon</h1>
        <body style={bodyOne}></body>
        <form action="/pokemon" method="post">
          Pokemon Name: <input type="text" name="name" /> <br />
          Pokemon Color: <input type="text" name="color" /> <br />
          Pokemon Image: <input type="text" name="img" /> <br />
          Is Ready To Evolve: <input type="checkbox" name="readyToEvolve" />
          <br />
          <input type="submit" name="" value="Create Pokemon" />
        </form>
        <a href="/pokemon">Return without editing</a>
      </div>
    );
  }
}
