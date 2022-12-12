import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

  class MyFirstComponent extends React.Component() {
    return (
      <div style={myStyle}>My First React Component!</div>;
    }
}

function Index() {
  return (
    <div>
        <h1>See All The Pokemon!</h1>
    </div>
  )
}

export default Index