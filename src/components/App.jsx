import React, {Component} from "react";
import {nanoid} from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: [],
  };

  render() {
    return (
      <div id={nanoid()}>
        React homework template
      </div>
    );
  }
}

export default App;
