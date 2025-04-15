// import { useState } from 'react';

import "./App.css";
import About_Me from "./Seccion/About_Me";
import Footer from "./Seccion/Footer";
import Header from "./Seccion/Header";
import Skils from "./Seccion/Skils";

function App() {
  return (
    <>
      <Header />
      <div className="cuerpito">
        <About_Me />
        <div className="divider" />
        <Skils />
        <div className="divider" />
      </div>
      <Footer />
    </>
  );
}

export default App;
