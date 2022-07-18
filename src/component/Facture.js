import React from "react"
import CalendrierEcheance from "./CalendrierEcheance";

export default function Facture(props){
    const [date,setDate]=React.useState(new Date());
    const json=JSON.parse(props.excel)
    const jsonFourniss=JSON.parse(props.fournisseur)
    function getAllFournisseur(){return(jsonFourniss.map(
        fourni=>{
            return(<h4>{`${fourni.Fournisseur} : ${json[31][fourni.Fournisseur]}`}</h4>)
        }
    ))}

    return (
        <div className="Facture">
            <div className="Facture--calen">
                <h1>Facture à payer</h1>
                <CalendrierEcheance excel={props.excel} setDate={setDate}/>
            </div>
            <div className="Facture--calen">
                <h1>Recap par fournisseur</h1>
                {getAllFournisseur()}
            </div>
        </div>
    )
}
