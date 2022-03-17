import logo from "./logo.svg";
import "./App.css";
import Pokemon from "./components/pokemon";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Click for all the Pokemon!</h1>
      <Pokemon />
    </div>
  );
}

export default App;
