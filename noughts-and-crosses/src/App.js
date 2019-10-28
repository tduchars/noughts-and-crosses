import React from "react";
import "./App.css";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className=" animated fadeInDown delay-0.8s">
          Noughts and Crosses!
        </h1>
      </header>
      <Grid />
    </div>
  );
}

export default App;
