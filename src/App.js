import {BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import logo6 from "./Pagini/Acasa/facebook-brands.svg";
import logo7 from "./Pagini/Acasa/instagram-brands.svg";
import logo8 from "./Pagini/Acasa/youtube-brands.svg"

import React from "react";
import Acasa from "./Pagini/Acasa/Acasa";
import Despre from "./Pagini/Despre/Despre";
import Formular from "./Pagini/Contact/Formular";
import Portofoliu from "./Pagini/Portofoliu/Portofoliu";
import Blog from "./Pagini/Blog/Blog";
import Intrebari from "./Pagini/Intrebari/Intrebari";
import Recenzii from "./Pagini/Recenzii/Recenzii";
import Servicii from "./Pagini/Servicii/Servicii";


function App() {
  return (
    <BrowserRouter>
     <nav style={{
       position: "fixed",
       top: "0",
       display: "flex",
       flexDirection: "row",
       background: "#343535",
       alignItems: "center",
       justifyContent:"center",
       width: "100%",
       height: "75px",
       
     }}>
      <Link style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        textDecoration: "none",
        width: "100%",
        color: "#dd9933",
        fontSize: "25px",
        fontFamily: "'Times New Roman', Times, serif",
        fontStyle: "bold",
        cursor: "pointer",
      }} to="/">Acasa</Link>
      <Link style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        textDecoration: "none",
        width: "100%",
        color: "#dd9933",
        fontSize: "25px",
        fontFamily: "'Times New Roman', Times, serif",
        fontStyle: "bold",
        cursor: "pointer",
      }} to="/Despre">Despre</Link>
      <Link style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        textDecoration: "none",
        width: "100%",
        color: "#dd9933",
        fontSize: "25px",
        fontFamily: "'Times New Roman', Times, serif",
        fontStyle: "bold",
        cursor: "pointer",
      }} 
        to="/Servicii foto">Servicii foto</Link>
      <Link style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        textDecoration: "none",
        width: "100%",
        color: "#dd9933",
        fontSize: "25px",
        fontFamily: "'Times New Roman', Times, serif",
        fontStyle: "bold",
        cursor: "pointer",
      }} to="/Portofoliu">Portofoliu</Link>
      <Link style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        textDecoration: "none",
        width: "100%",
        color: "#dd9933",
        fontSize: "25px",
        fontFamily: "'Times New Roman', Times, serif",
        fontStyle: "bold",
        cursor: "pointer",
      }} to="/Recenzii">Recenzii</Link>
      <Link style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        textDecoration: "none",
        width: "100%",
        color: "#dd9933",
        fontSize: "25px",
        fontFamily: "'Times New Roman', Times, serif",
        fontStyle: "bold",
        cursor: "pointer",
      }} to="/Blog">Blog</Link>
      <Link style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        textDecoration: "none",
        width: "100%",
        color: "#dd9933",
        fontSize: "25px",
        fontFamily: "'Times New Roman', Times, serif",
        fontStyle: "bold",
        cursor: "pointer",
      }} to="/Contact">Contact</Link>
      <Link style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        textDecoration: "none",
        width: "100%",
        color: "#dd9933",
        fontSize: "25px",
        fontFamily: "'Times New Roman', Times, serif",
        fontStyle: "bold",
        cursor: "pointer",
      }} to="/Intrebari">Intrebari</Link>
    </nav>

      <Routes>
        <Route path="/" element={<Acasa />}></Route>
        <Route path="/Despre" element={<Despre />}></Route>
        <Route path="/Contact" element={<Formular />}></Route>
        <Route path="/Portofoliu" element={<Portofoliu />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Intrebari" element={<Intrebari />}></Route>
        <Route path="/Recenzii" element={<Recenzii />}></Route>
        <Route path="/Servicii" element={<Servicii />}></Route>
      </Routes>

      <div style={{
        display: "flex",
        flexDirection: "row",
        background: "#343535",
        alignItems: "center",
        justifyContent:"center",
        width: "100%",
        height: "175px",
      }}>
        <span style={{
          color:"white",
        }}> © Daniel <br></br> Fotograf Profesionist</span>

        <p style={{
          fontSize: "25px",
          fontFamily: "'Times New Roman', Times, serif",
          fontStyle: "bold",
          color:"white",
        }}>Eu sunt Daniel, fotograf profesionist <br></br>cu o experienta de peste 5 ani in <br></br>fotografia de eveniment, fashion si corporate.</p>

        <span style={{color: "white", fontSize: "25px",
        fontFamily: "'Times New Roman', Times, serif",
        fontStyle: "bold",}}>
          Puteti sa ne contactati si pe:
        </span>
        <div style={{
          display:"flex",
          flexDirection:"row",
          
        }}>
        <img src={logo6} style={{width:"25px", padding:"12px"}} alt="logo"/>
        <img style={{width:"25px", padding:"12px"}} src={logo7} alt="logo"/>
        <img style={{width:"25px"}} src={logo8} alt="logo"/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
