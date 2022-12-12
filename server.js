// Import Dependencies
const express = require("express"); // import express

// Database Connection
const pokemon = require("./models/pokemon"); // import pokemon

// Create our Express Application Object Bind Liquid Templating Engine
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!");
  });

app.get ("/pokemon", (req, res) => {
    res.render("Index", {pokemons: pokemon});
});

app.get ("/pokemon/:id", (req, res) => {
    res.send(req.params.id);   
});



// Server Listener
//////////////////////////////////////////////
app.listen(3000, () => console.log(`listening`));

