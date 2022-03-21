import "./Acasa.css";

import React from "react";
import logo from "./circuslane3.png";
import logo1 from "./calton hil.png";
import logo2 from "./dean village2.png";
import logo3 from "./scott monument.png";
import logo4 from "./circus lane1.jpg"
import icon from "./phone-solid.svg"
import logo5 from "./Fotograf.jpg";

function Acasa() {
    const handleContact = () => {
        window.open("/Contact");
    }

    const handlePortofoliu = () => {
        window.open("/Portofoliu");
    }
    return (
        <>
            <div>
                <h1> Fotograf Profesionist Nunta</h1>
                <p>
                Ma bucur ca ai ajuns pe aceasta pagina. Numele meu este Daniel si sunt fotograf de nunta in Arad, dar ma deplasez cu mare drag si in alte orase precum Oradea, Deva, Timisoara, Satu Mare etc. Sunt aproape 8 ani de cand am pus mana pe primul aparat foto, moment in care mi-am descoperit pasiunea pentru fotografia de nunta, botez si alte tipuri de evenimente. Desi m-au preocupat in principal evenimentele nu am spus nu niciodata provocarilor venite din industria de fashion (fotografie de produs), food sau corporate.
                </p>
            </div>

            <div className="container">
                <h2>Descopera portofoliul meu sau cateva fotografii reprezentative</h2>
                <img src={logo} className="img" alt="logo"/>
                <img src={logo1}className="img" alt="logo"/>
                <img src={logo2}className="img" alt="logo"/>
                <img src={logo3} className="img" alt="logo"/>
                <img src={logo4} className="img" alt="logo"/>
                <button onClick={handleContact}> Formular contact</button>
                <button> <img src={icon} className="icon" alt="icon"/> 0758967348</button>
                <button onClick={handlePortofoliu}>Portofoliu</button>
            </div>

            <div>
                <h2>Pasiune inainte de toate </h2>
                <p>
                Sunt fotograf de nunta si evenimente din pasiune, iar ceea ce fac are ca si principala motivatie pasiunea. Pe parcursul evenimentului ma voi implica 100% pentru ca voi sa aveti amintirile pe care vi le doriti.
                Daca ai ajuns pe aceasta pagina inseamna ca esti in cautarea unui fotograf de nunta in Arad sau in alt oras precum Timisoara, Oradea, Deva si altele. Poate am gresit, dar cu siguranta cauti un fotograf de botez sau un fotograf de cununie. Indiferent de evenimentul pe care urmeaza sa il organizezi, eu te pot ajuta. Am fotografiat de-a lungul timpului nunti, cununii, botezuri, majorate, evenimente corporate, petreceri private, restaurante, am realizat sedinte foto si lista ar putea continua.
                Sunt fotograf de nunta cat si fotograf evenimente. Iubesc sa fiu fotograf de nunta in Arad sau in orice alt judet in care mi se solicita serviciile, dar cu toate acestea fotografiez cu mare placere si botezuri, cununii, dar si alte tipuri de evenimente.
                Pentru ca vorbele sunt de prisos, intra pe pagina de portofoliu si descopera o parte din fotografiile mele!
                </p>
            </div>

            <div className="row">

                <div className="option">
                    <h3>Preview in 3 zile</h3>
                    <span>Primesti o selectie cu cele mai 
                        <br></br>bune fotografii in 3 zile de la
                        <br></br>eveniment pentru a retrai 
                        <br></br>momentele.</span>
                </div>

                <div className="option">

                    <h3>Disponibilitate</h3>
                    <span>
                    Daca iti doresti sa fiu fotograful 
                    <br></br>tau pot calatori in orice oras 
                    <br></br>din Romania sau in Europa.
                    </span>
                </div>

                <div className="option">
                    <h3>Predare in 14 zile</h3>
                    <span>
                    Vei primi toate fotografiile 
                    <br></br>editate in aproximativ 14 zile de 
                    <br></br>la data evenimentului.
                    </span>
                </div>

                <div className="option">
                    <h3>Alaturi de voi</h3>
                    <span>
                    In ziua evenimentului sunt alaturi 
                    <br></br>de voi in permanenta 
                    <br></br>pentru ca totul sa fie perfect!
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="option">
                    <h4>Cine sunt eu?</h4>
                    <p>
                    Numele meu este Daniel si sunt fotograf de nunta in Arad insa de-a lungul timpului am facut fotografie de natura si nu numai.
                    Fotografia de eveniment reprezinta pentru mine o pasiune si un mod de a trai. In acelasi timp, fotografia de nunta, botez sau cununie reprezinta un stil de viata ce ma face fericit. Cu ajutorul aparatului pot descoperi tot ceea ce este in jurul meu dintr-o alta perspectiva, iar asta ma face fericit.
                    Sunt pasionat de ceea ce fac, iar fiecare eveniment reprezinta pentru mine o provocare. In timpul fiecarui eveniment pun la bataie toate resursele pentru a surprinde cadre pline de magie.
                    </p>
                    <h4>De ce sunt fotograf?</h4>
                    <p>
                    Scopul meu este sa surprind prin creativitate, compozitie, cromatica, poveste, dar si prin sentimentele pe care o fotografie poate sa le transmita.
                    Obiectivul meu principal este sa ii bucur pe cei din jurul meu prin ceea ce fac. Frumusetea fotografiei de nunta, botez sau cununie consta in emotiile si trairile persoanelor participante la un eveniment. Frumusetea evenimentelor este trecatoare, fotografiile mereu vor fi pagini din povestea voastra.
                    La inceput am fost atras de sedintele foto fashion si ma vedeam facand asta mereu. Acum insa, iubesc sa fiu fotograf de nunta si fotograf de botez pentru cei mici.
                    Daca sunteti in cautarea unui fotograf de nunta in Bucuresti, Craiova, Constanta sau in orice alt oras, nu ezitati sa imi scrieti. Raspund intr-un timp cat mai scurt tuturor persoanelor!
                    </p>

                    <button onClick={handlePortofoliu}>Descopera portofoliul meu!</button>

                </div>

                <div className="option">
                    <img src={logo5} className="imag" alt="logo"/>

                </div>
                

            </div>

            <div className="grid">
                <span className="contact">M-as bucura sa fiu alaturi de voi intr-o zi atat de importanta</span>
                <button onClick={handleContact}>Contacteaza-ma</button>
            </div>

            <div>
                <h2>Te invit sa descoperi portofoliul meu sau sa ma contactezi!</h2>
                <button onClick={handlePortofoliu}>Portofoliu</button>
                <button onClick={handleContact}>Contact</button>
                <button>e-mail: daniel@yahoo.com</button>
            </div>
        </>

    )
}

export default Acasa;