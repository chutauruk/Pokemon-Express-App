// Import Dependencies
require("dotenv").config(); // Load ENV Variables
const mongoose = require("mongoose");
const Pokemon = require("./models/pokemon");
const express = require("express"); // import express

//... and then farther down the file
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Database Connection
// const Pokemon = require("./models/pokemon"); // import pokemon

// Create our Express Application Object Bind Liquid Templating Engine
const app = express();

//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));

//Index Route
app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", {
      pokemons: allPokemon,
    });
  });
});

//New Route
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

// app.get ("/pokemon/:id", (req, res) => {
//     Pokemon.findById(req.params.id,(pokemon) => {
//         res.render("show", { pokemons: pokemon })
//     })
// });

//Post/Create
app.post("/pokemon", (req, res) => {
  if (req.body.readyToEvolve === "on") {
    req.body.readyToEvolve = true;
  } else {
    req.body.readyToEvolve = false;
  }
  Pokemon.create(req.body, (error, createdPokemon) => {
    res.redirect("/pokemon");
  });
});

// Show Route
app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    });
  });
});

//Edit Route
app.get("/pokemon/:id/edit", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // get the fruit from the database
  Pokemon.findById(id)
    .then((pokemon) => {
      // render Edit page and send fruit data
      res.render("pokemon/Edit.jsx", { pokemon });
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

//Update Route
app.put("/pokemon/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // check if the readyToEat property should be true or false
  req.body.readyToEvolve = req.body.readyToEvolve === "on" ? true : false;
  // update the pokemon
  Pokemon.findByIdAndUpdate(id, req.body, { new: true })
    .then((pokemon) => {
      // redirect to main page after updating
      res.redirect("/pokemon");
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

//Delete Route
app.delete("/pokemon/:id", (req, res) => {
  Pokemon.findByIdAndRemove(req.params.id, (err, foundPokemon) => {
    res.redirect("/pokemon"); //redirect to the pokemon index
  });
});

// Pokemon.deleteMany({}).then((data) => {
//     // Seed Starter Pokemons
//     Pokemon.create(startPokemons).then((data) => {
//       // send created fruits as response to confirm creation
//       res.json(data);
//     });
//   });

// Routes
////////////////////////////////////////////
// app.get("/", (req, res) => {
//     res.send("Welcome to the Pokemon App!");
//   });

// app.get ("/pokemon", (req, res) => {
//     res.render("Index", {pokemons: pokemon});
// });

// Server Listener
//////////////////////////////////////////////
app.listen(3000, () => console.log(`listening on 3000`));
