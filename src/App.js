import React from 'react';
import Home from "./components/home";
import Header from "./components/header";
import "./css/App-css.css";
import PopUp from "./components/popUp";

function App() {

  return (
    <div className="App-container">
        {/*<Header/>*/}
        <PopUp></PopUp>
        <Home/>
    </div>
  );
}

export default App;
