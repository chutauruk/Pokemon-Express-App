import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1> New Page</h1>
        <form action="/pokemon" method="post">
            Pokemon Name: <input type="text" name="name" /> <br />
            Pokemon Color: <input type="text" name="color" /> <br />
            Is Ready To Evolve: <input type="checkbox" name="readyToEvolve" /><br/>
            <input type="submit" name="" value="Create Pokemon" />
        </form>
        <a href="/pokemon">Return without editing</a>
      </div>
    )
  }
}
