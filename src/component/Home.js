import React from "react";
import CalendrierRecap from "./CalendrierRecap";

export default function Home(props){
    const json=JSON.parse(props.excel)
    const [date,setDate]=React.useState(new Date());


    return (<div className="Home" >
            <div className="Home--contain2">
                <h1> Recap solde mensuel(dh)</h1>
                <CalendrierRecap excel={props.excel} setDate={setDate} excel2={props.excel2}/>
            </div>
            <div className="Home--contain1">
                <h1>Donnés du {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</h1>
                <h2 className="Home--solde">Solde J-1: {json[date.getDate()-2]? json[date.getDate()-2].ENE:"--"}</h2>
                <h1> Prévisionelle</h1>
                <ul>
                    <li>Recettes prévu: {json.length!=0? json[date.getDate()-1].RecettePrev:"--"}</li>
                    <li>Prevu a payer: {json.length!=0? json[date.getDate()-1].Totdp:"--"}</li>
                    <li>Solde prévu: {json.length!=0? json[date.getDate()-1].SoldePrev:"--"}</li>
                </ul>
                <h1> Realisé</h1>
                <ul>
                    <li>Recettes: {json.length!=0? json[date.getDate()-1].Recette:"--"}</li>
                    <ul>
                        <li>Medicament: {json.length!=0? json[date.getDate()-1].VenteMed:"--"}</li>
                        <li>Parapharmacie: {json.length!=0? json[date.getDate()-1].VentePara:"--"}</li>
                        <li>Entrée caisse: {json.length!=0? json[date.getDate()-1].CEM+ json[date.getDate()-1].CEP:"--"}</li>
                    </ul>
                    <li>Depense</li>
                    <ul>
                        <li>Facture payée: {json.length!=0? json[date.getDate()-1].TotalCout:"--"}</li>
                        <li>Sortie caisse: {json.length!=0? json[date.getDate()-1].CSM+json[date.getDate()-1].CSP:"--"}</li>
                        <li>Remise: {json.length!=0? json[date.getDate()-1].REMISEM+json[date.getDate()-1].REMISEP:"--"}</li>
                        <li>Charges: {json.length!=0? json[date.getDate()-1].Charges:"--"}</li>
                    </ul>
                    <li>Solde: {json.length!=0? json[date.getDate()-1].ENE:"--"}</li>
                </ul>
            </div>
    </div>
    )
}
