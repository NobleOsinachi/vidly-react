import { React } from "react";
import { ReactDOM } from "react-dom";
import logo from './logo.svg';
import './App.css';
import Movies from "./components/movies";
import Counters from "./components/counters";

function App() {
  return (
    <div className="container" >

    <Counters />
    {/* <Movies /> */}
    </div>
  );
}

export default App;

