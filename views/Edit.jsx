const React = require("react");
const DefaultLayout = require("../DefaultLayout");

class Edit extends React.Component {
  render() {
    const fruit = this.props.pokemon;
    return (
      <DefaultLayout>
        <form action={`/pokemons/${pokemon._id}?_method=PUT`} method="post">
          <fieldset>
            <legend>Edit {pokemon.name}</legend>
            <label>
              NAME:
              <input
                type="text"
                name="name"
                placeholder="enter pokemon name"
                value={pokemon.name}
              />
            </label>
            <label>
              COLOR:
              <input
                type="text"
                name="color"
                placeholder="enter pokemon name"
                value={pokemon.color}
              />
            </label>
            <label>
              READY TO EVOLVE:
              {this.props.fruit.readyToEvolve ? (
                <input type="checkbox" name="readyToEvolve" defaultChecked />
              ) : (
                <input type="checkbox" name="readyToEvolve" />
              )}
            </label>
          </fieldset>
          <input type="submit" value={`Edit ${pokemon.name}`} />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
