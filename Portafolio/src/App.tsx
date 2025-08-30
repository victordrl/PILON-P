// import { useState } from 'react';

import "./App.css";
import About_Me from "./Seccion/About_Me";
import Education from "./Seccion/Education";
import Experiencia from "./Seccion/Experiencia";
import Footer from "./Seccion/Footer";
import Header from "./Seccion/Header";
import Menu from "./Seccion/Menu";
import Skils from "./Seccion/Skils";
import Proyectos from "./Seccion/Proyectos";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <div className="cuerpito">
        <About_Me />
        <div className="divider" />
        <Skils />
        <div className="divider" />
        <Experiencia />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Proyectos />
      </div>
      <Footer />
    </>
  );
}

export default App;
