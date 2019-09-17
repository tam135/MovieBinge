import React from "react";

import Header from "./Components/elements/Header/Header";
import Home from "./Components/Home/Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
