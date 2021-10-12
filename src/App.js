import React from 'react';
import Home from "./components/home";
import Header from "./components/header";
import "./css/App-css.css";
import PopUp from "./components/popUp";

function App() {

    const [popUp, setPopUp] = React.useState(false);

  return (
    <div className="App-container">
        {/*<Header/>*/}
        {/*<div className={!popUp ? "write-text" : "write-text-off"} onClick={() => setPopUp(!popUp)}> Написать </div>*/}
        {/*<PopUp state={popUp} setState={setPopUp}></PopUp>*/}
        <Home state={popUp} setState={setPopUp}/>
    </div>
  );
}

export default App;
