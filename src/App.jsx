import React from "react";
import imagen from "./image/logo512.png";
import "./index.css";
import { Route, Routes} from 'react-router-dom';
import Galeria from "./galeria";
import Home from "./home";
import Form from "./form"

export function App() {
  const backgroundColor = "#A2D2FF";
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor }}>
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <div className="row col-12 align-items-end">
              <img
                src={imagen}
                alt="Logo"
                width="80"
                height="64"
                className="d-inline-block align-text-top col-6"
              ></img>
              <h3 className="col-4">Daily Tasks</h3>
            </div>
          </a>
        </div>
      </nav>
      {/* TODO: - base de datos
                - crear componente taskDetail
                - crear boton taskUpdate dentro de la tarea*/}
      
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/galeria/:id" Component={Galeria}/>
        <Route path="/formulario" Component={Form}/>
      </Routes>
    </div>
  );
}


