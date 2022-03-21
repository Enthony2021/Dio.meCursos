import React, { Component } from 'react';
import Filho from './filho';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  alterarCopo = () => {
    this.setState({
      copo: 'Refrigerante'
    });
  }

  render() {
    const { clock, copo } = this.state;
    return (
      <>
        <Filho />
        <div>
          <h1>{clock}</h1>
          <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
        </div>

      </>
    );
  }
}

export default App;
