// Import Dependencies
const express = require("express"); // import express

// Create our Express Application Object Bind Liquid Templating Engine
const app = express();

// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!");
  });

// Server Listener
//////////////////////////////////////////////
app.listen(3000, () => console.log(`listening`));

