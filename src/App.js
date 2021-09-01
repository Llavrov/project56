import React from 'react';
import Home from "./components/home";
import Header from "./components/header";
import "./css/App-css.css";

function App() {

  return (
    <div className="App-container">
        <Header/>
        <Home/>
    </div>
  );
}

export default App;
