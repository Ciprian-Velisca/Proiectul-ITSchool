import React from "react";
import "./Formular.css";
import { useState } from "react";


function Formular() {
    const [nume, setNume] = useState("");
    const [prenume, setPrenume] = useState("");
    const [email, setEmail] = useState("");
    const [telefon, setTelefon] = useState("");
    const [data, setData] = useState("");
    const [tip, setTip] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const formular = {nume, prenume, email, telefon, data, tip};

        fetch("http://localhost:3000/?", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formular)
        })
        .then((res) => res.json()); 
            if (Response.status === 200) {
            setMessage("")
        } else 
            setMessage("Formular netrimis. Avem nevoie de un POST REQUEST valid")
        // .catch((err) => console.error(err));
    }


    return (
    <div className="formular">
        <form >
            <label>Nume:</label> <br></br>
                <input 
                    type="text" 
                    name="nume"
                    value={nume} 
                    placeholder="Nume"
                    onChange={(e) => setNume(e.target.value)}></input>
                    
            <label>Prenume:</label>
                <input 
                    type="text" 
                    name="prenume" 
                    value={prenume}
                    placeholder="Prenume"
                    onChange={(e) => setPrenume(e.target.value)}></input>
            <label>E-mail:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"></input>
            <label>Telefon:</label>
                <input 
                    type="number" 
                    name="telefon" 
                    value={telefon}
                    onChange={(e) => setTelefon(e.target.value)}
                    placeholder="Numar de telefon"></input>
            <label>Data evenimentului:</label>
                <input 
                    type="date" 
                    name="data" 
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="Data evenimentului"></input>
            <label>Tipul evenimentului dorit:</label>
            <select 
                value={tip}
                onChange={(e) => setTip(e.target.value)}>
                <option>Nunta</option>
                <option>Cununie</option>
                <option>Botez</option>
                <option>Majorat</option>
            </select>  
            <button onClick={handleSubmit} type="submit" className="submit">Trimite formular</button>
            <div className="message">{message ? <p className="alert">{message}</p> : null } </div>
        </form>
    </div>
    );
}

export default Formular;