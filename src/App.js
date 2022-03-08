import React from 'react';
import Home from "./pages/home";
import { Route } from 'react-router';
import Header from "./components/header";
import Contacts from "./pages/contacts";
import Parallax from "./pages/Parallax";
import "./css/App-css.css";
import PopUp from "./components/popUp";

function App() {

    const [popUp, setPopUp] = React.useState(false);

  return (
    <div className="App-container">
        <Header/>
        {/*<div className={!popUp ? "write-text" : "write-text-off"} onClick={() => setPopUp(!popUp)}> Написать </div>*/}
        {/*<PopUp state={popUp} setState={setPopUp}></PopUp>*/}
        <Route path={['/', '/project56', ]} render={() => <Home state={popUp} setState={setPopUp}/>} exact/>
        <Route path={['/Contacts']} render={() => <Contacts/>} exact/>
        <Route path={['/Parallax']} render={() => <Parallax/>} exact/>
    </div>
        )}

export default App;
