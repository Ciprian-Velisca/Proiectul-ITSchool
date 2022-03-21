import React from "react";
import logo5 from "./Fotograf.jpg"
import "./Despre.css";

function Despre() {
    const handlePortofoliu = () => {
        window.open("/Portofoliu");
    }
    return (
        <>
        <div>
                <h1> Pasiune inainte de toate</h1>
                <p>
                Oamenii fac evenimentele memorabile
                </p>
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
        
        </>
    )
}

export default Despre;