import React, { Component } from "react";
import "./App.css";
import MyHeader from "./components/MyHeader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader
          classHomeTitle={"mainTitleHome"}
          bgColor={"#000"}
          title={"My New React App"}
          number={0}
          myBoolean={false}
          myArray={[1, 2, 3, 4, 5, 6]}
        />
      </div>
    );
  }
}

export default App;
