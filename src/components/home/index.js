import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Link to="/">Firma</Link>
        </h1>
      </header>
      <div>
        <button className="button">
          <Link to="/setor">SETOR</Link>
        </button>
        <button className="button">
          <Link to="/cargo">CARGO</Link>
        </button>
        <button className="button">
          <Link to="/trabalhador">TRABALHADOR</Link>
        </button>
      </div>
    </div>
  )
}
export default Home;
